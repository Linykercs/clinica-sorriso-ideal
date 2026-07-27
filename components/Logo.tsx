import { site } from "@/config/site";

/**
 * Logo em texto estilizado, montado a partir de `marca.logo` no config.
 *
 * TROCAR POR UMA IMAGEM DE LOGO:
 * coloque o arquivo em `public/imagens/logo.svg` e substitua o conteúdo do
 * `<span>` abaixo por:
 *
 *   import Image from "next/image";
 *   <Image src="/imagens/logo.svg" alt={site.marca.nome} width={160} height={40} priority />
 */
export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 font-titulo text-xl font-extrabold tracking-tight sm:text-[1.375rem]">
      {/* Símbolo: gota estilizada. Some quando o logo virar imagem. */}
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-xl bg-primaria text-white shadow-sm shadow-primaria/30"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M12 3.4c-1.6 0-2.2-.8-3.8-.8-2 0-3.4 1.6-3.4 4.3 0 2.3.8 3.6 1.3 5.7.4 1.5.5 4.5 1.9 4.5 1.2 0 1.1-2.5 1.5-4.3.3-1.1.7-1.7 2.5-1.7s2.2.6 2.5 1.7c.4 1.8.3 4.3 1.5 4.3 1.4 0 1.5-3 1.9-4.5.5-2.1 1.3-3.4 1.3-5.7 0-2.7-1.4-4.3-3.4-4.3-1.6 0-2.2.8-3.8.8z" />
        </svg>
      </span>
      <span className={claro ? "text-white" : "text-titulo"}>
        {site.marca.logo.parteUm}
        <span className="text-primaria">{site.marca.logo.parteDois}</span>
      </span>
    </span>
  );
}
