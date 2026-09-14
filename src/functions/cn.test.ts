import { describe, expect, it } from "vitest";
import { cn } from "@/functions/cn";

describe("cn", () => {
  it("combina clases condicionales", () => {
    const result = cn("px-2", false && "hidden", "py-4", "px-3");
    expect(result).toContain("py-4");
    expect(result).toContain("px-3");
    expect(result).not.toContain("px-2");
  });

  it("mergea clases tailwind conflictivas", () => {
    const result = cn("text-sm", "text-lg", "font-medium");
    expect(result).toContain("text-lg");
    expect(result).not.toContain("text-sm");
    expect(result).toContain("font-medium");
  });
});
