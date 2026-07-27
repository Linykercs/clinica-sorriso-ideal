import Image from "next/image";

import { Secao } from "@/components/Secao";
import { site } from "@/config/site";
import { caminhoPublico } from "@/lib/caminhos";

/**
 * Grade de fotos da estrutura.
 *
 * TROCAR AS FOTOS: coloque os arquivos novos em `public/imagens/` e atualize
 * a lista `galeria.fotos` em `config/site.ts`. Formato recomendado: .webp ou
 * .jpg em 1200x900 px. O Next otimiza sozinho quando o arquivo não é .svg.
 *
 * A primeira e a última foto ocupam dois espaços no computador, o que dá
 * ritmo à grade. Se você mudar a quantidade de fotos, ajuste ou remova as
 * classes `lg:col-span-2` abaixo.
 */
export function Galeria() {
  return (
    <Secao
      id="galeria"
      etiqueta={site.galeria.etiqueta}
      titulo={site.galeria.titulo}
      subtitulo={site.galeria.subtitulo}
    >
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {site.galeria.fotos.map((foto, indice) => {
          const largo = indice === 0 || indice === site.galeria.fotos.length - 1;
          return (
            <li
              key={foto.src}
              className={`group relative overflow-hidden rounded-2xl bg-fundo-suave ${
                largo ? "lg:col-span-2" : ""
              } ${indice === 0 ? "col-span-2 lg:col-span-2" : ""}`}
            >
              <div className="relative aspect-4/3">
                <Image
                  src={caminhoPublico(foto.src)}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Legenda que aparece ao passar o mouse */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-titulo/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">{foto.alt}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Secao>
  );
}
