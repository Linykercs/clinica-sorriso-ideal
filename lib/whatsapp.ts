import { site } from "@/config/site";

/**
 * Monta o link do WhatsApp com a mensagem já preenchida.
 *
 * O número e a mensagem padrão vêm de `config/site.ts`. Passe `mensagem` para
 * usar um texto diferente em um botão específico.
 */
export function linkWhatsApp(mensagem: string = site.contato.mensagemWhatsapp): string {
  const numero = site.contato.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

/** Link `tel:` a partir do telefone exibido na tela. */
export function linkTelefone(): string {
  return `tel:+55${site.contato.telefone.replace(/\D/g, "")}`;
}
