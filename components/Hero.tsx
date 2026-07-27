import Image from "next/image";

import { Icone } from "@/components/Icones";
import { site } from "@/config/site";
import { caminhoPublico } from "@/lib/caminhos";
import { linkWhatsApp } from "@/lib/whatsapp";

/**
 * Primeira dobra.
 *
 * TROCAR A IMAGEM DE FUNDO: substitua `public/imagens/hero.svg` por uma foto
 * do cliente (1920x1280 px em .jpg ou .webp fica bom) e atualize
 * `hero.imagem` em `config/site.ts`.
 */
export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[92svh] items-center">
      {/* Imagem de fundo */}
      <Image
        src={caminhoPublico(site.hero.imagem)}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Véu escuro para o texto ficar legível sobre qualquer foto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-titulo/90 via-titulo/75 to-primaria-escura/70"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-20 sm:px-8 sm:pt-32">
        <div className="max-w-2xl">
          <span
            className="animar-entrada inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm"
            style={{ animationDelay: "0.05s" }}
          >
            {site.hero.etiqueta}
          </span>

          <h1
            className="animar-entrada mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]"
            style={{ animationDelay: "0.15s" }}
          >
            {site.hero.titulo}
          </h1>

          <p
            className="animar-entrada mt-4 font-titulo text-xl font-semibold text-primaria-clara sm:text-2xl"
            style={{ animationDelay: "0.25s" }}
          >
            {site.marca.slogan}
          </p>

          <p
            className="animar-entrada mt-5 max-w-xl text-lg leading-relaxed text-white/85"
            style={{ animationDelay: "0.35s" }}
          >
            {site.hero.subtitulo}
          </p>

          <div
            className="animar-entrada mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primaria px-8 py-4.5 text-base font-semibold text-white shadow-xl shadow-black/25 transition-all hover:bg-primaria-escura hover:shadow-2xl"
            >
              <Icone nome="whatsapp" className="size-5" />
              {site.hero.botaoPrimario}
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {site.hero.botaoSecundario}
            </a>
          </div>

          <ul
            className="animar-entrada mt-10 flex flex-wrap gap-x-6 gap-y-3"
            style={{ animationDelay: "0.55s" }}
          >
            {site.hero.selos.map((selo) => (
              <li key={selo} className="flex items-center gap-2 text-sm text-white/80">
                <Icone nome="check" className="size-4 text-primaria-clara" />
                {selo}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Seta discreta convidando a rolar */}
      <a
        href="#sobre"
        aria-label="Ir para a seção sobre"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-white/50 transition-colors hover:text-white sm:block"
      >
        <Icone nome="setaBaixo" className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
