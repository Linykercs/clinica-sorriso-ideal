/**
 * ============================================================================
 * ARQUIVO ÚNICO DE CONFIGURAÇÃO DO SITE
 * ============================================================================
 *
 * Tudo que muda de um cliente para outro está aqui. Para transformar esta base
 * no site de outro cliente, edite este arquivo e troque as imagens em
 * `public/imagens/`. Nenhum componente precisa ser tocado.
 *
 * Roteiro rápido (leia o README.md para o passo a passo completo):
 *   1. `marca`      -> nome, slogan e textos do topo
 *   2. `tema`       -> cores e fontes da identidade visual
 *   3. `contato`    -> telefone, WhatsApp, Instagram, e-mail
 *   4. `endereco`   -> endereço e link do mapa
 *   5. `horarios`   -> dias e horários de atendimento
 *   6. seções       -> hero, sobre, servicos, galeria, depoimentos
 *   7. troque os arquivos em `public/imagens/`
 * ============================================================================
 */

import type { NomeDoIcone } from "@/components/Icones";

/* -------------------------------------------------------------------------- */
/* TIPOS                                                                       */
/* -------------------------------------------------------------------------- */

export type ItemDeMenu = {
  /** Texto exibido no menu. */
  label: string;
  /** Âncora da seção, precisa bater com o `id` da seção na página. */
  href: string;
};

export type Servico = {
  /** Ícone do card. Veja os nomes disponíveis em `components/Icones.tsx`. */
  icone: NomeDoIcone;
  titulo: string;
  descricao: string;
};

export type FotoDaGaleria = {
  /** Caminho dentro de `public/`. Troque o arquivo mantendo o mesmo nome. */
  src: string;
  /** Texto alternativo, importante para acessibilidade e para o Google. */
  alt: string;
};

export type Depoimento = {
  nome: string;
  /** Nota de 1 a 5, exibida em estrelas. */
  nota: number;
  texto: string;
  /** Aparece abaixo do nome, algo como "Paciente desde 2021". */
  legenda: string;
};

export type Horario = {
  dias: string;
  horas: string;
};

export type Destaque = {
  /** Número grande do card, pode ter sufixo: "12", "4.500+", "4,9". */
  valor: string;
  label: string;
};

/* -------------------------------------------------------------------------- */
/* CONFIGURAÇÃO                                                                */
/* -------------------------------------------------------------------------- */

