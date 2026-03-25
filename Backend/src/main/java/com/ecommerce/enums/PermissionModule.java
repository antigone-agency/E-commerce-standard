package com.ecommerce.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum PermissionModule {
    TABLEAU_DE_BORD("Tableau de bord"),
    PRODUITS_CATEGORIES("Produits & Catégories"),
    COMMANDES_RETOURS("Commandes & Retours"),
    CLIENTS_UTILISATEURS("Clients & Utilisateurs"),
    PAIEMENTS_TVA_LIVRAISON("Paiements & TVA/Shipping"),
    LOGS_EXPORT("Logs d'activité & Export"),
    APPARENCE_BANNIERES("Apparence & Bannières"),
    PROMOTIONS("Promotions"),
    ROLES_PERMISSIONS("Rôles & Permissions");

    private final String label;
}
