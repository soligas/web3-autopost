export default function Comunidad() {
  const redes = [
    { nombre: 'X (Twitter)', icon: '✕', descripcion: 'Noticias diarias, threads y análisis rápidos.', nivel: 'todos', color: 'gray', url: '#' },
    { nombre: 'Instagram', icon: '📸', descripcion: 'Infografías visuales y reels educativos.', nivel: 'principiante', color: 'pink', url: '#' },
    { nombre: 'TikTok', icon: '🎵', descripcion: 'Videos cortos: Web3 en 60 segundos.', nivel: 'principiante', color: 'cyan', url: '#' },
    { nombre: 'LinkedIn', icon: '💼', descripcion: 'Casos de uso empresariales y tendencias.', nivel: 'todos', color: 'blue', url: '#' },
    { nombre: 'Farcaster', icon: '⬡', descripcion: 'La red social descentralizada para crypto nativos.', nivel: 'experto', color: 'purple', url: '#' },
    { nombre: 'Lens Protocol', icon: '🌿', descripcion: 'Red social Web3 en Polygon. Gana tokens.', nivel: 'experto', color: 'green', url: '#' },
    { nombre: 'Mirror.xyz', icon: '📝', descripcion: 'Blog descentralizado en Ethereum.', nivel: 'experto', color: 'yellow', url: '#' },
    { nombre: 'Paragraph.xyz', icon: '📬', descripcion: 'Newsletter Web3 con monetización directa.', nivel: 'experto', color: 'orange', url: '#' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">🌍 Comunidad</h1>
      <p className="text-gray-400 mb-10">Síguenos en todas las redes. Publicamos contenido automáticamente en cada plataforma.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {redes.map((red) => (
          <a key={red.nombre} href={red.url} className="card-web3 p-6 flex items-start gap-4 group">
            <div className="text-3xl">{red.icon}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-bold group-hover:text-purple-300 transition-colors">{red.nombre}</h2>
                <span className="tag-web3 text-xs">
                  {red.nivel === 'principiante' ? '🌱' : red.nivel === 'experto' ? '🔬' : '👥'} {red.nivel}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{red.descripcion}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
