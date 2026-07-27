import { Icone } from "@/components/Icones";
import { Secao } from "@/components/Secao";
import { site } from "@/config/site";

/** Monta as iniciais do paciente para o avatar, ex.: "Marina Rezende" -> "MR". */
function iniciais(nome: string): string {
  return nome
    .split(" ")
    .filter((parte) => parte.length > 2)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
}

/** Estrelas da nota, de 1 a 5. */
function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Nota ${nota} de 5`}>
      {Array.from({ length: 5 }, (_, indice) => (
        <Icone
          key={indice}
          nome="estrela"
          className={indice < nota ? "size-4 text-destaque" : "size-4 text-borda"}
        />
      ))}
    </div>
  );
}

/** Depoimentos de pacientes, vindos de `depoimentos.itens` no config. */
export function Depoimentos() {
  return (
    <Secao
      id="depoimentos"
      fundo="suave"
      etiqueta={site.depoimentos.etiqueta}
      titulo={site.depoimentos.titulo}
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {site.depoimentos.itens.map((depoimento) => (
          <li
            key={depoimento.nome}
            className="flex flex-col rounded-3xl border border-borda bg-fundo p-8 shadow-sm"
          >
            <Estrelas nota={depoimento.nota} />

            <blockquote className="mt-5 grow leading-relaxed text-texto">
              <p>{depoimento.texto}</p>
            </blockquote>

            <div className="mt-7 flex items-center gap-4 border-t border-borda pt-6">
              <span
                aria-hidden="true"
                className="grid size-12 shrink-0 place-items-center rounded-full bg-primaria-clara font-titulo font-bold text-primaria"
              >
                {iniciais(depoimento.nome)}
              </span>
              <span className="min-w-0">
                <span className="block font-titulo font-bold text-titulo">
                  {depoimento.nome}
                </span>
                <span className="block text-sm text-texto">{depoimento.legenda}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
