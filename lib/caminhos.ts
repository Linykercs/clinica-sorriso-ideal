/** Subpasta em que o site é servido, definida em `next.config.ts`. */
const CAMINHO_BASE = process.env.NEXT_PUBLIC_CAMINHO_BASE ?? "";

/**
 * Prefixa um arquivo de `public/` com a subpasta de publicação.
 *
 * Por que isso existe: no build estático a otimização de imagem é desligada, e
 * nesse modo o `next/image` não adiciona o `basePath` ao `src` sozinho. Sem
 * este ajuste, as imagens dariam 404 quando o site é servido em
 * `usuario.github.io/nome-do-repo`.
 *
 * No build padrão o caminho base é vazio, então nada muda.
 *
 * Use sempre que apontar para um arquivo de `public/`:
 *     <Image src={caminhoPublico(site.hero.imagem)} ... />
 */
export function caminhoPublico(caminho: string): string {
  return `${CAMINHO_BASE}${caminho}`;
}
