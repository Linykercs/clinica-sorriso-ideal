import type { CSSProperties } from "react";

import { site } from "@/config/site";

/** Converte camelCase em kebab-case: `primariaEscura` vira `primaria-escura`. */
function paraKebab(texto: string): string {
  return texto.replace(/[A-Z]/g, (letra) => `-${letra.toLowerCase()}`);
}

/**
 * Transforma as cores de `config/site.ts` em variáveis CSS.
 *
 * O resultado é aplicado na tag `<html>` pelo layout, e o Tailwind consome
 * essas variáveis através do bloco `@theme inline` em `app/globals.css`.
 * Ou seja: as cores moram em um lugar só, o arquivo de configuração.
 */
export function variaveisDeTema(): CSSProperties {
  const entradas = Object.entries(site.tema.cores).map(([nome, valor]) => [
    `--cor-${paraKebab(nome)}`,
    valor,
  ]);

  return Object.fromEntries(entradas) as CSSProperties;
}
