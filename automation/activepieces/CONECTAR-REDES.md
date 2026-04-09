# 🔌 Conectar redes sociales en ActivePieces
## (Solo login normal, sin copiar APIs)

---

## 🚀 Paso 1: Instalar ActivePieces (1 comando)

```bash
# En tu terminal, desde la carpeta automation/activepieces:
docker-compose up -d
```

Luego abre: **http://localhost:8080**  
Crea tu cuenta de admin (solo tú la usas).

---

## 📥 Paso 2: Importar el flujo listo

1. En ActivePieces → menú izquierdo → **"Flows"**
2. Clic en **"Import"**
3. Sube el archivo **`flow-web3-autopost.json`**
4. El flujo aparece con todos los pasos listos ✅

---

## 🔌 Paso 3: Conectar cada red (solo login)

### ✖ X (Twitter)
1. En el flujo, clic en el paso **"Publicar en X"**
2. Clic en **"+ Add Connection"**
3. Se abre ventana → **"Sign in with X"**
4. Inicia sesión con tu cuenta de X ✅

---

### 📸 Instagram
1. Clic en el paso **"Publicar en Instagram"**
2. Clic en **"+ Add Connection"**
3. Se abre ventana → **"Continue with Facebook"**
4. Inicia sesión con tu cuenta de Facebook
5. Selecciona tu cuenta de Instagram profesional ✅

> ⚠️ Instagram requiere cuenta **Business o Creator** (no personal).  
> Puedes convertir tu cuenta gratis en: Instagram → Configuración → Cuenta → Cambiar a cuenta profesional

---

### 💼 LinkedIn
1. Clic en el paso **"Publicar en LinkedIn"**
2. Clic en **"+ Add Connection"**
3. Se abre ventana → **"Sign in with LinkedIn"**
4. Inicia sesión con tu cuenta ✅

---

### 📘 Facebook
1. Clic en el paso **"Publicar en Facebook"**
2. Clic en **"+ Add Connection"**
3. Se abre ventana → **"Continue with Facebook"**
4. Inicia sesión y selecciona tu página ✅

---

### ⬡ Farcaster (requiere key gratis de Neynar)
1. Entra a **[neynar.com](https://neynar.com)**
2. Crea cuenta gratis (sin tarjeta)
3. Ve a **Dashboard → API Keys** → copia tu key
4. En ActivePieces → clic en el paso **"Publicar en Farcaster"**
5. Pega la API Key en el campo **"farcaster_api_key"** ✅

---

### 🌿 Lens Protocol
1. Entra a **[hey.xyz](https://hey.xyz)** (red social de Lens)
2. Conecta tu wallet (MetaMask)
3. Copia tu **Profile ID** (en tu perfil → URL)
4. En ActivePieces → campo **"lens_profile_id"** ✅

---

## ✅ Paso 4: Activar el flujo

1. En ActivePieces → tu flujo **"Web3 AutoPost"**
2. Toggle superior derecho → **"Enabled"** ✅
3. ¡Listo! El flujo ya está escuchando publicaciones

---

## 🌐 Publicar desde tu panel

Una vez activo:
1. Abre tu panel en **http://localhost:3000/admin** (o tu URL de Vercel)
2. Escribe tu contenido, sube imagen, pon hashtags
3. Selecciona las redes
4. Clic en **"Publicar ahora"** 🚀
5. ActivePieces recibe el contenido y publica en todas las redes automáticamente ✅

---

## 💡 Publicar en Railway (gratis en la nube, sin Docker en tu PC)

Si no quieres instalar Docker:
1. Entra a **[railway.app](https://railway.app)**
2. **"New Project"** → **"Deploy from GitHub"**
3. Selecciona tu repo `soligas/web3-autopost`
4. Elige la carpeta `automation/activepieces`
5. Railway lo despliega gratis con URL pública ✅
