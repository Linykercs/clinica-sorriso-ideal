# Clínica Sorriso Ideal

Site institucional de página única para clínica odontológica, feito em Next.js 16 (App Router), TypeScript e Tailwind CSS 4.

Esta é uma **base reutilizável**. Todo o conteúdo editável está em um único arquivo, `config/site.ts`. Para virar o site de outro cliente, você edita esse arquivo e troca as imagens. Nenhum componente precisa ser tocado.

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm start       # serve o build
```

## Adaptar para um cliente novo

O caminho todo leva menos de uma hora. São dois lugares: `config/site.ts` e `public/imagens/`.

### 1. Duplique a base

```bash
cp -r clinica-sorriso-ideal cliente-novo
cd cliente-novo
rm -rf .git node_modules .next
npm install
```

### 2. Edite `config/site.ts`

O arquivo é dividido em 13 blocos numerados e cada campo tem um comentário explicando para que serve. Na ordem:

| Bloco | O que muda |
| --- | --- |
| 1. `marca` | Nome, logo em duas partes, slogan e descrição |
| 2. `tema` | Cores e fontes |
| 3. `contato` | Telefone, WhatsApp, mensagem padrão, e-mail, Instagram |
| 4. `endereco` | Endereço completo e link do mapa |
| 5. `horarios` | Dias e horários |
| 6. `navegacao` | Itens do menu |
| 7. `hero` | Primeira dobra: etiqueta, título, subtítulo, botões, selos |
| 8. `sobre` | Texto institucional e os quatro números da clínica |
| 9. `servicos` | Cards de tratamento |
| 10. `galeria` | Lista de fotos |
| 11. `depoimentos` | Depoimentos com nome e nota |
| 12. `contatoSecao` | Textos da seção de localização |
| 13. `rodape` | Frase, responsável técnico e direitos |

### 3. Troque as cores

No bloco `tema.cores`. Mudar estes nove valores muda a identidade visual do site inteiro:

```ts
cores: {
  primaria: "#0D9488",        // botões, links, destaques
  primariaEscura: "#0B6F66",  // hover dos botões
  primariaClara: "#E4F4F2",   // fundo de ícones e etiquetas
  destaque: "#D9A353",        // estrelas dos depoimentos
  titulo: "#0E2E2B",          // cor dos títulos e do rodapé
  texto: "#5A6B69",           // texto corrido
  fundo: "#FFFFFF",           // fundo padrão
  fundoSuave: "#F4FAF9",      // fundo das seções alternadas
  borda: "#E1EEEC",           // bordas e divisórias
}
```

Como isso funciona: `app/layout.tsx` transforma essas cores em variáveis CSS na tag `<html>`, e `app/globals.css` conecta essas variáveis ao Tailwind. Resultado, as classes `bg-primaria`, `text-titulo`, `border-borda` e as outras seguem o config automaticamente. Não existe cor escrita à mão em nenhum componente.

### 4. Troque as fontes

O `next/font` exige import estático, então a troca é feita em `app/layout.tsx`, nas duas primeiras linhas de import. Escolha qualquer fonte do Google Fonts:

```ts
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
```

Mantenha os nomes das variáveis (`--fonte-titulo` e `--fonte-corpo`) e atualize `tema.fontes` no config, que serve de referência.

### 5. Troque as imagens

As imagens ficam em `public/imagens/`. Substitua os arquivos mantendo os mesmos nomes e nada mais precisa mudar:

| Arquivo | Onde aparece | Tamanho sugerido |
| --- | --- | --- |
| `hero.svg` | Fundo da primeira dobra | 1920x1280 |
| `sobre.svg` | Lateral da seção sobre | 1200x900 |
| `galeria-1.svg` a `galeria-6.svg` | Grade da galeria | 1200x900 |

Os arquivos que vieram são placeholders em SVG, com gradiente na cor da marca. Troque por fotos reais em `.webp` ou `.jpg` e atualize os caminhos no config. O Next otimiza automaticamente qualquer formato que não seja `.svg`.

### 6. Logo

O logo é texto estilizado, montado a partir de `marca.logo`. Para usar uma imagem, o passo a passo está comentado dentro de `components/Logo.tsx`.

### 7. Antes de publicar

- [ ] Trocar o WhatsApp em `contato.whatsapp`, com DDI 55 e só números
- [ ] Conferir o mapa: em `endereco.mapaEmbed`, troque o endereço depois de `?q=` e mantenha o `&output=embed`
- [ ] Preencher o CRO real em `rodape.responsavelTecnico`, exigido pelo Conselho Federal de Odontologia em peça de divulgação
- [ ] Substituir os placeholders por fotos reais da clínica
- [ ] Trocar o `app/favicon.ico`
- [ ] Rodar `npm run build` para confirmar que está tudo de pé

## Estrutura

```
clinica-sorriso-ideal/
├── config/
│   └── site.ts              <- TODO o conteúdo editável mora aqui
├── app/
│   ├── layout.tsx           <- fontes, metadados e injeção do tema
│   ├── globals.css          <- liga as variáveis do tema ao Tailwind
│   └── page.tsx             <- ordem das seções
├── components/
│   ├── Header.tsx           <- menu fixo, com painel no celular
│   ├── Hero.tsx             <- primeira dobra
│   ├── Sobre.tsx
│   ├── Servicos.tsx
│   ├── Galeria.tsx
│   ├── Depoimentos.tsx
│   ├── Contato.tsx          <- mapa, horários e formas de contato
│   ├── Rodape.tsx
│   ├── BotaoWhatsApp.tsx    <- botão flutuante fixo
│   ├── Secao.tsx            <- casca padrão das seções
│   ├── Logo.tsx
│   └── Icones.tsx           <- ícones SVG, sem biblioteca externa
├── lib/
│   ├── tema.ts              <- converte as cores em variáveis CSS
│   └── whatsapp.ts          <- monta os links wa.me e tel:
└── public/imagens/          <- troque os arquivos aqui
```

## Decisões técnicas

- **Zero dependência além do Next e do Tailwind.** Os ícones são SVG escritos à mão em `components/Icones.tsx`. Nenhuma biblioteca de ícone, nenhuma de animação.
- **Tudo estático.** A página inteira é pré-renderizada no build, o que deixa o carregamento rápido e a hospedagem barata.
- **Um único componente cliente.** Só o `Header` usa JavaScript no navegador, por causa do menu do celular. O resto é Server Component.
- **Rolagem suave em CSS**, sem biblioteca. O Next 16 deixou de sobrescrever `scroll-behavior`, então `scroll-margin-top` no CSS resolve o desconto da altura do header.
- **Acessibilidade**: `aria-label` nos botões de ícone, `aria-expanded` no menu, textos alternativos nas imagens e respeito a `prefers-reduced-motion`.

## Publicar

O projeto tem dois modos de build, definidos em `next.config.ts`.

### Modo padrão: Vercel, Netlify, Cloudflare

```bash
npm run build
```

Otimização de imagem ligada. É o recomendado para site de cliente, porque o `next/image` converte as fotos para webp e serve o tamanho certo para cada tela. Na Vercel é só `npx vercel`.

### Modo estático: GitHub Pages

Já configurado. O workflow `.github/workflows/deploy.yml` publica sozinho a cada push na `main` ou na `master`.

**Ligar pela primeira vez:**

```bash
git add .
git commit -m "Site da Clínica Sorriso Ideal"
git remote add origin https://github.com/SEU-USUARIO/clinica-sorriso-ideal.git
git push -u origin master
```

Depois, no GitHub: **Settings → Pages → Source: GitHub Actions**. Sem esse passo o workflow falha na hora de publicar.

O site fica em `https://SEU-USUARIO.github.io/clinica-sorriso-ideal/`.

**Para gerar o build estático na sua máquina:**

```powershell
$env:EXPORTAR_ESTATICO="1"; npm run build   # PowerShell
```
```bash
EXPORTAR_ESTATICO=1 npm run build           # bash
```

Sai na pasta `out/`. Para conferir antes de publicar, sirva ela com `npx serve out`.

### Ao clonar para outro cliente

Mude `CAMINHO_NO_GITHUB_PAGES` no topo do `next.config.ts` para o nome do novo repositório. Se for domínio próprio ou repositório de usuário (`seunome.github.io`), deixe string vazia.

### O que muda no modo estático

| | Padrão | Estático (Pages) |
| --- | --- | --- |
| Otimização de imagem | Sim | **Não** |
| Servidor Node | Necessário | Não |
| Custo | Grátis no plano free | Grátis |
| Domínio próprio | Sim | Sim |

Sem otimização, o navegador baixa a foto exatamente como você subiu. Exporte as imagens já em `.webp` e em no máximo 1600 px de largura antes de colocar em `public/imagens/`, senão uma foto de 3 MB vira 3 MB no 4G do visitante.
