import type { NextConfig } from "next";

/**
 * ============================================================================
 * ONDE ESTE SITE VAI SER PUBLICADO
 * ============================================================================
 *
 * O projeto tem dois modos de build:
 *
 *   1. PADRÃO (`npm run build`)
 *      Build normal, com otimização de imagem ligada. É o que a Vercel, a
 *      Netlify e o Cloudflare Pages usam. Recomendado para site de cliente.
 *
 *   2. ESTÁTICO (`EXPORTAR_ESTATICO=1 npm run build`)
 *      Gera a pasta `out/` com HTML, CSS e JS puros, para o GitHub Pages ou
 *      qualquer hospedagem que só sirva arquivo. É o que o workflow em
 *      `.github/workflows/deploy.yml` roda.
 *
 * O GitHub Pages não tem servidor Node, então nesse modo a otimização de
 * imagem é desligada. Consequência prática: exporte as fotos já em .webp e no
 * tamanho certo antes de colocar em `public/imagens/`, senão o visitante baixa
 * o arquivo original inteiro.
 * ============================================================================
 */

/**
 * Subpasta em que o site é servido no GitHub Pages.
 *
 * Repositório de PROJETO serve em `usuario.github.io/nome-do-repo`, então
 * precisa do nome do repositório aqui, começando com barra.
 *
 * Deixe uma string vazia ("") se for:
 *   - repositório de usuário (`linyker.github.io`), que serve na raiz, ou
 *   - domínio próprio apontado para o Pages.
 */
const CAMINHO_NO_GITHUB_PAGES = "/clinica-sorriso-ideal";

const exportarEstatico = process.env.EXPORTAR_ESTATICO === "1";
const caminhoBase = exportarEstatico ? CAMINHO_NO_GITHUB_PAGES : "";

const nextConfig: NextConfig = {
  /**
   * Publicado para o navegador em `lib/caminhos.ts`.
   *
   * Necessário porque, com `images.unoptimized`, o next/image NÃO adiciona o
   * basePath sozinho no src. Sem isso, toda imagem dá 404 na subpasta.
   */
  env: {
    NEXT_PUBLIC_CAMINHO_BASE: caminhoBase,
  },

  ...(exportarEstatico
    ? {
        output: "export" as const,
        basePath: caminhoBase,
        assetPrefix: caminhoBase,
        // Gera `/rota/index.html`, formato que host estático espera.
        trailingSlash: true,
        // Obrigatório sem servidor Node: o next/image passa a servir o arquivo
        // original, sem redimensionar nem converter para webp.
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
