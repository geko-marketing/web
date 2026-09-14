import { describe, expect, it } from "vitest";
import { getDemoChatResponse } from "@/lib/chat-demo";

describe("getDemoChatResponse", () => {
  it("responde saludo para intención greeting", () => {
    const response = getDemoChatResponse([], "Hola EKO");
    expect(response.toLowerCase()).toContain("te puedo ayudar");
  });

  it("responde pricing y seguimiento cuando piden recomendación", () => {
    const response = getDemoChatResponse([], "¿Qué plan me recomiendas para mi negocio?");
    expect(response.toLowerCase()).toContain("sector");
    expect(response.toLowerCase()).toContain("presupuesto");
  });

  it("añade contexto para plan silver", () => {
    const response = getDemoChatResponse([], "Quiero información del plan Silver");
    expect(response).toContain("Si te interesa Silver");
  });

  it("usa fallback contextual cuando antes se habló de precios", () => {
    const response = getDemoChatResponse(
      [
        { role: "user", content: "¿Qué precios tienen?" },
        { role: "assistant", content: "..." },
      ],
      "No me queda claro"
    );

    expect(response.toLowerCase()).toContain("planes base");
    expect(response.toLowerCase()).toContain("recomendación directa");
  });
});
