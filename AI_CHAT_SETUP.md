# 🤖 Configuración del Chat con IA - Geko Marketing

## Descripción

Se ha integrado un chat con IA profesional usando:
- **Vercel AI SDK**: Framework robusto para aplicaciones con IA
- **Hugging Face Inference API**: Acceso gratuito a modelos de IA avanzados

## ⚙️ Configuración Inicial

### 1. Obtener API Key de Hugging Face (GRATIS)

1. Ve a [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
2. Inicia sesión (o crea una cuenta - es gratuito)
3. Haz clic en "New token"
4. Selecciona "Fine-grained token"
5. Dale un nombre descriptivo: "Geko Marketing Chat"
6. Elige los permisos: "Inference API"
7. Copia el token generado

### 2. Configurar la Variable de Entorno

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Añade tu API key en `.env.local`:

```env
HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3. Reiniciar el servidor

```bash
pnpm dev
```

## 🎯 Características Actuales

- ✅ Chat en tiempo real con IA
- ✅ Interfaz moderna y responsive
- ✅ Animaciones suaves (Framer Motion)
- ✅ Soporte para manejos de errores
- ✅ Completamente GRATUITO

## 🧠 Entrenar/Personalizar el Chat

### Opción 1: Cambiar el Modelo (Recomendado)

En `/src/app/api/chat/route.ts`, cambia el modelo:

```typescript
// Modelos disponibles gratuitos en Hugging Face:

// Rápido y ligero
"HuggingFaceH4/zephyr-7b-beta"

// Muy bueno para conversación
"mistralai/Mistral-7B-Instruct-v0.1"

// Mejor calidad (más lento)
"meta-llama/Llama-2-7b-chat-hf"

// Especializado para marketing/negocios
"google/flan-t5-base"
```

Ejemplo:
```typescript
const response = await hf.textGeneration({
    model: "HuggingFaceH4/zephyr-7b-beta",  // Cambiar aquí
    inputs: formatMessages(messages),
    parameters: {
        max_new_tokens: 512,
        temperature: 0.7,
        top_p: 0.9,
    },
});
```

### Opción 2: Ajustar los Parámetros de Generación

```typescript
parameters: {
    max_new_tokens: 512,      // Largo máximo de respuesta
    temperature: 0.7,         // 0=determinístico, 1=creativo
    top_p: 0.9,               // Diversidad de respuestas
}
```

### Opción 3: Agregar Sistema de Contexto/Personalización

Modifica `formatMessages()` para incluir instrucciones personalizadas:

```typescript
function formatMessages(messages: any[]) {
    const systemPrompt = `Eres un asistente de Geko Marketing.
Tu objetivo es ayudar a los clientes con:
- Información sobre nuestros servicios
- Soluciones de marketing digital
- Gestión de redes sociales
- Creación de pages web profesionales
- Impulso de marca

Sé profesional, amable y siempre ofrece soluciones prácticas.`;

    let formattedMessages = systemPrompt + "\n\n";
    
    formattedMessages += messages
        .map((msg: any) => `${msg.role === "user" ? "Usuario" : "Asistente"}: ${msg.content}`)
        .join("\n");
    
    return formattedMessages;
}
```

### Opción 4: Fine-tuning en Hugging Face (Avanzado)

1. Prepara un dataset de conversaciones en formato JSON
2. Ve a [Hugging Face](https://huggingface.co)
3. Usa su interfaz de fine-tuning con tu modelo base
4. Descarga el modelo entrenado
5. Integra el nuevo modelo en tu API

## 📊 Monitoreo y Mejoras

### Ver logs del servidor
```bash
# Ver errores en tiempo real
tail -f .next/server/logs/
```

### Métricas a monitorear
- Tiempo de respuesta (idealmente < 2 segundos)
- Calidad de respuestas
- Errores de API

### Mejoras recomendadas
1. **Guardar conversaciones**: Almacena en base de datos para análisis
2. **Feedback del usuario**: Pregunta si la respuesta fue útil
3. **Analytics**: Monitorea qué preguntas hace la gente
4. **Personalizacion**: Ajusta el sistema prompt según feedback

## 🚀 Alternativas Premium (Opcional)

Si en el futuro quieres cambiar a opciones más potentes:

### OpenAI GPT-4
```bash
pnpm add @ai-sdk/openai
```

### Google Gemini
```bash
pnpm add @ai-sdk/google
```

### Claude (Anthropic)
```bash
pnpm add @ai-sdk/anthropic
```

## ❓ Solución de Problemas

**"API Key no configurada"**
- Asegúrate de que `.env.local` existe
- Verifica que `HUGGINGFACE_API_KEY` está presente

**"Error 429 - Rate Limited"**
- Hugging Face tiene límites gratuitos
- Espera unos minutos o considera actualizar a plan Pro

**Respuestas lentas**
- Cambia a un modelo más pequeño/rápido
- Reduce `max_new_tokens`

**Respuestas no relevantes**
- Ajusta el `temperature` (más bajo = más enfocado)
- Mejora el system prompt
- Considera fine-tuning

## 📚 Recursos

- [Vercel AI SDK Docs](https://sdk.vercel.ai)
- [Hugging Face Models](https://huggingface.co/models)
- [API Reference](https://huggingface.co/docs/api-inference)
- [Modelos recomendados](https://huggingface.co/spaces?sort=trending)

## 💡 Pro Tips

1. **Presupuesto**: El tier gratuito de Hugging Face es muy generoso (miles de requests/mes)
2. **Privacidad**: Los datos se procesan en servidores de Hugging Face
3. **Escalabilidad**: Si creces, ofrece plan Pro para infraestructura dedicada
4. **Customización**: El system prompt es tu mejor amigo para controlar el comportamiento

---

¿Dudas? Revisa la documentación de Hugging Face o Vercel AI SDK.
