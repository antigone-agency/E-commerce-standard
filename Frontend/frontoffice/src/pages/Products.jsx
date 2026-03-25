import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* ── Product Data ── */
const products = [
  {
    slug: 'robe-soie-minimaliste', name: 'Robe Soie Minimaliste', price: '280,00€',
    colors: ['#000000', '#adabaa'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHuasFLd0RV1iOBh-UDbJHA6kDZhGdh_cSxCkzkjsRyhzwylSlDVLalFw1JHbKvq3aBusXKUaXDXH_33qTdkK2DLIHIRWZ153HNVdn_q_6D45Rq-EXJN7kajIJEfYTE5SvFf-O0Q2uHMnLJlnDB-CkvQrMfIHXViOTAgTAQWwzZtY57Ds1L6XANL_CF9IzHrG4fNhqyFdlB2HBIc0MjRiE0a0tgLdQIkFq3Gqliwwxv4G4fZpCnolA-U4zVWityuItohemZgiM2aYx',
    imgHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5Gzco2jvXHOnu6sf-zFNxULPDh7GjL3VVD-VEEQFg_An4QtHo8Qsvog8ZplQXCFCH3m2RgU5d8VoFPVm7V5uw6iJhg5-NdL-VtGWBZhkP7N04dMVUmBUX6BomPbmnaGt5Oljh0kyXI4BrvqvdAGFrpw9Xtz-8CE19au1y0y9ljZMZ_RoAXQtw59su6Lxcc6WU09Q8S8We6bptPd_ocw9E40C3uqP7QXX0XFSw5Uq0-TJrwlTRhgBygeZ0hnalm7x0wAhHNIMFWx-n',
  },
  {
    slug: 'chemise-oversize-coton', name: 'Chemise Oversize Coton', price: '145,00€',
    colors: ['#ffffff', '#e2e2e2'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1-bXKWhCL07flnD2XRbGUwK27MpXKxLrFEcPXrEI48d7oT5MXzl2q-gWkmIsPXPG-i6O4QSZqkeMzUiwsANdqeUOC8q_3I1mmk0wjbUEMI4D2cqn13TRLpt0eQosHqx7Tn1AHELmXkVdbdzwhwAfrY8CON_FWuZti7VDyoN2WCHBmWW3ZjR7svvxQhD6JMvzStGP7OFxg4qcprE9eGOAXS23S3vnuoina4rs_THC4TywPOIvVIDjQ8CTC7ThDEd48sXStXTJxZ4M2',
    imgHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJxJGPt0OA_cvOEDIDCobVyGWg5Debkg3jAnkYbqW3VftPhnDG1uWdnxSXp-x76P5wj0GfilbXRF03g6_jMKltdPfi3w8Pu1K9T2Tlan_AkXT98uHebyb9piFmCXjuv3ID92KZoxX6weNYzpKslfTinQdqTqzpBWC0QVCs9EMcpnMaYAttQeD9a_oHXx_V6FXo5f7Ry_OLi21UllXeSSqMwN8aBbyV2VDk0kE5C_ikQVpnECpMfXQFm8jkrWMLfej2UJ2E2ljZHpQF',
  },
  {
    slug: 'trench-gabardine-structure', name: 'Trench Gabardine Structuré', price: '420,00€',
    colors: ['#adabaa', '#474747'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYIxhk5PDZhb3-W19oV-_bn-eFYcI5ZXlk9H9ksJnWMApEi1ADJNmGmHMLnaeSwv8W9GiUJofuooqoMP7f1iv4S4yyZSSScbCqyFzlud1M_PogS5UBni47G_hlcmAx592UcGqszUP2I8SZ6KW_JZVDxKMLHylEhjBNjxpFNylUCkSL03-i7uL03rAue-jcLEKE_2RrrPF6wwwFG1wJYmeSuyeao_BDFkkIAfvL1dsgGI7dqKFNVSd_F0okdKhWPDOydUTnkFYe_HSH',
    imgHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUATeJ0ZRPlm49COh58qLWBpvdCQJF4SUZJmjtt0RsAEcvpmUjr6260affFPDB3Mf84u4gWbhsV_q2SYI1KxnaIjZfD-7Z0QfD2i16wEe97aCSHF2aO7F57Y2chA3UCgs2CfQ0-AqTvErT0Wtj1wQXw6F03VDI-alEnH7iwFsoW3QM8jtntnJXlL-bQvHsTF-S7VwqobZim3kpfQ7HMZZtueYIGMf1x9dLY8e2Kt3REbLoM8AJw4TBa3lcxZNSEUbt5KkNQwLk9TwD',
  },
  {
    slug: 'pantalon-large-laine', name: 'Pantalon Large Laine', price: '190,00€',
    colors: ['#474747', '#000000'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-k36kV7TPM31RxnnZi5YPSv9sV_yQxpuYZl3H_7d5HRXXof9ZADnZOJOORk4oSo1cvuijGnCitnZVA3Nftt3MLoomRkpMs8Fp8f_IUr_tCeg5xM-Od918A51kmJSbFT4jR16M4u2eyJnKnGqmGEqcURaTjFJm-KD-I8mvDK18SQk7N_nFY5coX3Z706-T9Ref95tlnqUxANB8K1o-fj4TsfEbMh-V8FTNtp6_IYn4yqH-YgDioLwFd0BB4bByB23vwB-yj9EurG7M',
    imgHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMCQaqukLrN4LPY6Ddhj87XTqrlTAIbXlzkV4I2RDzTIudm9pD0mxnv6QMFzesXJDHI7qC1RtF0SQAqCmVCSN849Y6uQv_uQBn8UMFPZXaXisymMAz5YlFtKPuvkQpijohD5yVCtkju3r8v3rTEWYD1JDWX6Umb4dhWJxw1myz9jMtc-nmJ3NHB_EwQSFbVSNBzRmNWTQuwx5h_tt34YTZUXNW2FFddnFVD-lat7AR0ei6lzIWY04x7L--i4I7bbnLSXIOh7VWcxDX',
  },
  {
    slug: 'top-fluide-imprime', name: 'Top Fluide Imprimé', price: '85,00€',
    colors: ['#e2e2e2'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjqLnyVIbURx-170kFClmuOhHhZPBVeWwM-mq4ly8iEd10jFWJo8_sBJvtTSIgKKh8rV9uyzsXrMeUEr1X0hvh16K5ch5ftld-FFAj9lNlHObB2-xye1U9yAZAipEQqVBGa9UFmdMZSmUOIrdp1jGzJp4vDF70m3njbCmUTpr5weKQKN2O0hlQCyiu1uV070yb1OWnD2nC_-dwV5fOCVAt_0HRU9BQYXo891KQnU9inNENh4pI7JQYQ75A0EDWBh63xA8o3FP6BWeY',
    imgHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQhKkfivL-HieAAgjsv_s6NYVn4nqWoLoCINRph-fJdz0bhYbpuUQoTyla_etUfRRqX6AmszNzHmf3vuFVAeW0k0cdGtJrlW74Ut6O7fvwA-5eokpujxgwRDYzfrSQQVHcAL7EjLJI3Vg2MpTYLhb8GHM0RjeQHMeItnirSrg5OpJvGJ0UU6kKb0UJnlvjs_gcGFG65A8NNbDSJU4iEUxyH2TptuYDXDwV-pnWnDbewhwxWJwTfeGU3OLk3KlzOWilMLd8BI_GGqn7',
  },
  {
    slug: 'veste-croisee-charcoal', name: 'Veste Croisée Charcoal', price: '350,00€',
    colors: ['#3b3b3c'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkM6aVE9mwbDwxqKCHnloJzCXQAyiN2H4gBQYUtXpRVytVu5BSB9eMG3LBaG-N9yYOiXLntFp8L0zjobWFXcDM3XbAckMMgiS_GVZqVtBvw8tF2WgUfKrc8NTQMpRfiOnK1_Gk5XwyGqq8L2jHJFlJkuHbi9WxjZx73ECYkNESMrJrGiKrMwXypsT3KSJ3lJXumDUhn2tSX3dLghYBNlcy_sA-rxHgyRI1SsUVUvDErEHBgVWvIQEguKrFf8lLYd9w9_CczUm5rJgm',
    imgHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF-OvGyj4TWLAxfafwhHj-HhDvcDXG48BapiECmH8QN49WYS82Cbqk6CnDTjiPM6x6zbY_V6ENYJpAShW9lNRKRaIsvCTKtHp1W85B3WwAaCZqy7FuHX446aflZtRyX9kYeXQ94I7osOZz-gOFBcRJumhpGlmI_oMGfU2fhnRuzRrMZpAWbyufWzQex59Cl9mN0ZSOvMsE3v7cVMMsSN-FGNJVngL1z9kfGcaO1iENAdAPsdKXigSmyhusXdLu5Vj5V3VP3vIa7PDZ',
  },
  {
    slug: 'sac-cabas-cuir-graine', name: 'Sac Cabas Cuir Grainé', price: '550,00€',
    colors: ['#000000'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9zdNGeYA42g1ssyN0P1A90519ujotj9oBWAMKLKFGsDG7Wxh39v2w76MFiIQTr7u5S7ZpTHarqFWYGdCFVYPoQZmuXcUMK6zBCe-aoOfRaLEJ3U5ZsfdVl-zvm6Zm_dn63Ny8RLhu0-IVa8yavl58MyYJVzrWY1srWeGDeT9RknI5cJtTr0wssp89h1vzcZkmvhwgljud-fLvUCplYL5asA9HGT9Jf5IzTUNK8aDAM0bCbfcBuE2Qdq9ObJEUwPNd9efJoaodBjbH',
    imgHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyHE2TTSh98KhvpoHNw15Vv9nqfomIf9yijJ1bm97F_jD5nOzuEH4d0Ng7UNNRMdG3CK76iE7N1Q-nEcEhfa7mMUZuuVdNn7M0MOxzDLQRhg0Ga_y79yAheaDo9U60KyDQ7G3MSMGbQunDxFAer2aeI-d3kfg_A00DbVBnQLvZ0x8F3BM_YHBNdgkkjIIScJ2SuAlkx0CE7tAIhzHCMXhRYYsulB59di8Eq_5CI83lkzzqONRwl_vYUiZ9WqRoG10lk17EpN7PF8Jc',
  },
  {
    slug: 'pull-cachemire-epais', name: 'Pull Cachemire Épais', price: '295,00€',
    colors: ['#e2e2e2', '#adabaa'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJth2A7HL2azpBJAAwM9NgXQcXJKLNka-Erl0U7RnPSJu1v0ZT8bpfwnWVjDhkJDzq3OhdDr9vc0oAtsJmBBsCavBffiu1IGx_EndfN3ROuWKpm0-eppZx_JNLanKJP6gyfsZHSeg8JyZPeiGJ64IAbDaId07aBCrjF7hLF7LgMcX20nnHMe1PRJhMZ2uwxec2RQrAlCTDW3VeP23B6xpAQOL5furhYZ-p7jAiQ2RNhIc1MjsRK4eNfnPRvMzsJOB5SdVTSp1nTNye',
    imgHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMzHS9vvV1T8m2KuY_iwkNT3ha1NeWu90QOjdUlAsa_OET716bpNX9yJB7QkYI_-EYGZED9kdhhzS3Qui-a7SNy3OaNVLLixDFMMUdvXN3PczCmRtPjhZb2Qkx46wVoNybYsJ0D6xa98H9fg49cX8wZNCVaf4bcdhib5m482mwLJHXDnVCrkFvgrmtO_RpmJYZyEfYsUk55LZfuavlqAF_xf-R2oyJKHi9gk5wtkC5PQrBuuL2ph1r7r8-P-pkgAsnpYsc3DdVuSuQ',
  },
]

const sizes = ['XS', 'S', 'M', 'L']
const colorFilters = ['#000000', '#ffffff', '#e2e2e2', '#adabaa', '#474747']
const priceRanges = ['0€ - 100€', '100€ - 300€', '300€+']
const collections = ['Printemps-Été 2024', 'Essentiels', 'Archives']

export default function Products() {
  const navigate = useNavigate()
  const [selectedSize, setSelectedSize] = useState('S')
  const [selectedPrice, setSelectedPrice] = useState('100€ - 300€')
  const [sortBy, setSortBy] = useState('nouveautes')
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <main className="pt-32 px-6 md:px-12 pb-24">
      {/* Header */}
      <header className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <h1 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase">
          Prêt-à-porter Femme
        </h1>
        <div className="flex gap-4 items-center">
          <span className="font-label text-[11px] uppercase tracking-[0.05em] text-neutral-400">Trier par:</span>
          <button
            onClick={() => setSortBy('nouveautes')}
            className={`font-label text-[11px] uppercase tracking-[0.05em] ${
              sortBy === 'nouveautes' ? 'font-bold border-b border-black pb-1' : 'text-neutral-400 hover:text-black'
            }`}
          >
            Nouveautés
          </button>
          <button
            onClick={() => setSortBy('prix')}
            className={`font-label text-[11px] uppercase tracking-[0.05em] ${
              sortBy === 'prix' ? 'font-bold border-b border-black pb-1' : 'text-neutral-400 hover:text-black'
            }`}
          >
            Prix
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-12">
          {/* Taille */}
          <div>
            <h3 className="font-label text-[11px] font-bold uppercase tracking-[0.1em] mb-6">Taille</h3>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`py-2 text-[10px] uppercase tracking-wide ${
                    selectedSize === s
                      ? 'bg-black text-white border border-black'
                      : 'border border-outline-variant/20 hover:border-black'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Couleur */}
          <div>
            <h3 className="font-label text-[11px] font-bold uppercase tracking-[0.1em] mb-6">Couleur</h3>
            <div className="flex flex-wrap gap-3">
              {colorFilters.map((c) => (
                <div
                  key={c}
                  className="w-5 h-5 cursor-pointer"
                  style={{
                    backgroundColor: c,
                    border: c === '#ffffff' ? '1px solid #c6c6c6' : '1px solid rgba(198,198,198,0.15)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Prix */}
          <div>
            <h3 className="font-label text-[11px] font-bold uppercase tracking-[0.1em] mb-6">Prix</h3>
            <div className="space-y-3">
              {priceRanges.map((range) => (
                <label key={range} className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedPrice(range)}>
                  <div className={`w-4 h-4 flex items-center justify-center ${
                    selectedPrice === range ? 'border border-black' : 'border border-outline-variant/30 group-hover:border-black'
                  }`}>
                    {selectedPrice === range && <div className="w-2 h-2 bg-black" />}
                  </div>
                  <span className={`font-label text-[11px] uppercase tracking-[0.05em] ${
                    selectedPrice === range ? 'text-black' : 'text-neutral-500 group-hover:text-black'
                  }`}>
                    {range}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Collection */}
          <div>
            <h3 className="font-label text-[11px] font-bold uppercase tracking-[0.1em] mb-6">Collection</h3>
            <div className="space-y-2">
              {collections.map((col, i) => (
                <a
                  key={col}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={`block font-label text-[11px] uppercase tracking-[0.05em] ${
                    i === 0 ? 'text-black' : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  {col}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
            {products.map((product) => (
              <div key={product.name} className="product-card cursor-pointer" onClick={() => navigate(`/produit/${product.slug}`)}>
                {/* Image container with hover swap */}
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-surface-container-low group">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={product.imgHover}
                    alt={`${product.name} hover`}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                {/* Info */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start gap-2">
                    <h2 className="font-label text-[13px] font-bold tracking-tight uppercase">{product.name}</h2>
                    <span className="font-label text-[13px] tracking-tight whitespace-nowrap">{product.price}</span>
                  </div>
                  <div className="flex gap-1.5 mt-3">
                    {product.colors.map((c) => (
                      <div
                        key={c}
                        className="w-2.5 h-2.5"
                        style={{
                          backgroundColor: c,
                          border: c === '#ffffff' ? '1px solid #c6c6c6' : 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-32 flex justify-center gap-10">
            <button className="font-label text-[11px] uppercase tracking-[0.1em] text-neutral-400 hover:text-black">
              Précédent
            </button>
            <div className="flex gap-6">
              {['01', '02', '03'].map((p, i) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`font-label text-[11px] uppercase tracking-[0.1em] ${
                    currentPage === i + 1
                      ? 'font-black border-b border-black pb-1'
                      : 'text-neutral-400 hover:text-black cursor-pointer'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button className="font-label text-[11px] uppercase tracking-[0.1em] text-black">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
