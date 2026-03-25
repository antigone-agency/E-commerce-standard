const panels = {
  login: {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80&auto=format&fit=crop',
    badge: 'Collection 2026',
    subtitle: 'Édition Limitée',
    title: <>La Nouvelle <br />Perspective</>,
    description: "L'élégance redéfinie à travers une collection capsule qui fusionne architecture et textile.",
  },
  signup: {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80&auto=format&fit=crop',
    badge: null,
    subtitle: null,
    title: <>Editorial<br />Session 01</>,
    description: null,
  },
}

export default function AuthVisualPanel({ mode = 'login', animKey }) {
  const panel = panels[mode] || panels.login

  return (
    <section className="hidden md:block md:w-[55%] lg:w-[60%] relative overflow-hidden bg-surface-container-high">
      <img
        key={animKey}
        src={panel.image}
        alt="Editorial fashion"
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90 auth-image-enter"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Badge */}
      {panel.badge && (
        <div className="absolute top-12 right-12">
          <span className="font-label text-[10px] tracking-[0.2em] uppercase text-white border border-white/30 px-4 py-2 backdrop-blur-md">
            {panel.badge}
          </span>
        </div>
      )}

      {/* Bottom content */}
      <div className="absolute bottom-16 left-16 right-16">
        {mode === 'login' ? (
          <div className="border-l-2 border-white pl-8">
            {panel.subtitle && (
              <span className="block font-label text-[11px] tracking-[0.3em] uppercase text-white/80 mb-4">
                {panel.subtitle}
              </span>
            )}
            <h3 className="font-headline text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              {panel.title}
            </h3>
            {panel.description && (
              <p className="mt-6 font-body text-sm text-white/70 max-w-sm tracking-wide leading-relaxed">
                {panel.description}
              </p>
            )}
          </div>
        ) : (
          <div className="text-right">
            <p className="font-headline font-black text-white text-6xl tracking-tighter opacity-10 leading-none select-none">
              {panel.title}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
