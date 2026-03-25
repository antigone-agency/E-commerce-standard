export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 py-20 bg-neutral-50 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Brand */}
      <div className="md:col-span-1">
        <span className="text-lg font-bold text-black uppercase mb-6 block">
          THE EDITORIAL MONOLITH
        </span>
        <p className="text-[11px] text-neutral-600 uppercase tracking-widest leading-relaxed">
          Une vision curatoriale de la mode moderne. Brutalisme, élégance et précision architecturale.
        </p>
      </div>

      {/* Assistance */}
      <div className="flex flex-col gap-4">
        <h3 className="font-label tracking-[0.05em] text-[11px] uppercase font-bold text-black">
          ASSISTANCE
        </h3>
        <ul className="flex flex-col gap-2">
          <li><a className="font-label tracking-[0.05em] text-[11px] uppercase text-neutral-600 hover:text-black" href="#">Nous contacter</a></li>
          <li><a className="font-label tracking-[0.05em] text-[11px] uppercase text-neutral-600 hover:text-black" href="#">Livraison</a></li>
          <li><a className="font-label tracking-[0.05em] text-[11px] uppercase text-neutral-600 hover:text-black" href="#">Retours</a></li>
        </ul>
      </div>

      {/* Suivez-nous */}
      <div className="flex flex-col gap-4">
        <h3 className="font-label tracking-[0.05em] text-[11px] uppercase font-bold text-black">
          SUIVEZ-NOUS
        </h3>
        <ul className="flex flex-col gap-2">
          <li><a className="font-label tracking-[0.05em] text-[11px] uppercase text-neutral-600 hover:text-black" href="#">Instagram</a></li>
          <li><a className="font-label tracking-[0.05em] text-[11px] uppercase text-neutral-600 hover:text-black" href="#">Facebook</a></li>
          <li><a className="font-label tracking-[0.05em] text-[11px] uppercase text-neutral-600 hover:text-black" href="#">Pinterest</a></li>
        </ul>
      </div>

      {/* Légal */}
      <div className="flex flex-col gap-4">
        <h3 className="font-label tracking-[0.05em] text-[11px] uppercase font-bold text-black">
          LÉGAL
        </h3>
        <ul className="flex flex-col gap-2">
          <li><a className="font-label tracking-[0.05em] text-[11px] uppercase text-neutral-600 hover:text-black" href="#">Mentions légales</a></li>
          <li><a className="font-label tracking-[0.05em] text-[11px] uppercase text-neutral-600 hover:text-black" href="#">Confidentialité</a></li>
          <li className="mt-8">
            <span className="font-label tracking-[0.05em] text-[10px] uppercase text-neutral-400">
              © 2026 THE EDITORIAL MONOLITH. ALL RIGHTS RESERVED.
            </span>
          </li>
        </ul>
      </div>
    </footer>
  )
}
