import { Icone } from "@/components/Icones";
import { Secao } from "@/components/Secao";
import { site } from "@/config/site";
import { linkWhatsApp } from "@/lib/whatsapp";

/**
 * Grade de serviços.
 *
 * Os itens vêm de `servicos.itens` em `config/site.ts`. Adicionar ou remover
 * um card é só editar aquela lista, o layout se ajusta sozinho.
 */
export function Servicos() {
  return (
    <Secao
      id="servicos"
      fundo="suave"
      etiqueta={site.servicos.etiqueta}
      titulo={site.servicos.titulo}
      subtitulo={site.servicos.subtitulo}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.servicos.itens.map((servico) => (
          <li
            key={servico.titulo}
            className="group rounded-3xl border border-borda bg-fundo p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primaria/40 hover:shadow-xl hover:shadow-titulo/5"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-primaria-clara text-primaria transition-colors duration-300 group-hover:bg-primaria group-hover:text-white">
              <Icone nome={servico.icone} className="size-7" />
            </span>
            <h3 className="mt-6 font-titulo text-xl font-bold">{servico.titulo}</h3>
            <p className="mt-3 leading-relaxed text-texto">{servico.descricao}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-3xl bg-primaria px-8 py-10 text-center shadow-xl shadow-primaria/20 sm:px-12">
        <h3 className="font-titulo text-2xl font-bold text-white sm:text-3xl">
          Não sabe de qual tratamento você precisa?
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Manda uma mensagem contando o que está sentindo. A gente te orienta e, se for o
          caso, agenda uma avaliação.
        </p>
        <a
          href={linkWhatsApp("Olá, gostaria de agendar uma avaliação")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-semibold text-primaria transition-transform hover:scale-[1.03]"
        >
          <Icone nome="whatsapp" className="size-5" />
          Falar com a clínica
        </a>
      </div>
    </Secao>
  );
}
