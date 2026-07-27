import Image from "next/image";

import { site } from "@/config/site";
import { caminhoPublico } from "@/lib/caminhos";

/**
 * Seção institucional, em duas colunas no computador.
 *
 * TROCAR A IMAGEM: substitua `public/imagens/sobre.svg` e atualize
 * `sobre.imagem` em `config/site.ts`.
 */
export function Sobre() {
  return (
    <section id="sobre" className="bg-fundo py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Imagem */}
        <div className="relative order-last aspect-4/3 overflow-hidden rounded-3xl shadow-xl shadow-titulo/10 lg:order-first">
          <Image
            src={caminhoPublico(site.sobre.imagem)}
            alt={`Ambiente da ${site.marca.nome}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Texto */}
        <div>
          <span className="inline-flex rounded-full bg-primaria-clara px-4 py-1.5 text-sm font-semibold tracking-wide text-primaria">
            {site.sobre.etiqueta}
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            {site.sobre.titulo}
          </h2>

          <div className="mt-6 space-y-4">
            {site.sobre.paragrafos.map((paragrafo) => (
              <p key={paragrafo.slice(0, 24)} className="leading-relaxed text-texto">
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Números da clínica */}
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {site.sobre.destaques.map((destaque) => (
              <div key={destaque.label}>
                <dt className="font-titulo text-3xl font-extrabold text-primaria">
                  {destaque.valor}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-texto">{destaque.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
