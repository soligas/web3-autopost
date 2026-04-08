export default function Aprende() {
  const modulos = [
    {
      numero: '01',
      titulo: '¿Qué es Blockchain?',
      descripcion: 'Entiende qué es una cadena de bloques, cómo funciona y por qué es revolucionaria.',
      nivel: 'principiante',
      temas: ['Bloques y cadenas', 'Consenso', 'Inmutabilidad', 'Descentralización'],
    },
    {
      numero: '02',
      titulo: 'Wallets y Seguridad',
      descripcion: 'Aprende a crear y proteger tu billetera digital. Tu puerta de entrada a Web3.',
      nivel: 'principiante',
      temas: ['MetaMask', 'Seed phrase', 'Seguridad básica', 'Hardware wallets'],
    },
    {
      numero: '03',
      titulo: 'NFTs y Tokens',
      descripcion: 'Entiende qué son los NFTs, cómo funcionan los tokens y su utilidad real.',
      nivel: 'principiante',
      temas: ['ERC-20', 'ERC-721', 'Marketplaces', 'Utilidad real'],
    },
    {
      numero: '04',
      titulo: 'DeFi Avanzado',
      descripcion: 'Protocolos de liquidez, yield farming, y estrategias avanzadas en DeFi.',
      nivel: 'experto',
      temas: ['AMMs', 'Liquidity pools', 'Yield farming', 'Riesgos'],
    },
    {
      numero: '05',
      titulo: 'Smart Contracts',
      descripcion: 'Cómo funcionan los contratos inteligentes y cómo auditar su seguridad.',
      nivel: 'experto',
      temas: ['Solidity básico', 'Auditorías', 'Bugs comunes', 'Upgrades'],
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">🎓 Aprende Web3</h1>
      <p className="text-gray-400 mb-10">Módulos estructurados desde cero hasta experto.</p>
      <div className="grid gap-6">
        {modulos.map((modulo) => (
          <div key={modulo.numero} className="card-web3 p-6 flex gap-6">
            <div className="text-5xl font-black text-purple-900/50 font-mono">{modulo.numero}</div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-bold">{modulo.titulo}</h2>
                <span className={`tag-web3 ${
                  modulo.nivel === 'experto'
                    ? 'bg-purple-900/30 text-purple-300 border-purple-700/30'
                    : 'bg-green-900/30 text-green-300 border-green-700/30'
                }`}>
                  {modulo.nivel === 'experto' ? '🔬 Experto' : '🌱 Principiante'}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{modulo.descripcion}</p>
              <div className="flex gap-2 flex-wrap">
                {modulo.temas.map((tema) => (
                  <span key={tema} className="tag-web3">{tema}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
