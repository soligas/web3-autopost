import Link from 'next/link'

const posts = [
  {
    slug: 'que-es-web3',
    title: '¿Qué es Web3 y por qué importa?',
    excerpt: 'Una guía completa para entender la próxima generación de internet.',
    date: '2026-04-08',
    level: 'principiante',
    hashtags: ['#web3', '#blockchain', '#crypto'],
    image: '🌐',
  },
  {
    slug: 'defi-explicado',
    title: 'DeFi explicado: Finanzas Descentralizadas desde cero',
    excerpt: 'Aprende cómo funciona DeFi, sus riesgos y oportunidades.',
    date: '2026-04-07',
    level: 'principiante',
    hashtags: ['#DeFi', '#blockchain', '#crypto'],
    image: '💰',
  },
  {
    slug: 'layer2-ethereum',
    title: 'Layer 2 en Ethereum: Arbitrum vs Optimism vs zkSync',
    excerpt: 'Análisis técnico comparativo de las principales soluciones de escalado.',
    date: '2026-04-06',
    level: 'experto',
    hashtags: ['#layer2', '#ethereum', '#zkSync', '#scalability'],
    image: '⚡',
  },
]

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">📝 Blog Web3</h1>
      <p className="text-gray-400 mb-10">Contenido para todos los niveles, publicado automáticamente.</p>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="card-web3 p-6 flex gap-6 items-start">
            <div className="text-4xl">{post.image}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`tag-web3 ${
                  post.level === 'experto'
                    ? 'bg-purple-900/30 text-purple-300 border-purple-700/30'
                    : 'bg-green-900/30 text-green-300 border-green-700/30'
                }`}>
                  {post.level === 'experto' ? '🔬 Experto' : '🌱 Principiante'}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-purple-300 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-400 text-sm mb-3">{post.excerpt}</p>
              <div className="flex gap-2 flex-wrap">
                {post.hashtags.map((tag) => (
                  <span key={tag} className="tag-web3">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
