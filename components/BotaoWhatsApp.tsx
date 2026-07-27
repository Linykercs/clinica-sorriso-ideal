import { Icone } from "@/components/Icones";
import { site } from "@/config/site";
import { linkWhatsApp } from "@/lib/whatsapp";

/**
 * Botão flutuante de WhatsApp, fixo em todas as telas.
 *
 * A mensagem que já vem digitada é `contato.mensagemWhatsapp`, em
 * `config/site.ts`. O verde é o oficial do WhatsApp e por isso fica fora do
 * tema: trocar a cor da marca não deve descaracterizar o ícone do app.
 */
export function BotaoWhatsApp() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar com a ${site.marca.nome} no WhatsApp`}
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-4 pr-5 pl-4 text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      {/* Anel pulsante que chama atenção sem ser barulhento */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20"
      />
      <Icone nome="whatsapp" className="size-7 shrink-0" />
      <span className="hidden text-sm font-semibold sm:inline">Agendar</span>
    </a>
  );
}
