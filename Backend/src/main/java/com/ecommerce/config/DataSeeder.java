package com.ecommerce.config;

import com.ecommerce.entity.Permission;
import com.ecommerce.entity.Role;
import com.ecommerce.entity.Segment;
import com.ecommerce.entity.User;
import com.ecommerce.enums.AccountStatus;
import com.ecommerce.enums.PermissionModule;
import com.ecommerce.repository.RoleRepository;
import com.ecommerce.repository.SegmentRepository;
import com.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataSeeder implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final SegmentRepository segmentRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.seed.admin-email}")
    private String adminEmail;

    @Value("${app.seed.admin-password}")
    private String adminPassword;

    @Override
    @Transactional
    public void run(String... args) {
        seedRoles();
        seedSegments();
        seedSuperAdmin();
    }

    private void seedRoles() {
        if (roleRepository.count() > 0) {
            log.info("Rôles déjà initialisés, skip seed.");
            return;
        }

        log.info("Initialisation des rôles et permissions...");

        // ── SUPER_ADMIN: all permissions granted ──
        Role superAdmin = Role.builder()
                .name("SUPER_ADMIN")
                .label("Super Admin")
                .description("Accès total et illimité à toutes les fonctionnalités et paramètres système.")
                .build();
        for (PermissionModule module : PermissionModule.values()) {
            superAdmin.addPermission(Permission.builder()
                    .module(module).granted(true).build());
        }
        roleRepository.save(superAdmin);

        // ── ADMIN: most permissions, except Roles & Logs ──
        Role admin = Role.builder()
                .name("ADMIN")
                .label("Administrateur")
                .description("Gestion opérationnelle complète de la boutique et du catalogue.")
                .build();
        for (PermissionModule module : PermissionModule.values()) {
            boolean granted = module != PermissionModule.ROLES_PERMISSIONS
                    && module != PermissionModule.LOGS_EXPORT
                    && module != PermissionModule.PAIEMENTS_TVA_LIVRAISON;
            admin.addPermission(Permission.builder()
                    .module(module).granted(granted).build());
        }
        roleRepository.save(admin);

        // ── CLIENT: only orders access ──
        Role client = Role.builder()
                .name("CLIENT")
                .label("Client")
                .description("Compte client standard avec accès portail commandes uniquement.")
                .build();
        for (PermissionModule module : PermissionModule.values()) {
            boolean granted = module == PermissionModule.COMMANDES_RETOURS;
            client.addPermission(Permission.builder()
                    .module(module).granted(granted).build());
        }
        roleRepository.save(client);

        log.info("3 rôles créés: SUPER_ADMIN, ADMIN, CLIENT");
    }

    private void seedSegments() {
        if (segmentRepository.count() > 0) {
            log.info("Segments déjà initialisés, skip seed.");
            return;
        }

        log.info("Initialisation des segments client...");

        segmentRepository.save(Segment.builder()
                .name("NOUVEAU").label("Nouveau")
                .description("Client récemment inscrit")
                .color("bg-blue-100 text-blue-800")
                .icon("UserPlus")
                .build());

        segmentRepository.save(Segment.builder()
                .name("FIDELE").label("Fidèle")
                .description("Client régulier avec plusieurs commandes")
                .color("bg-green-100 text-green-800")
                .icon("Heart")
                .build());

        segmentRepository.save(Segment.builder()
                .name("VIP").label("VIP")
                .description("Client premium à forte valeur")
                .color("bg-amber-100 text-amber-800")
                .icon("Star")
                .build());

        segmentRepository.save(Segment.builder()
                .name("INACTIF").label("Inactif")
                .description("Client sans activité récente")
                .color("bg-gray-100 text-gray-800")
                .icon("Clock")
                .build());

        log.info("4 segments créés: NOUVEAU, FIDELE, VIP, INACTIF");
    }

    private void seedSuperAdmin() {
        if (userRepository.existsByEmail(adminEmail)) {
            log.info("Super Admin déjà existant, skip seed.");
            return;
        }

        Role superAdminRole = roleRepository.findByName("SUPER_ADMIN")
                .orElseThrow(() -> new RuntimeException("Rôle SUPER_ADMIN non trouvé"));

        User superAdmin = User.builder()
                .firstName("Super")
                .lastName("Admin")
                .email(adminEmail)
                .password(passwordEncoder.encode(adminPassword))
                .role(superAdminRole)
                .status(AccountStatus.ACTIVE)
                .build();

        userRepository.save(superAdmin);
        log.info("Super Admin créé: {}", adminEmail);
    }
}
