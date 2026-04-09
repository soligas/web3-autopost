# 🤖 Motor de Automatización - Web3 AutoPost

## ¿Qué hace esto?

Este sistema usa **n8n** (gratis, open source) para publicar automáticamente en todas las redes sociales con UN SOLO CLIC desde tu panel.

---

## 🚀 Instalar n8n en 3 pasos (GRATIS)

### Opción A: En tu computador local

```bash
# 1. Instala Docker Desktop (gratis)
# Descarga desde: https://docker.com/products/docker-desktop

# 2. Corre n8n con un solo comando
docker-compose up -d

# 3. Abre n8n en tu navegador
# http://localhost:5678
# Usuario: admin
# Contraseña: web3autopost2026
```

### Opción B: En Railway (gratis en la nube)

1. Entra a [railway.app](https://railway.app)
2. Haz clic en **"New Project"**
3. Elige **"Deploy from Docker image"**
4. Imagen: `n8nio/n8n`
5. ¡Listo! Te da una URL pública gratis

---

## 🔌 Conectar cada red social (solo un clic)

Una vez que n8n esté corriendo:

### 1. Importar el flujo
1. Abre n8n → menú lateral → **"Workflows"**
2. Clic en **"Import from file"**
3. Sube el archivo `web3-autopost-flow.json`
4. El flujo aparece listo con todos los pasos

### 2. Conectar X (Twitter)
1. En el flujo, clic en el nodo **"✖ Publicar en X"**
2. Clic en **"Credentials"** → **"Connect"**
3. Se abre una ventana → **inicias sesión con tu cuenta X**
4. ¡Listo! Queda conectado

### 3. Conectar Instagram / Facebook
1. Clic en el nodo **"📸 Publicar en Instagram"**
2. Clic en **"Connect with Facebook"**
3. Inicias sesión con tu cuenta de Facebook/Instagram
4. Seleccionas tu página o cuenta de negocio
5. ¡Listo!

### 4. Conectar LinkedIn
1. Clic en el nodo **"💼 Publicar en LinkedIn"**
2. Clic en **"Connect with LinkedIn"**
3. Inicias sesión con tu cuenta LinkedIn
4. ¡Listo!

### 5. Conectar Farcaster (Neynar - gratis)
1. Entra a [neynar.com](https://neynar.com) → crea cuenta gratis
2. Ve a **API Keys** → copia tu key gratuita
3. En n8n, clic en el nodo **"⬡ Publicar en Farcaster"**
4. Pega tu API Key
5. ¡Listo!

### 6. Conectar Lens Protocol
1. Entra a [lens.xyz](https://lens.xyz) → conecta tu wallet
2. Copia tu Profile ID
3. En n8n, clic en el nodo **"🌿 Publicar en Lens"**
4. Pega tu Profile ID
5. ¡Listo!

---

## 📤 ¿Cómo publicar contenido?

Una vez conectadas las redes, para publicar:

1. Abre el **panel de contenido** (`http://localhost:3000/admin`)
2. Escribe tu texto, sube la imagen, agrega hashtags
3. Selecciona las redes donde quieres publicar
4. Haz clic en **"Publicar ahora"** o programa la fecha
5. El sistema lo publica solo en todas las redes ✅

---

## 🌐 Redes conectadas

| Red | Tipo | Audiencia | Estado |
|-----|------|-----------|--------|
| X (Twitter) | Web2 | Todos | 🔌 Conectar |
| Instagram | Web2 | Principiantes | 🔌 Conectar |
| Facebook | Web2 | Principiantes | 🔌 Conectar |
| TikTok | Web2 | Principiantes | 🔌 Conectar |
| LinkedIn | Web2 | Profesionales | 🔌 Conectar |
| Farcaster | Web3 | Expertos | 🔌 Conectar |
| Lens Protocol | Web3 | Expertos | 🔌 Conectar |
| Mirror.xyz | Web3 | Expertos | 🔌 Conectar |
