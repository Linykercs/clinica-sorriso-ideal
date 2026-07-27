"use client";

import { useEffect, useState } from "react";

import { Icone } from "@/components/Icones";
import { Logo } from "@/components/Logo";
import { site } from "@/config/site";

/**
 * Header fixo com menu de navegação.
 *
 * Fica transparente sobre o hero e ganha fundo sólido depois que a página
 * rola. No celular, o menu vira um painel que abre de cima.
 */
export function Header() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Trava a rolagem do fundo enquanto o menu do celular está aberto.
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou || menuAberto
          ? "border-b border-borda bg-fundo/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#inicio" aria-label={`${site.marca.nome}, ir para o início`}>
          <Logo />
        </a>

        {/* Menu no computador */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {site.navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-texto transition-colors hover:text-primaria"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-full bg-primaria px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primaria/25 transition-colors hover:bg-primaria-escura sm:inline-flex"
          >
            Agendar
          </a>

          {/* Botão do menu no celular */}
          <button
            type="button"
            onClick={() => setMenuAberto((aberto) => !aberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-xl border border-borda bg-fundo text-titulo transition-colors hover:border-primaria lg:hidden"
          >
            <Icone nome={menuAberto ? "fechar" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      {/* Painel do menu no celular */}
      <div
        id="menu-mobile"
        hidden={!menuAberto}
        className="border-t border-borda bg-fundo lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8" aria-label="Navegação">
          {site.navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuAberto(false)}
              className="border-b border-borda py-4 text-base font-medium text-titulo last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuAberto(false)}
            className="mt-4 mb-2 rounded-full bg-primaria px-6 py-4 text-center font-semibold text-white"
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
