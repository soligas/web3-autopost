# 🤖 Guía de Automatización - Web3 AutoPost

## Flujo completo de autopublicación

Cada vez que agregas contenido en Notion, se publica automáticamente en:
- X (Twitter)
- Instagram
- Facebook
- TikTok
- LinkedIn
- Farcaster
- Lens Protocol
- Mirror.xyz / Paragraph

---

## Paso 1: Configurar Notion

1. Crea una cuenta en [notion.so](https://notion.so)
2. Crea una base de datos llamada `Publicaciones Web3`
3. Agrega estos campos:
   - `Título` → Text
   - `Texto` → Text
   - `Hashtags` → Text
   - `Imagen` → Files & media
   - `Redes` → Multi-select (X, Instagram, Facebook, LinkedIn, TikTok, Farcaster, Lens, Mirror)
   - `Nivel` → Select (Principiante, Experto, Todos)
   - `Status` → Select (Pendiente, Publicado)

---

## Paso 2: Configurar Zapier/Make

1. Entra a [zapier.com](https://zapier.com) o [make.com](https://make.com)
2. Crea un nuevo flujo:
   - **Trigger**: Nuevo registro en Notion (base `Publicaciones Web3`)
   - **Acción 1**: Publicar en X (Twitter) → texto + hashtags + imagen
   - **Acción 2**: Publicar en Meta (Instagram/Facebook) → texto + imagen
   - **Acción 3**: Publicar en LinkedIn → texto + hashtags
   - **Acción 4**: Crear post en Farcaster → texto + hashtags
3. Activa el flujo → ya no necesitas hacer nada más

---

## Paso 3: Configurar variables de entorno

1. Copia `.env.example` a `.env.local`
2. Completa cada variable con tus tokens de API
3. Haz push a GitHub → Vercel despliega automáticamente

---

## ¿Cómo publicar contenido nuevo?

1. Abre Notion → base `Publicaciones Web3`
2. Agrega una nueva fila con:
   - Texto del post
   - Hashtags: `#web3 #blockchain #crypto`
   - Imagen adjunta
   - Redes donde publicar
   - Nivel: Principiante / Experto / Todos
3. ¡Listo! El sistema publica solo en todos lados ✅
