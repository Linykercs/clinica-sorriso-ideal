import type { Metadata } from "next";
/**
 * TROCAR AS FONTES AQUI.
 * O `next/font` exige import estático, então a troca de fonte é feita nestas
 * duas linhas. Escolha qualquer fonte do Google Fonts, mantenha os mesmos
 * nomes de variável (`--fonte-titulo` e `--fonte-corpo`) e atualize também
 * `tema.fontes` em `config/site.ts`, que serve de referência.
 */
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { site } from "@/config/site";
import { variaveisDeTema } from "@/lib/tema";

import "./globals.css";

const fonteTitulo = Plus_Jakarta_Sans({
  variable: "--fonte-titulo",
  subsets: ["latin"],
  display: "swap",
});

const fonteCorpo = Inter({
  variable: "--fonte-corpo",
  subsets: ["latin"],
  display: "swap",
});

/** Título e descrição da aba do navegador, montados a partir do config. */
export const metadata: Metadata = {
  title: `${site.marca.nome} | ${site.marca.slogan}`,
  description: site.marca.descricao,
  openGraph: {
    title: `${site.marca.nome} | ${site.marca.slogan}`,
    description: site.marca.descricao,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      // As cores do config viram variáveis CSS aqui, e o Tailwind as consome.
      style={variaveisDeTema()}
      className={`${fonteTitulo.variable} ${fonteCorpo.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
