import { useState } from 'react'
import CustomSelect from '../components/ui/CustomSelect'

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex w-11 h-6 rounded-full transition-colors cursor-pointer flex-shrink-0 ${
        checked ? 'bg-brand' : 'bg-slate-200'
      }`}
    >
      <span
        className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white shadow border border-slate-200 transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

function Label({ children }) {
  return (
    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
      {children}
    </label>
  )
}

function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-semibold focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all ${className}`}
      {...props}
    />
  )
}

const TABS = ['Couleurs & Design', 'Images & Logos', 'Identité & Infos', 'Boutique & Affichage']

export default function Apparence() {
  const [activeTab, setActiveTab] = useState(0)

  // Réglages Menu
  const [showIcons, setShowIcons] = useState(true)
  const [showLogo, setShowLogo] = useState(true)
  const [animations, setAnimations] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [borderRadius, setBorderRadius] = useState(12)
  const [policeDash, setPoliceDash] = useState('Public Sans (Default)')
  const [policeBoutique, setPoliceBoutique] = useState('Poppins')
  const [styleSidebar, setStyleSidebar] = useState('Étendu')

  // Brand info
  const [brandName, setBrandName] = useState('WorkwearPro')
  const [domain, setDomain] = useState('app.workwear.pro')
  const [phone, setPhone] = useState('+33 1 23 45 67 89')
  const [email, setEmail] = useState('contact@workwear.pro')
  const [slogan, setSlogan] = useState("L'équipement professionnel de nouvelle génération")

  // Social
  const [instagram, setInstagram] = useState('instagram.com/workwearpro')
  const [facebook, setFacebook] = useState('facebook.com/workwearpro')
  const [linkedin, setLinkedin] = useState('linkedin.com/company/workwearpro')
  const [whatsapp, setWhatsapp] = useState('+33600000000')

  return (
    <div className="flex-1 overflow-y-auto flex flex-col">
      <div className="flex-1 p-8 pb-28">
        <div className="max-w-[1400px] mx-auto">

          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Personnalisation visuelle
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Configurez l'identité visuelle de votre boutique et de votre espace administrateur.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === i
                    ? 'border-brand text-brand font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-8">

            {/* ── LEFT COLUMN ── */}
            <div className="col-span-12 lg:col-span-8 space-y-8">

              {/* Couleurs de la marque */}
              <section className="bg-white rounded-custom border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-brand">palette</span>
                  <h3 className="text-lg font-bold text-slate-800">Couleurs de la marque</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {/* Couleur principale */}
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div>
                        <p className="text-sm font-bold text-slate-800">Couleur principale</p>
                        <p className="text-[11px] text-slate-500">Boutons, liens actifs</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-slate-400">#004D40</span>
                        <div className="w-8 h-8 rounded-md border border-slate-200 cursor-pointer bg-[#004D40]" />
                      </div>
                    </div>
                    {/* Accent secondaire */}
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div>
                        <p className="text-sm font-bold text-slate-800">Accent secondaire</p>
                        <p className="text-[11px] text-slate-500">Surbrillance, badges</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-slate-400">#EC5B13</span>
                        <div className="w-8 h-8 rounded-md border border-slate-200 cursor-pointer bg-[#ec5b13]" />
                      </div>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center gap-6 border border-slate-100">
                    <button className="bg-brand text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-brand/10 w-full max-w-[180px]">
                      Bouton Primaire
                    </button>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold rounded-full uppercase tracking-wider">
                        Badge
                      </span>
                      <span className="px-3 py-1 bg-[#ec5b13]/10 text-[#ec5b13] text-[10px] font-bold rounded-full uppercase tracking-wider">
                        Promo
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Typographie */}
              <section className="bg-white rounded-custom border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-brand">text_fields</span>
                  <h3 className="text-lg font-bold text-slate-800">Typographie</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Label>Police Dashboard</Label>
                      <CustomSelect
                        value={policeDash}
                        onChange={setPoliceDash}
                        options={['Public Sans (Default)', 'Inter', 'Poppins']}
                      />
                    </div>
                    <div>
                      <Label>Police Boutique</Label>
                      <CustomSelect
                        value={policeBoutique}
                        onChange={setPoliceBoutique}
                        options={['Poppins', 'Inter', 'Montserrat']}
                      />
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-center">
                    <div className="space-y-2">
                      <p className="text-2xl font-black text-slate-900 leading-tight">The quick brown fox</p>
                      <p className="text-slate-500 text-sm italic">Jumps over the lazy dog. 1234567890</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Logos & Iconographie */}
              <section className="bg-white rounded-custom border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-brand">image</span>
                  <h3 className="text-lg font-bold text-slate-800">Logos &amp; Iconographie</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: 'cloud_upload',   label: 'Logo Principal', sub: 'SVG, PNG (max 2MB)' },
                    { icon: 'brightness_high', label: 'Logo Clair',    sub: 'Pour fond sombre' },
                    { icon: 'bookmark',        label: 'Favicon',       sub: '32x32px .ico' },
                    { icon: 'rotate_right',    label: 'Loader',        sub: 'GIF ou SVG animé' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                      <span className="material-symbols-outlined text-slate-300 text-3xl mb-3 group-hover:text-brand transition-colors">
                        {item.icon}
                      </span>
                      <p className="text-[10px] font-bold uppercase text-slate-500">{item.label}</p>
                      <p className="text-[9px] text-slate-400 mt-1">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Identité de la Marque */}
              <section className="bg-white rounded-custom border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-brand">verified_user</span>
                  <h3 className="text-lg font-bold text-slate-800">Identité de la Marque</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <Label>Nom de la marque</Label>
                    <Input value={brandName} onChange={(e) => setBrandName(e.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label>Domaine</Label>
                    <Input value={domain} onChange={(e) => setDomain(e.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label>Téléphone support</Label>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label>Email contact</Label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="md:col-span-2 space-y-1">
                    <Label>Slogan de l'entreprise</Label>
                    <Input value={slogan} onChange={(e) => setSlogan(e.target.value)} />
                  </div>
                </div>
              </section>

              {/* Réseaux Sociaux */}
              <section className="bg-white rounded-custom border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-brand">share</span>
                  <h3 className="text-lg font-bold text-slate-800">Réseaux Sociaux</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: 'camera',            bg: 'bg-pink-100',  text: 'text-pink-600',  label: 'Instagram', value: instagram, set: setInstagram },
                    { icon: 'social_leaderboard', bg: 'bg-blue-100',  text: 'text-blue-600',  label: 'Facebook',  value: facebook,  set: setFacebook },
                    { icon: 'alternate_email',    bg: 'bg-sky-100',   text: 'text-sky-600',   label: 'LinkedIn',  value: linkedin,  set: setLinkedin },
                    { icon: 'chat',               bg: 'bg-green-100', text: 'text-green-600', label: 'WhatsApp',  value: whatsapp,  set: setWhatsapp },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className={`w-10 h-10 rounded-lg ${s.bg} ${s.text} flex items-center justify-center flex-shrink-0`}>
                        <span className="material-symbols-outlined text-xl">{s.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-bold text-slate-400 uppercase mb-0.5">{s.label}</p>
                        <input
                          className="w-full bg-transparent border-none text-sm font-semibold p-0 focus:ring-0 outline-none"
                          placeholder={`Lien ${s.label}`}
                          value={s.value}
                          onChange={(e) => s.set(e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">

                {/* Live Preview */}
                <section className="bg-white rounded-custom border border-slate-200 p-1 shadow-xl overflow-hidden ring-1 ring-slate-100">
                  <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      Aperçu en direct
                    </h4>
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-slate-200" />
                      ))}
                    </div>
                  </div>
                  <div className="aspect-[4/3] bg-slate-50 flex relative overflow-hidden">
                    {/* Mini Sidebar */}
                    <div className="w-14 bg-white border-r border-slate-100 flex flex-col items-center py-4 gap-3">
                      <div className="w-7 h-7 rounded bg-brand flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px] text-white">shield</span>
                      </div>
                      <div className="w-8 h-1.5 rounded bg-slate-100" />
                      <div className="w-8 h-1.5 rounded bg-slate-100" />
                      <div className="w-8 h-1.5 rounded bg-brand/10" />
                      <div className="w-8 h-1.5 rounded bg-slate-100" />
                    </div>
                    {/* Mini Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="h-6 bg-white border-b border-slate-100 flex items-center px-3 justify-between">
                        <div className="w-12 h-1.5 bg-slate-100 rounded" />
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="h-2 w-1/3 bg-slate-800 rounded" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-12 bg-white rounded-lg border border-slate-100 p-2 space-y-1.5 shadow-sm">
                            <div className="h-1 w-full bg-slate-50 rounded" />
                            <div className="h-3 w-3/4 bg-brand/20 rounded" />
                          </div>
                          <div className="h-12 bg-white rounded-lg border border-slate-100 p-2 space-y-1.5 shadow-sm">
                            <div className="h-1 w-full bg-slate-50 rounded" />
                            <div className="h-3 w-1/2 bg-brand/20 rounded" />
                          </div>
                        </div>
                        <div className="h-6 bg-brand rounded-lg flex items-center justify-center shadow-sm">
                          <div className="h-1 w-8 bg-white/40 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Réglages Menu */}
                <section className="bg-white rounded-custom border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-xs font-bold mb-5 uppercase text-slate-400 tracking-widest">
                    Réglages Menu
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700">Style Sidebar</span>
                      <CustomSelect
                        value={styleSidebar}
                        onChange={setStyleSidebar}
                        options={['Étendu', 'Compact', 'Minimal']}
                        size="sm"
                        className="w-32"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700">Afficher Icônes</span>
                      <Toggle checked={showIcons} onChange={setShowIcons} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700">Logo Sidebar</span>
                      <Toggle checked={showLogo} onChange={setShowLogo} />
                    </div>
                  </div>
                </section>

                {/* Avancé */}
                <section className="bg-white rounded-custom border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-xs font-bold mb-5 uppercase text-slate-400 tracking-widest">
                    Avancé
                  </h3>
                  <div className="space-y-6">
                    {/* Border radius slider */}
                    <div>
                      <Label>Rayon des bordures</Label>
                      <input
                        type="range"
                        min={0}
                        max={20}
                        value={borderRadius}
                        onChange={(e) => setBorderRadius(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand"
                      />
                      <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2">
                        <span>Carré</span>
                        <span className="text-brand">Normal</span>
                        <span>Arrondi</span>
                      </div>
                    </div>

                    {/* Dark mode toggle */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-semibold text-slate-700">Mode Sombre</span>
                      <div className="bg-slate-100 p-1 rounded-full flex gap-1">
                        <button
                          onClick={() => setDarkMode(false)}
                          className={`p-1.5 rounded-full transition-all ${!darkMode ? 'bg-white shadow-sm text-brand' : 'text-slate-400'}`}
                        >
                          <span className="material-symbols-outlined text-sm leading-none block">light_mode</span>
                        </button>
                        <button
                          onClick={() => setDarkMode(true)}
                          className={`p-1.5 rounded-full transition-all ${darkMode ? 'bg-white shadow-sm text-brand' : 'text-slate-400'}`}
                        >
                          <span className="material-symbols-outlined text-sm leading-none block">dark_mode</span>
                        </button>
                      </div>
                    </div>

                    {/* Animations */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700">Animations UI</span>
                      <Toggle checked={animations} onChange={setAnimations} />
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticky Footer Action Bar ── */}
      <footer className="sticky bottom-0 bg-white/90 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-8 py-4 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs text-slate-500 font-medium italic">Modifié il y a quelques secondes</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
            Réinitialiser
          </button>
          <button className="px-5 py-2.5 text-xs font-bold text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-xl flex items-center gap-2 transition-all">
            <span className="material-symbols-outlined text-[18px]">visibility</span>
            Prévisualiser
          </button>
          <div className="w-px h-6 bg-slate-200 mx-2" />
          <button className="px-8 py-2.5 text-xs font-bold text-white bg-brand hover:bg-brand-dark rounded-xl shadow-lg shadow-brand/20 transition-all">
            Enregistrer les modifications
          </button>
          <button className="px-5 py-2.5 text-xs font-bold text-brand border-2 border-brand hover:bg-brand/5 rounded-xl transition-all">
            Publier
          </button>
        </div>
      </footer>
    </div>
  )
}
