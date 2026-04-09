'use client'
import { useState } from 'react'

const REDES = [
  { id: 'twitter', nombre: 'X (Twitter)', icon: '✖', color: 'border-gray-500', tipo: 'Web2' },
  { id: 'instagram', nombre: 'Instagram', icon: '📸', color: 'border-pink-500', tipo: 'Web2' },
  { id: 'facebook', nombre: 'Facebook', icon: '📘', color: 'border-blue-500', tipo: 'Web2' },
  { id: 'tiktok', nombre: 'TikTok', icon: '🎵', color: 'border-cyan-500', tipo: 'Web2' },
  { id: 'linkedin', nombre: 'LinkedIn', icon: '💼', color: 'border-blue-400', tipo: 'Web2' },
  { id: 'farcaster', nombre: 'Farcaster', icon: '⬡', color: 'border-purple-500', tipo: 'Web3' },
  { id: 'lens', nombre: 'Lens Protocol', icon: '🌿', color: 'border-green-500', tipo: 'Web3' },
  { id: 'mirror', nombre: 'Mirror.xyz', icon: '📝', color: 'border-yellow-500', tipo: 'Web3' },
]

export default function AdminPanel() {
  const [texto, setTexto] = useState('')
  const [hashtags, setHashtags] = useState('#web3 #blockchain #crypto')
  const [nivel, setNivel] = useState('todos')
  const [redesSeleccionadas, setRedesSeleccionadas] = useState<string[]>(['twitter', 'instagram', 'linkedin', 'farcaster'])
  const [imagen, setImagen] = useState<File | null>(null)
  const [estado, setEstado] = useState<'idle' | 'publicando' | 'ok' | 'error'>('idle')
  const [programar, setProgramar] = useState(false)
  const [fecha, setFecha] = useState('')

  const toggleRed = (id: string) => {
    setRedesSeleccionadas(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    )
  }

  const publicar = async () => {
    if (!texto.trim()) return alert('Escribe el contenido del post')
    setEstado('publicando')
    try {
      const res = await fetch('/api/publicar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          texto,
          hashtags,
          nivel,
          redes: redesSeleccionadas.join(','),
          programado: programar ? fecha : null,
        }),
      })
      if (res.ok) {
        setEstado('ok')
        setTexto('')
        setTimeout(() => setEstado('idle'), 3000)
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">🚀 Panel de Publicación</h1>
      <p className="text-gray-400 mb-8">Escribe una vez, publica en todas las redes automáticamente.</p>

      {/* CONTENIDO */}
      <div className="card-web3 p-6 mb-6">
        <label className="block text-sm text-gray-400 mb-2">✍️ Contenido del post</label>
        <textarea
          value={texto}
          onChange={e => setTexto(e.target.value)}
          placeholder="Escribe tu contenido Web3 aquí..."
          rows={5}
          className="w-full bg-web3-dark border border-purple-900/40 rounded-xl p-4 text-white placeholder-gray-600 resize-none focus:outline-none focus:border-purple-500 transition-colors"
        />
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>{texto.length} caracteres</span>
          <span className={texto.length > 280 ? 'text-red-400' : 'text-green-400'}>
            {texto.length > 280 ? '⚠ Demasiado largo para X (Twitter)' : '✅ OK para X (Twitter)'}
          </span>
        </div>
      </div>

      {/* HASHTAGS */}
      <div className="card-web3 p-6 mb-6">
        <label className="block text-sm text-gray-400 mb-2"># Hashtags (SEO)</label>
        <input
          value={hashtags}
          onChange={e => setHashtags(e.target.value)}
          placeholder="#web3 #blockchain #crypto #DeFi"
          className="w-full bg-web3-dark border border-purple-900/40 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
        />
      </div>

      {/* IMAGEN */}
      <div className="card-web3 p-6 mb-6">
        <label className="block text-sm text-gray-400 mb-2">🖼️ Imagen (opcional)</label>
        <div className="border-2 border-dashed border-purple-900/40 rounded-xl p-8 text-center hover:border-purple-500 transition-colors cursor-pointer"
          onClick={() => document.getElementById('file-input')?.click()}>
          {imagen ? (
            <p className="text-green-400">✅ {imagen.name}</p>
          ) : (
            <p className="text-gray-500">Haz clic para subir una imagen o arrástrala aquí</p>
          )}
          <input id="file-input" type="file" accept="image/*" className="hidden"
            onChange={e => setImagen(e.target.files?.[0] || null)} />
        </div>
      </div>

      {/* NIVEL */}
      <div className="card-web3 p-6 mb-6">
        <label className="block text-sm text-gray-400 mb-3">👥 Audiencia objetivo</label>
        <div className="flex gap-3">
          {['principiante', 'experto', 'todos'].map(n => (
            <button key={n} onClick={() => setNivel(n)}
              className={`px-5 py-2 rounded-xl text-sm font-medium border transition-all ${
                nivel === n
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'border-purple-900/40 text-gray-400 hover:border-purple-500'
              }`}>
              {n === 'principiante' ? '🌱 Principiante' : n === 'experto' ? '🔬 Experto' : '👥 Todos'}
            </button>
          ))}
        </div>
      </div>

      {/* REDES SOCIALES */}
      <div className="card-web3 p-6 mb-6">
        <label className="block text-sm text-gray-400 mb-4">🌐 Publicar en estas redes</label>
        <div className="mb-3">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Web2 (para todos)</span>
          <div className="flex flex-wrap gap-3 mt-2">
            {REDES.filter(r => r.tipo === 'Web2').map(red => (
              <button key={red.id} onClick={() => toggleRed(red.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm transition-all ${
                  redesSeleccionadas.includes(red.id)
                    ? `${red.color} bg-white/5 text-white`
                    : 'border-gray-700 text-gray-500 hover:border-gray-500'
                }`}>
                <span>{red.icon}</span> {red.nombre}
                {redesSeleccionadas.includes(red.id) && <span className="text-green-400">✓</span>}
              </button>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Web3 (para expertos)</span>
          <div className="flex flex-wrap gap-3 mt-2">
            {REDES.filter(r => r.tipo === 'Web3').map(red => (
              <button key={red.id} onClick={() => toggleRed(red.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm transition-all ${
                  redesSeleccionadas.includes(red.id)
                    ? `${red.color} bg-white/5 text-white`
                    : 'border-gray-700 text-gray-500 hover:border-gray-500'
                }`}>
                <span>{red.icon}</span> {red.nombre}
                {redesSeleccionadas.includes(red.id) && <span className="text-green-400">✓</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PROGRAMAR */}
      <div className="card-web3 p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => setProgramar(!programar)}
            className={`w-12 h-6 rounded-full transition-all ${
              programar ? 'bg-purple-600' : 'bg-gray-700'
            }`}>
            <div className={`w-5 h-5 bg-white rounded-full transition-transform mx-0.5 ${
              programar ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
          <label className="text-sm text-gray-400">⏰ Programar publicación</label>
        </div>
        {programar && (
          <input type="datetime-local" value={fecha} onChange={e => setFecha(e.target.value)}
            className="w-full bg-web3-dark border border-purple-900/40 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500" />
        )}
      </div>

      {/* BOTÓN PUBLICAR */}
      <button onClick={publicar} disabled={estado === 'publicando'}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          estado === 'publicando' ? 'bg-purple-800 cursor-wait'
          : estado === 'ok' ? 'bg-green-600'
          : estado === 'error' ? 'bg-red-600'
          : 'bg-purple-600 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/20'
        }`}>
        {estado === 'publicando' ? '⏳ Publicando en todas las redes...'
          : estado === 'ok' ? '✅ ¡Publicado exitosamente!'
          : estado === 'error' ? '❌ Error - Verifica las conexiones'
          : programar ? '⏰ Programar publicación'
          : '🚀 Publicar ahora en todas las redes'}
      </button>

      <p className="text-center text-gray-600 text-xs mt-4">
        Publicará en {redesSeleccionadas.length} redes: {redesSeleccionadas.join(', ')}
      </p>
    </div>
  )
}
