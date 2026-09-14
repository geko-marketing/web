# Architecture · Geko Marketing Web

Documento técnico de referencia para entender cómo está organizado el proyecto y cómo mantenerlo escalable sin perder velocidad de entrega.

---

## 1) Objetivo de arquitectura

- Mantener una base **simple, estable y orientada a negocio**.
- Separar claramente:
  - experiencia pública (marketing),
  - sistema de UI,
  - lógica de soporte (chat demo, utilidades, traducciones).
- Facilitar despliegue en hosting estático sin backend Node.

---

## 2) Capas del proyecto

### `src/app`
Responsable de rutas, layouts y composición de páginas.

- `layout.tsx`: shell global de la app
- `(marketing)/`: páginas públicas de negocio

### `src/components`
Catálogo de componentes visuales por dominio:

- `global/`: elementos transversales (chat, providers, wrappers, assets)
- `marketing/`: secciones de landing y páginas de servicios
- `ui/`: primitives y componentes reutilizables

### `src/constants`
Datos de negocio estáticos reutilizables (planes, reviews, footer links, perks).

### `src/translations`
Sistema de traducciones ES/EN y helper de acceso (`t`).

### `src/lib`
Lógica funcional desacoplada de UI (ej. motor de respuestas del chat demo).

### `src/functions`
Utilidades auxiliares (helpers de clase, metadata, etc.).

### `src/styles`
Estilos globales, tokens CSS y ajustes de base.

---

## 3) Principios aplicados

1. **Single responsibility** por carpeta/componente.
2. **Barrels controlados**: solo exportar lo que realmente se consume.
3. **Frontend-first** para hosting estático: no depender de rutas API.
4. **Minimal runtime**: sin dependencias huérfanas ni componentes muertos.
5. **Tema único (dark)** para consistencia visual y menor complejidad.

---

## 4) Flujo de render y datos

- Páginas de marketing renderizan contenido estático + componentes animados.
- Traducciones se resuelven en cliente según contexto de idioma.
- Chat demo procesa intenciones localmente (`src/lib/chat-demo.ts`).

No hay backend obligatorio para el funcionamiento principal del sitio.

---

## 5) Deploy model

Configurado para export estático con Next:

- `next.config.mjs` con `output: "export"`
- build de producción genera `out/`
- publicación en Hostinger subiendo `out/` a `public_html`

---

## 6) Mantenimiento recomendado

### Calidad mínima por cambio

- `npm run lint`
- `npm run build`
- `npm run lighthouse:ci`

El pipeline de CI incluye Lighthouse CI con umbrales para Performance, Accessibility, Best Practices y SEO en rutas críticas.

### Criterios de PR

- Cambios acotados por feature
- Sin introducir dependencias sin uso
- Sin mantener código comentado obsoleto
- Sin duplicar componentes similares

### Frecuencia sugerida

- Revisión de dependencias: mensual
- Barrido de código muerto: mensual o por release

---

## 7) Convenciones rápidas

- Componentes: PascalCase
- Archivos utilitarios: kebab/lowercase según módulo
- Imports absolutos vía alias `@/`
- Evitar side effects en componentes de UI

---

## 8) Evolución futura (roadmap técnico)

1. Añadir pruebas de smoke para rutas críticas.
2. Integrar control de tamaño de bundle por CI.
3. Documentar tokens de diseño en un `DESIGN-SYSTEM.md`.
4. Si se requiere IA real: mover chat a servicio serverless externo.

---

## 9) Estado actual

Arquitectura limpia, validada y lista para producción estática:

- Lint OK
- Build OK
- Estructura modular y mantenible