export const site = {
  /* ======================================================================== */
  /* 1. MARCA                                                                 */
  /* ======================================================================== */
  marca: {
    /** Nome completo, usado no título da aba e no rodapé. */
    nome: "Clínica Sorriso Ideal",
    /**
     * O logo é texto estilizado, dividido em duas partes para receberem cores
     * diferentes. Para usar uma imagem de logo, veja o comentário dentro de
     * `components/Logo.tsx`.
     */
    logo: {
      parteUm: "Sorriso",
      parteDois: "Ideal",
    },
    slogan: "Seu sorriso em boas mãos",
    /** Descrição curta usada na aba do navegador e no compartilhamento. */
    descricao:
      "Clínica odontológica em Uberlândia com atendimento humanizado, tecnologia moderna e uma equipe que cuida do seu sorriso do começo ao fim.",
  },

  /* ======================================================================== */
  /* 2. TEMA: cores e fontes                                                  */
  /* ======================================================================== */
  /**
   * Trocar estes valores muda a identidade visual inteira do site.
   * As cores viram variáveis CSS em `app/layout.tsx` e são consumidas pelo
   * Tailwind através de `app/globals.css` (bloco `@theme inline`).
   *
   * Classes disponíveis: bg-primaria, text-primaria, border-primaria,
   * bg-primaria-escura, bg-primaria-clara, text-destaque, text-titulo,
   * text-texto, bg-fundo, bg-fundo-suave, border-borda.
   */
  tema: {
    cores: {
      /** Cor principal: botões, links e destaques. */
      primaria: "#0D9488",
      /** Tom mais escuro da principal: hover de botões e gradientes. */
      primariaEscura: "#0B6F66",
      /** Tom bem claro da principal: fundos de ícone e etiquetas. */
      primariaClara: "#E4F4F2",
      /** Cor de apoio, usada nas estrelas e em pequenos detalhes. */
      destaque: "#D9A353",
      /** Cor dos títulos. */
      titulo: "#0E2E2B",
      /** Cor dos textos corridos. */
      texto: "#5A6B69",
      /** Fundo padrão das seções. */
      fundo: "#FFFFFF",
      /** Fundo das seções alternadas, para dar respiro à página. */
      fundoSuave: "#F4FAF9",
      /** Cor de bordas e divisórias. */
      borda: "#E1EEEC",
    },
    /**
     * As fontes são carregadas com `next/font` em `app/layout.tsx`, que exige
     * import estático. Para trocar, edite os dois imports lá no topo do arquivo.
     * Os nomes abaixo servem de referência do que está em uso.
     */
    fontes: {
      titulo: "Plus Jakarta Sans",
      corpo: "Inter",
    },
  },

  /* ======================================================================== */
  /* 3. CONTATO                                                               */
  /* ======================================================================== */
  contato: {
    /** Telefone como o visitante lê na tela. */
    telefone: "(34) 3232-4500",
    /** WhatsApp só com números, com DDI 55 na frente e sem espaços. */
    whatsapp: "5534988776655",
    /** Primeira mensagem já preenchida quando o visitante abre o WhatsApp. */
    mensagemWhatsapp: "Olá, gostaria de agendar",
    email: "contato@sorrisoideal.com.br",
    instagram: {
      usuario: "@clinicasorrisoideal",
      url: "https://instagram.com/clinicasorrisoideal",
    },
  },

  /* ======================================================================== */
  /* 4. ENDEREÇO                                                              */
  /* ======================================================================== */
  endereco: {
    rua: "Av. Rondon Pacheco, 1580",
    complemento: "Sala 302, Edifício Metropolitan",
    bairro: "Tibery",
    cidade: "Uberlândia",
    uf: "MG",
    cep: "38405-142",
    /**
     * Mapa incorporado sem chave de API. Para trocar de endereço, substitua o
     * texto depois de `?q=` pelo endereço do cliente, com os espaços virando
     * `+`, e mantenha o `&output=embed` no final.
     */
    mapaEmbed:
      "https://www.google.com/maps?q=Av.+Rondon+Pacheco,+1580,+Uberlandia+-+MG&output=embed",
  },

  /* ======================================================================== */
  /* 5. HORÁRIOS                                                              */
  /* ======================================================================== */
  horarios: [
    { dias: "Segunda a sexta", horas: "08h às 19h" },
    { dias: "Sábado", horas: "08h às 13h" },
    { dias: "Domingo e feriados", horas: "Fechado" },
  ] as Horario[],

  /* ======================================================================== */
  /* 6. MENU DE NAVEGAÇÃO                                                     */
  /* ======================================================================== */
  /** O `href` precisa ser igual ao `id` da seção correspondente. */
  navegacao: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ] as ItemDeMenu[],

  /* ======================================================================== */
  /* 7. SEÇÃO HERO (primeira dobra)                                           */
  /* ======================================================================== */
  hero: {
    /** Etiqueta pequena acima do título. */
    etiqueta: "Odontologia em Uberlândia",
    titulo: "Clínica Sorriso Ideal",
    subtitulo:
      "Tratamento odontológico completo, com equipe especializada e atendimento que respeita o seu tempo e o seu medo de dentista.",
    botaoPrimario: "Agendar pelo WhatsApp",
    botaoSecundario: "Conheça a clínica",
    /** Imagem de fundo. Troque o arquivo em `public/imagens/hero.svg`. */
    imagem: "/imagens/hero.svg",
    /** Selos exibidos abaixo dos botões. */
    selos: ["Atendimento humanizado", "Convênios aceitos", "Estacionamento no local"],
  },

  /* ======================================================================== */
  /* 8. SEÇÃO SOBRE                                                           */
  /* ======================================================================== */
  sobre: {
    etiqueta: "Sobre a clínica",
    titulo: "Cuidar de gente antes de cuidar de dente",
    paragrafos: [
      "A Clínica Sorriso Ideal nasceu em 2013, na Avenida Rondon Pacheco, com uma ideia simples: consultório de dentista não precisa ser um lugar de tensão. Começamos com duas cadeiras e uma recepção pequena, e hoje somos seis especialistas atendendo em quatro consultórios.",
      "Trabalhamos com diagnóstico por imagem digital, o que reduz a exposição à radiação e permite mostrar na tela, junto com você, exatamente o que precisa ser feito e por quê. Nada de tratamento que o paciente não entendeu.",
      "Cada plano é apresentado com orçamento fechado antes de começar. Sem surpresa no meio do caminho, sem procedimento que aparece do nada na hora de pagar.",
    ],
    destaques: [
      { valor: "12", label: "anos de clínica" },
      { valor: "4.500+", label: "pacientes atendidos" },
      { valor: "6", label: "especialistas" },
      { valor: "4,9", label: "nota média dos pacientes" },
    ] as Destaque[],
    /** Imagem lateral. Troque o arquivo em `public/imagens/sobre.svg`. */
    imagem: "/imagens/sobre.svg",
  },

  /* ======================================================================== */
  /* 9. SEÇÃO SERVIÇOS                                                        */
  /* ======================================================================== */
  servicos: {
    etiqueta: "O que fazemos",
    titulo: "Tratamentos disponíveis",
    subtitulo:
      "Da limpeza de rotina ao implante. Tudo em um só lugar, com a mesma equipe acompanhando o seu caso do início ao fim.",
    /** Para adicionar um serviço, copie um bloco e escolha um `icone`. */
    itens: [
      {
        icone: "limpeza",
        titulo: "Limpeza e Profilaxia",
        descricao:
          "Remoção de tártaro e placa com ultrassom, polimento e aplicação de flúor. A consulta de manutenção que evita a maior parte dos problemas caros lá na frente.",
      },
      {
        icone: "clareamento",
        titulo: "Clareamento Dental",
        descricao:
          "Clareamento em consultório com sessão de 50 minutos, ou moldeira personalizada para fazer em casa no seu ritmo. Avaliamos qual dos dois combina com o seu esmalte.",
      },
      {
        icone: "ortodontia",
        titulo: "Ortodontia",
        descricao:
          "Aparelho fixo metálico, estético ou alinhador transparente. Documentação ortodôntica completa e acompanhamento mensal com hora marcada.",
      },
      {
        icone: "implante",
        titulo: "Implante Dentário",
        descricao:
          "Implante de titânio com planejamento digital e prótese em porcelana. Recuperamos a mastigação e a estética de quem perdeu um ou vários dentes.",
      },
      {
        icone: "canal",
        titulo: "Tratamento de Canal",
        descricao:
          "Endodontia com localizador apical e anestesia bem conduzida. Na maioria dos casos, resolvido em sessão única e sem a dor que a fama do procedimento promete.",
      },
      {
        icone: "odontopediatria",
        titulo: "Odontopediatria",
        descricao:
          "Atendimento infantil com linguagem e ritmo de criança. Primeira consulta é só de ambientação, para o pequeno conhecer a cadeira sem nenhum procedimento.",
      },
    ] as Servico[],
  },

  /* ======================================================================== */
  /* 10. SEÇÃO GALERIA                                                        */
  /* ======================================================================== */
  galeria: {
    etiqueta: "Nossa estrutura",
    titulo: "Conheça a clínica por dentro",
    subtitulo:
      "Ambiente climatizado, equipamentos revisados e protocolo de esterilização seguido à risca.",
    /**
     * Para trocar as fotos: coloque os arquivos novos em `public/imagens/`
     * e atualize `src` e `alt`. Aceita .jpg, .png ou .webp, e o Next otimiza
     * automaticamente quando não é .svg. Recomendado 1200x900 px.
     */
    fotos: [
      { src: "/imagens/galeria-1.svg", alt: "Recepção da clínica" },
      { src: "/imagens/galeria-2.svg", alt: "Consultório com cadeira odontológica" },
      { src: "/imagens/galeria-3.svg", alt: "Sala de raio-x digital" },
      { src: "/imagens/galeria-4.svg", alt: "Espaço infantil da clínica" },
      { src: "/imagens/galeria-5.svg", alt: "Central de esterilização" },
      { src: "/imagens/galeria-6.svg", alt: "Equipe da clínica" },
    ] as FotoDaGaleria[],
  },

  /* ======================================================================== */
  /* 11. SEÇÃO DEPOIMENTOS                                                    */
  /* ======================================================================== */
  depoimentos: {
    etiqueta: "Quem já passou por aqui",
    titulo: "O que os pacientes falam",
    itens: [
      {
        nome: "Marina Rezende",
        nota: 5,
        legenda: "Paciente desde 2019",
        texto:
          "Cheguei com pavor de dentista por causa de uma experiência ruim na infância. A doutora explicou cada passo antes de encostar em mim e fez o canal sem que eu sentisse nada. Hoje venho sozinha e sem drama.",
      },
      {
        nome: "Carlos Eduardo Prata",
        nota: 5,
        legenda: "Implante em 2024",
        texto:
          "Fiz dois implantes e o que mais me marcou foi o orçamento fechado. Não apareceu nenhum custo extra no meio do tratamento, exatamente como tinham falado na primeira consulta.",
      },
      {
        nome: "Juliana Vasconcelos",
        nota: 5,
        legenda: "Mãe do Théo, 6 anos",
        texto:
          "Levei meu filho com o maior receio e ele saiu pedindo pra voltar. A primeira consulta foi só pra ele conhecer o lugar, brincar e sentar na cadeira. Na segunda, deixou restaurar o dentinho numa boa.",
      },
    ] as Depoimento[],
  },

  /* ======================================================================== */
  /* 12. SEÇÃO CONTATO                                                        */
  /* ======================================================================== */
  contatoSecao: {
    etiqueta: "Venha nos visitar",
    titulo: "Localização e contato",
    subtitulo:
      "Estamos na Rondon Pacheco, com estacionamento no prédio e acesso fácil por transporte público.",
    /** Texto do botão principal desta seção. */
    botao: "Agendar pelo WhatsApp",
  },

  /* ======================================================================== */
  /* 13. RODAPÉ                                                               */
  /* ======================================================================== */
  rodape: {
    /** Frase curta abaixo do logo. */
    texto:
      "Odontologia completa em Uberlândia, com atendimento humanizado e tecnologia de diagnóstico digital.",
    /**
     * Responsável técnico. Exigido pelo Conselho Federal de Odontologia em
     * peças de divulgação. Troque pelo CRO do cliente.
     */
    responsavelTecnico: "Responsável técnica: Dra. Helena Prado, CRO-MG 00000",
    /** O ano é preenchido automaticamente. */
    direitos: "Todos os direitos reservados.",
  },
} as const;

export type SiteConfig = typeof site;

/* -------------------------------------------------------------------------- */
/* DERIVADOS: montados a partir do que está acima, não precisa editar          */
/* -------------------------------------------------------------------------- */

/** Endereço em uma linha só, usado no rodapé e no bloco de contato. */
export const enderecoCompleto = [
  site.endereco.rua,
  site.endereco.complemento,
  `${site.endereco.bairro}, ${site.endereco.cidade} ${site.endereco.uf}`,
  `CEP ${site.endereco.cep}`,
].join(" - ");
