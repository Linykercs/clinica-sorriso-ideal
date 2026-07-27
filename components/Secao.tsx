import type { ReactNode } from "react";

/**
 * Casca padrão das seções da página.
 *
 * Centraliza espaçamento, largura máxima e o cabeçalho (etiqueta, título e
 * subtítulo), para que todas as seções fiquem visualmente alinhadas.
 */
export function Secao({
  id,
  etiqueta,
  titulo,
  subtitulo,
  fundo = "branco",
  centralizado = true,
  children,
}: {
  id: string;
  etiqueta?: string;
  titulo?: string;
  subtitulo?: string;
  /** `suave` pinta o fundo alternado, para dar respiro entre as seções. */
  fundo?: "branco" | "suave";
  centralizado?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={
        fundo === "suave" ? "bg-fundo-suave py-20 sm:py-28" : "bg-fundo py-20 sm:py-28"
      }
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(etiqueta || titulo || subtitulo) && (
          <header
            className={`mb-12 sm:mb-16 ${centralizado ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
          >
            {etiqueta && (
              <span className="inline-flex rounded-full bg-primaria-clara px-4 py-1.5 text-sm font-semibold tracking-wide text-primaria">
                {etiqueta}
              </span>
            )}
            {titulo && (
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {titulo}
              </h2>
            )}
            {subtitulo && (
              <p className="mt-5 text-lg leading-relaxed text-texto">{subtitulo}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
