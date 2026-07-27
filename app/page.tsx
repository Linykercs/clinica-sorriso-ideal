import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { Contato } from "@/components/Contato";
import { Depoimentos } from "@/components/Depoimentos";
import { Galeria } from "@/components/Galeria";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Rodape } from "@/components/Rodape";
import { Servicos } from "@/components/Servicos";
import { Sobre } from "@/components/Sobre";

/**
 * Página única do site.
 *
 * A ordem das seções aqui é a ordem em que elas aparecem na tela. Para
 * reordenar ou remover uma seção, mexa nas linhas abaixo e ajuste o menu em
 * `navegacao`, dentro de `config/site.ts`.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Servicos />
        <Galeria />
        <Depoimentos />
        <Contato />
      </main>
      <Rodape />
      <BotaoWhatsApp />
    </>
  );
}
