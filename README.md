# GEKO MARKETING · Agencia de Marketing Digital

Plataforma web de marketing de **Geko Marketing**, construida con Next.js y optimizada para rendimiento, branding y despliegue estático en entornos sin Node.js (por ejemplo, Hostinger compartido).

---

## ✨ Qué incluye este proyecto

- Sitio corporativo multipágina con enfoque comercial y conversión
- Sistema de componentes reutilizables (UI + secciones de marketing)
- Chat demo inteligente en frontend (sin backend ni API)
- Tema visual unificado (modo oscuro) para coherencia de marca
- Export estático listo para producción (`out/`)

---

## 🧩 Stack tecnológico

- **Framework:** Next.js 16 (App Router)
- **UI:** React 18 + Tailwind CSS
- **Animaciones:** Framer Motion + Motion + GSAP
- **Tooling:** TypeScript, ESLint, PostCSS
- **Notificaciones:** Sonner

---

## 📁 Estructura principal

```text
src/
	app/
		(marketing)/        # Páginas públicas
		layout.tsx          # Layout raíz
	components/
		global/             # Layout global, chat, providers, assets
		marketing/          # Secciones de negocio (hero, pricing, etc.)
		ui/                 # Componentes base reutilizables
	constants/            # Contenido estático (planes, reviews, links)
	context/              # Contexto de idioma
	functions/            # Utilidades internas
	lib/                  # Lógica auxiliar (chat demo)
	styles/               # Globals + tokens CSS
	translations/         # i18n ES/EN
```

Arquitectura extendida en: `ARCHITECTURE.md`.

---

## ⚙️ Requisitos de entorno

- **Node.js:** `>=20.17.0`
- **npm:** `>=10`
- Recomendado: `nvm`

El repositorio ya incluye:

- `.nvmrc`
- `.node-version`
- `engines` en `package.json`
- `.npmrc` con `engine-strict=true`

---

## 🚀 Puesta en marcha local

```bash
nvm install
nvm use
npm install
npm run dev
```

App local: `http://localhost:3000`

---

## ✅ Calidad y verificación

```bash
npm run lint
npm run build
npm run lighthouse:ci
```

Estos comandos validan estilo, tipos y compilación de producción.

`lighthouse:ci` ejecuta auditorías sobre páginas clave y falla si no cumple umbrales de performance, accesibilidad, best-practices y SEO.

---

## 🌍 Deploy en Hostinger (sin Node)

Este proyecto está preparado para **hosting estático**.

1. Genera build de producción:

```bash
npm run build
```

2. Se crea la carpeta `out/`.
3. Sube el contenido de `out/` al `public_html` de Hostinger.

> Nota: el chat actual es demo frontend, por lo que no requiere backend/API.

---

## 🧠 Chat demo (sin API)

El asistente del sitio funciona en cliente y responde por intenciones:

- servicios
- planes/precios
- recomendación
- proceso
- tiempos
- integraciones
- soporte
- FAQ
- contacto

Archivo principal de lógica: `src/lib/chat-demo.ts`.

---

## 🔐 Seguridad y estabilidad

- Sin claves sensibles en frontend
- Sin dependencia de rutas API server-side para operación principal
- Dependencias no utilizadas eliminadas para reducir superficie de riesgo
- Código muerto y componentes legacy retirados para mejorar mantenibilidad

---

## 👥 Flujo recomendado de trabajo

1. Crear rama de feature
2. Implementar cambios pequeños y trazables
3. Ejecutar `npm run lint && npm run build`
4. Abrir PR con descripción funcional + checklist técnico

---

## 📬 Contacto de negocio

Para propuestas comerciales o colaboración:

- Usar formularios y CTAs del sitio
- O derivar al canal comercial oficial de Geko Marketing

---

## Licencia

Este proyecto se distribuye bajo la licencia incluida en `LICENSE`.
