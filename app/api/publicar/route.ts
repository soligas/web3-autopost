import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { texto, hashtags, redes, nivel, programado } = body

    if (!texto) {
      return NextResponse.json({ error: 'El texto es requerido' }, { status: 400 })
    }

    // URL de tu n8n (cambiar por tu URL real cuando instales n8n)
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/nuevo-post'

    // Enviar al webhook de n8n para que publique en todas las redes
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        texto,
        hashtags,
        redes,
        nivel,
        programado,
        timestamp: new Date().toISOString(),
        fuente: 'web3-autopost-panel',
      }),
    })

    if (response.ok) {
      return NextResponse.json({ 
        status: 'ok', 
        mensaje: '✅ Publicado en todas las redes',
        redes: redes.split(','),
      })
    } else {
      throw new Error('n8n no respondió correctamente')
    }
  } catch (error) {
    console.error('Error publicando:', error)
    // En desarrollo, simular éxito
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json({ 
        status: 'ok (simulado)', 
        mensaje: '✅ Modo desarrollo: conecta n8n para publicar en redes reales',
      })
    }
    return NextResponse.json({ error: 'Error al publicar' }, { status: 500 })
  }
}
