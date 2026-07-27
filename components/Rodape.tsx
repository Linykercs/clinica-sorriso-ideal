import { Icone } from "@/components/Icones";
import { Logo } from "@/components/Logo";
import { enderecoCompleto, site } from "@/config/site";
import { linkTelefone, linkWhatsApp } from "@/lib/whatsapp";

/** Rodapé com contatos, links e responsável técnico. */
export function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-titulo text-white/70">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-2">
            <Logo claro />
            <p className="mt-5 max-w-sm leading-relaxed">{site.rodape.texto}</p>

            <div className="mt-6 flex gap-3">
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
                className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-primaria"
              >
                <Icone nome="whatsapp" className="size-5" />
              </a>
              <a
                href={site.contato.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir o Instagram da clínica"
                className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-primaria"
              >
                <Icone nome="instagram" className="size-5" />
              </a>
              <a
                href={linkTelefone()}
                aria-label="Ligar para a clínica"
                className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-primaria"
              >
                <Icone nome="telefone" className="size-5" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="font-titulo text-base font-bold text-white">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {site.navegacao.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-primaria">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="font-titulo text-base font-bold text-white">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <Icone nome="local" className="mt-0.5 size-5 shrink-0 text-primaria" />
                <span className="leading-relaxed">{enderecoCompleto}</span>
              </li>
              <li className="flex gap-3">
                <Icone nome="telefone" className="mt-0.5 size-5 shrink-0 text-primaria" />
                <a href={linkTelefone()} className="transition-colors hover:text-primaria">
                  {site.contato.telefone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icone nome="email" className="mt-0.5 size-5 shrink-0 text-primaria" />
                <a
                  href={`mailto:${site.contato.email}`}
                  className="break-words transition-colors hover:text-primaria"
                >
                  {site.contato.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {site.marca.nome}. {site.rodape.direitos}
          </p>
          <p>{site.rodape.responsavelTecnico}</p>
        </div>
      </div>
    </footer>
  );
}
