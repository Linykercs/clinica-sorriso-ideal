import { Icone } from "@/components/Icones";
import { Secao } from "@/components/Secao";
import { site } from "@/config/site";
import { linkTelefone, linkWhatsApp } from "@/lib/whatsapp";

/**
 * Localização, horários e formas de contato.
 *
 * TROCAR O MAPA: em `config/site.ts`, altere `endereco.mapaEmbed`. Basta
 * colocar o endereço do cliente depois de `?q=` e manter `&output=embed`.
 * Não precisa de chave da API do Google.
 */
export function Contato() {
  const { endereco, contato, horarios, contatoSecao } = site;

  return (
    <Secao
      id="contato"
      etiqueta={contatoSecao.etiqueta}
      titulo={contatoSecao.titulo}
      subtitulo={contatoSecao.subtitulo}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Coluna das informações */}
        <div className="flex flex-col gap-5">
          <div className="rounded-3xl border border-borda bg-fundo p-7">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primaria-clara text-primaria">
                  <Icone nome="local" className="size-5" />
                </span>
                <span>
                  <span className="block font-titulo font-bold text-titulo">Endereço</span>
                  <span className="mt-1 block leading-relaxed text-texto">
                    {endereco.rua}
                    <br />
                    {endereco.complemento}
                    <br />
                    {endereco.bairro}, {endereco.cidade} {endereco.uf}, CEP {endereco.cep}
                  </span>
                </span>
              </li>

              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primaria-clara text-primaria">
                  <Icone nome="telefone" className="size-5" />
                </span>
                <span>
                  <span className="block font-titulo font-bold text-titulo">Telefone</span>
                  <a
                    href={linkTelefone()}
                    className="mt-1 block text-texto transition-colors hover:text-primaria"
                  >
                    {contato.telefone}
                  </a>
                </span>
              </li>

              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primaria-clara text-primaria">
                  <Icone nome="email" className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-titulo font-bold text-titulo">E-mail</span>
                  <a
                    href={`mailto:${contato.email}`}
                    className="mt-1 block break-words text-texto transition-colors hover:text-primaria"
                  >
                    {contato.email}
                  </a>
                </span>
              </li>

              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primaria-clara text-primaria">
                  <Icone nome="relogio" className="size-5" />
                </span>
                <span className="w-full">
                  <span className="block font-titulo font-bold text-titulo">
                    Horário de atendimento
                  </span>
                  <dl className="mt-2 space-y-1.5">
                    {horarios.map((horario) => (
                      <div
                        key={horario.dias}
                        className="flex flex-wrap justify-between gap-x-4 text-texto"
                      >
                        <dt>{horario.dias}</dt>
                        <dd className="font-medium text-titulo">{horario.horas}</dd>
                      </div>
                    ))}
                  </dl>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-primaria px-7 py-4 font-semibold text-white shadow-lg shadow-primaria/25 transition-colors hover:bg-primaria-escura"
            >
              <Icone nome="whatsapp" className="size-5" />
              {contatoSecao.botao}
            </a>
            <a
              href={contato.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-borda px-7 py-4 font-semibold text-titulo transition-colors hover:border-primaria hover:text-primaria"
            >
              <Icone nome="instagram" className="size-5" />
              {contato.instagram.usuario}
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="min-h-[22rem] overflow-hidden rounded-3xl border border-borda shadow-lg shadow-titulo/5 lg:min-h-full">
          <iframe
            src={endereco.mapaEmbed}
            title={`Mapa com a localização da ${site.marca.nome}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="size-full min-h-[22rem] border-0"
          />
        </div>
      </div>
    </Secao>
  );
}
