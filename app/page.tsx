import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="text-center py-20">
        <div className="inline-block bg-purple-900/20 border border-purple-700/30 rounded-full px-4 py-1 text-purple-300 text-sm mb-6">
          🌐 Para expertos y principiantes en Web3
        </div>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Todo lo que necesitas saber sobre
          <span className="gradient-text"> Web3 & Blockchain</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Contenido fresco, educativo y actualizado sobre el ecosistema Web3.
          Desde cero hasta experto, en español.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/aprende" className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl font-medium transition-colors">
            Empieza desde cero
          </Link>
          <Link href="/blog" className="border border-purple-600/50 hover:border-purple-400 text-purple-300 px-8 py-3 rounded-xl font-medium transition-colors">
            Ver blog técnico
          </Link>
        </div>
      </section>

      {/* NIVELES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="card-web3 p-8">
          <div className="text-4xl mb-4">🌱</div>
          <h2 className="text-2xl font-bold mb-3 text-green-400">Para principiantes</h2>
          <p className="text-gray-400 mb-6">¿Nuevo en Web3? Empieza aquí. Explicaciones simples, sin tecnicismos.</p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>✅ ¿Qué es blockchain?</li>
            <li>✅ ¿Cómo funciona una wallet?</li>
            <li>✅ ¿Qué son los NFTs?</li>
            <li>✅ ¿Cómo comprar tu primera crypto?</li>
          </ul>
          <Link href="/aprende" className="mt-6 inline-block bg-green-600/20 border border-green-600/40 text-green-400 px-6 py-2 rounded-xl text-sm hover:bg-green-600/30 transition-colors">
            Comenzar aprendizaje →
          </Link>
        </div>
        <div className="card-web3 p-8">
          <div className="text-4xl mb-4">🔬</div>
          <h2 className="text-2xl font-bold mb-3 text-purple-400">Para expertos</h2>
          <p className="text-gray-400 mb-6">¿Ya estás en Web3? Análisis profundos, tendencias y desarrollo.</p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>✅ DeFi avanzado y protocolos</li>
            <li>✅ Smart contracts y auditorías</li>
            <li>✅ Layer 2 y escalabilidad</li>
            <li>✅ DAOs y gobernanza</li>
          </ul>
          <Link href="/blog" className="mt-6 inline-block bg-purple-600/20 border border-purple-600/40 text-purple-400 px-6 py-2 rounded-xl text-sm hover:bg-purple-600/30 transition-colors">
            Ver análisis técnicos →
          </Link>
        </div>
      </section>

      {/* REDES WEB3 */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Síguenos en todas partes</h2>
        <p className="text-gray-400 mb-8">Publicamos contenido fresco todos los días en estas redes</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { name: 'X (Twitter)', icon: '✕', color: 'border-gray-600 text-gray-300' },
            { name: 'Instagram', icon: '📸', color: 'border-pink-600/50 text-pink-300' },
            { name: 'TikTok', icon: '🎵', color: 'border-cyan-600/50 text-cyan-300' },
            { name: 'LinkedIn', icon: '💼', color: 'border-blue-600/50 text-blue-300' },
            { name: 'Farcaster', icon: '⬡', color: 'border-purple-600/50 text-purple-300' },
            { name: 'Lens', icon: '🌿', color: 'border-green-600/50 text-green-300' },
            { name: 'Mirror.xyz', icon: '📝', color: 'border-yellow-600/50 text-yellow-300' },
            { name: 'Paragraph', icon: '📬', color: 'border-orange-600/50 text-orange-300' },
          ].map((red) => (
            <span key={red.name} className={`border px-4 py-2 rounded-full text-sm ${red.color}`}>
              {red.icon} {red.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
