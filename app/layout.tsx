import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3 AutoPost | Blog & Comunidad Web3',
  description: 'Plataforma de contenido Web3 para expertos y principiantes. Aprende, comparte y crece en el ecosistema blockchain.',
  keywords: ['web3', 'blockchain', 'crypto', 'NFT', 'DeFi', 'comunidad', 'educacion'],
  openGraph: {
    title: 'Web3 AutoPost',
    description: 'Tu plataforma de contenido Web3',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-web3-dark text-white min-h-screen`}>
        <nav className="border-b border-purple-900/30 bg-web3-dark/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ⬡ Web3 AutoPost
            </a>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">Inicio</a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <a href="/aprende" className="hover:text-white transition-colors">Aprende</a>
              <a href="/comunidad" className="hover:text-white transition-colors">Comunidad</a>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-purple-900/30 mt-16 py-8 text-center text-gray-500 text-sm">
          <p>⬡ Web3 AutoPost · Hecho con ❤️ para la comunidad Web3</p>
        </footer>
      </body>
    </html>
  )
}
