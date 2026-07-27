/**
 * Conjunto de ícones em SVG inline.
 *
 * São desenhados na mão para não depender de nenhuma biblioteca externa, o que
 * mantém o site leve. Todos usam `currentColor`, então herdam a cor do texto.
 *
 * Para adicionar um ícone novo: crie a função abaixo seguindo o mesmo padrão
 * (viewBox 0 0 24 24) e registre no objeto `icones` no fim do arquivo.
 */

import type { SVGProps } from "react";

type PropsDoIcone = SVGProps<SVGSVGElement>;

/** Props padrão dos ícones de traço. */
const traco = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Props padrão dos ícones preenchidos. */
const solido = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
} as const;

/** Contorno de dente reaproveitado por vários ícones. */
const DENTE =
  "M12 4.2c-1.7 0-2.3-.9-4-.9-2 0-3.4 1.6-3.4 4.2 0 2.3.8 3.6 1.3 5.6.4 1.5.5 4.4 1.9 4.4 1.2 0 1.1-2.5 1.5-4.2.3-1.1.7-1.7 2.7-1.7s2.4.6 2.7 1.7c.4 1.7.3 4.2 1.5 4.2 1.4 0 1.5-2.9 1.9-4.4.5-2 1.3-3.3 1.3-5.6 0-2.6-1.4-4.2-3.4-4.2-1.7 0-2.3.9-4 .9z";

/* -------------------------------------------------------------------------- */
/* ÍCONES DE SERVIÇO                                                           */
/* -------------------------------------------------------------------------- */

function Limpeza(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d="M11 3.4l1.3 4.1 4.1 1.3-4.1 1.3L11 14.2 9.7 10.1 5.6 8.8l4.1-1.3z" />
      <path d="M17.6 14.2l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7z" />
      <path d="M5.4 15.6l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5L3.4 18l1.5-.5z" />
    </svg>
  );
}

function Clareamento(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d={DENTE} />
      <path d="M18.6 3l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5L16.6 5l1.5-.5z" />
      <path d="M4.4 15.8l.4 1.2 1.2.4-1.2.4-.4 1.2-.4-1.2-1.2-.4 1.2-.4z" />
    </svg>
  );
}

function Ortodontia(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d="M2.5 12h19" />
      <rect x="3.6" y="9.2" width="4.6" height="5.6" rx="1.4" />
      <rect x="9.7" y="9.2" width="4.6" height="5.6" rx="1.4" />
      <rect x="15.8" y="9.2" width="4.6" height="5.6" rx="1.4" />
    </svg>
  );
}

function Implante(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d="M7.5 10.2c0-2.9 2-4.7 4.5-4.7s4.5 1.8 4.5 4.7z" />
      <path d="M12 10.2V20" />
      <path d="M9.6 12.5h4.8" />
      <path d="M10.1 15.2h3.8" />
      <path d="M10.6 17.9h2.8" />
    </svg>
  );
}

function Canal(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d={DENTE} />
      <path d="M10.3 8.6v4.8" />
      <path d="M13.7 8.6v4.8" />
    </svg>
  );
}

function Odontopediatria(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="9.3" cy="10.2" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.7" cy="10.2" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8.3 13.7c.9 1.6 2.1 2.4 3.7 2.4s2.8-.8 3.7-2.4" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* ÍCONES DE INTERFACE                                                         */
/* -------------------------------------------------------------------------- */

function Whatsapp(props: PropsDoIcone) {
  return (
    <svg {...solido} {...props}>
      <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.34z" />
      <path d="M12.05 2.02c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22.02l5.14-1.35a10 10 0 0 0 4.91 1.28h.01c5.51 0 9.99-4.48 10-10a10 10 0 0 0-10.01-9.93zm5.83 15.83a8.29 8.29 0 0 1-5.83 2.42h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.14.82.84-3.07-.2-.31a8.3 8.3 0 0 1 1.27-10.43 8.3 8.3 0 0 1 11.75 0 8.3 8.3 0 0 1-.15 11.91z" />
    </svg>
  );
}

function Instagram(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Telefone(props: PropsDoIcone) {
  return (
    <svg {...solido} {...props}>
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.28-.28.7-.37 1.05-.25 1.13.37 2.35.57 3.6.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.45c.55 0 1 .45 1 1 0 1.25.2 2.47.57 3.6.11.35.03.74-.25 1.02z" />
    </svg>
  );
}

function Local(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d="M12 21.2s7-5.6 7-11.2a7 7 0 1 0-14 0c0 5.6 7 11.2 7 11.2z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function Relogio(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 1.9" />
    </svg>
  );
}

function Email(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
      <path d="M3.4 7.2l7.6 5.3c.6.42 1.4.42 2 0l7.6-5.3" />
    </svg>
  );
}

function Estrela(props: PropsDoIcone) {
  return (
    <svg {...solido} {...props}>
      <path d="M12 3.4l2.65 5.37 5.93.86-4.29 4.18 1.01 5.9L12 17.93l-5.3 2.78 1.01-5.9-4.29-4.18 5.93-.86z" />
    </svg>
  );
}

function Menu(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function Fechar(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d="M6.4 6.4l11.2 11.2" />
      <path d="M17.6 6.4L6.4 17.6" />
    </svg>
  );
}

function Check(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d="M4.5 12.5l4.8 4.8L19.5 7.1" />
    </svg>
  );
}

function SetaBaixo(props: PropsDoIcone) {
  return (
    <svg {...traco} {...props}>
      <path d="M12 4.8v14.4" />
      <path d="M5.8 13l6.2 6.2L18.2 13" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* REGISTRO                                                                    */
/* -------------------------------------------------------------------------- */

export const icones = {
  limpeza: Limpeza,
  clareamento: Clareamento,
  ortodontia: Ortodontia,
  implante: Implante,
  canal: Canal,
  odontopediatria: Odontopediatria,
  whatsapp: Whatsapp,
  instagram: Instagram,
  telefone: Telefone,
  local: Local,
  relogio: Relogio,
  email: Email,
  estrela: Estrela,
  menu: Menu,
  fechar: Fechar,
  check: Check,
  setaBaixo: SetaBaixo,
};

export type NomeDoIcone = keyof typeof icones;

/** Renderiza um ícone pelo nome, usado pelos cards de serviço. */
export function Icone({ nome, ...props }: { nome: NomeDoIcone } & PropsDoIcone) {
  const Componente = icones[nome];
  return <Componente aria-hidden="true" {...props} />;
}
