# Chivanski Studio — Site

Site estático (HTML/CSS/JS puro, sem build), bilíngue PT/EN, responsivo, com
modo claro/escuro automático, galeria de vídeos filtrável, portfólio em
formato flipbook, FAQ e formulário de contato. Pronto pra publicar no
**Cloudflare Pages** ou **GitHub Pages**.

## Posicionamento

O site foi estruturado em torno de **"você vende conteúdo, não audiência"** —
por isso não há números de seguidores, engajamento ou alcance em lugar
nenhum. O foco é mostrar capacidade de produção (roteiro, gravação, edição)
e processo profissional.

## Estrutura

```
index.html          → Home
about.html           → Sobre (pesquisadora/escritora/comunicadora + Background)
services.html        → O que eu faço (serviços, nichos, processo, o que está incluso)
portfolio.html        → Portfólio por categoria (flipbook + galeria de vídeos filtrável)
work-with-me.html      → Work With Me (como contratar, termos, FAQ)
contact.html          → Contato (formulário + WhatsApp + redes)
css/style.css          → Todo o design (cores, fontes, layout, animações)
js/script.js            → Tema, idioma, menu mobile, reveals, modal de vídeo, filtro, formulário
js/flipbook.js           → Lógica da "revista" do portfólio
robots.txt / sitemap.xml  → SEO básico
```

## 1. O que trocar antes de publicar (checklist)

Faça uma busca por estes termos em todos os arquivos `.html` e troque pelo
seu conteúdo real:

| Buscar | Trocar por |
|---|---|
| `5500000000000` | Seu número de WhatsApp com DDI+DDD, só números (ex: `5511999999999`) |
| `contato@chivanskistudio.com` | Seu e-mail real |
| `SEU_FORM_ID` (em `contact.html`) | Seu ID do [Formspree](https://formspree.io) (grátis) |
| `href="#"` nos ícones de redes sociais | Links reais do Instagram/TikTok |
| Textos entre `[colchetes]` | Suas informações reais (prazos, pagamento, background, recibo etc.) |
| `SEU-DOMINIO.com` (em `robots.txt` e `sitemap.xml`) | Seu domínio final |

Textos entre colchetes aparecem principalmente em `about.html` (seção
Background) e `work-with-me.html` (prazos, pagamento, política de revisão,
recibo) — são os pontos que dependem da sua situação de negócio atual.

O formulário de contato **não envia nada** até você configurar o Formspree
(ou [Web3Forms](https://web3forms.com), que também é grátis e não exige
conta). Enquanto isso, ele mostra um aviso amigável em vez de falhar
silenciosamente.

## 2. Textos em PT/EN

Cada elemento de texto tem dois atributos:

```html
<h1 data-pt="Texto em português" data-en="Text in English">Texto em português</h1>
```

O JS troca o conteúdo ao clicar em **PT/EN** no topo do site. Pra editar um
texto, troque nos dois lugares: no atributo (`data-pt`/`data-en`) **e** no
conteúdo visível do elemento.

Para `placeholder` de campos de formulário, use `data-pt-placeholder` /
`data-en-placeholder`.

## 3. Portfólio (flipbook) — usando seu PDF

O `portfolio.html` tem 8 páginas de exemplo, organizadas pelas categorias:
Capa, On Camera, Home Studio, Product Photos, Pet Content, Finished Ads,
UGC Videos, Contracapa.

1. Exporte cada página do seu PDF como imagem (PNG/JPG, ~1600px de largura).
2. Salve em `assets/portfolio/`.
3. Em cada `.flip-page`, troque o `<div class="placeholder-art">` por:
   ```html
   <img src="assets/portfolio/pagina-01.jpg" alt="On Camera" style="width:100%;height:100%;object-fit:cover;">
   ```
4. Pode adicionar, remover ou reordenar blocos `.flip-page` livremente — o
   `flipbook.js` se ajusta automaticamente à quantidade de páginas.

## 4. Vídeos clicáveis + filtro por categoria

Cada item da galeria em `portfolio.html` tem:

```html
<div class="gallery-item" data-category="on-camera" data-video-src="LINK_AQUI" data-video-type="iframe">
```

- `data-category` controla o filtro (`on-camera`, `home-studio`, `product`,
  `pet`, `ads`, `ugc`) — use um dos valores existentes ou adicione um novo
  botão em `.filter-row` com o mesmo valor em `data-filter`.
- **YouTube/Vimeo**: link de embed (`https://www.youtube.com/embed/ID`) com
  `data-video-type="iframe"`.
- **Arquivo próprio (.mp4)**: coloque em `assets/videos/` e use
  `data-video-type="video"`.

## 5. Cores e fontes

Tudo em `css/style.css`, dentro de `:root` (modo claro) e
`[data-theme="dark"]` (modo escuro):

```css
--bg: #F8F5F1;      /* fundo */
--surface: #E9DFD4; /* cards, fundos secundários */
--ink: #222222;     /* texto principal */
--brand: #5E4A3E;   /* marrom café — marca */
--accent: #B08D57;  /* dourado — detalhes e CTAs */
```

## 6. Modo claro/escuro

Segue o sistema operacional do visitante por padrão
(`prefers-color-scheme`), com botão de sol/lua pra forçar manualmente.

## 7. Publicar de graça

### Cloudflare Pages
1. Crie uma conta em [pages.cloudflare.com](https://pages.cloudflare.com).
2. "Create a project" → "Upload assets" (ou conecte um repositório do GitHub).
3. Arraste a pasta inteira do site.
4. Não precisa configurar build command — é site estático puro.

### GitHub Pages
1. Suba todos os arquivos pra um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em "Source", selecione a branch `main` e a pasta `/root` → Save.
4. Em alguns minutos o site fica no ar em `usuario.github.io/repositorio`
   (ou na raiz, se o repositório se chamar `usuario.github.io`).
5. Se a aba **Actions** não mostrar nada rodando, confirme que os arquivos
   foram realmente commitados na branch `main` e que Actions está habilitado
   em **Settings → Actions → General**.

## 8. SEO básico já incluso

- `<title>` e `<meta name="description">` únicos por página.
- `robots.txt` e `sitemap.xml` (troque `SEU-DOMINIO.com` pelo domínio real).
- HTML semântico (`header`, `main`, `footer`, hierarquia de `h1`/`h2`).
- Depois de publicar, cadastre o site no
  [Google Search Console](https://search.google.com/search-console).
