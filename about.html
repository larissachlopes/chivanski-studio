# Chivanski Studio — Site

Site estático (HTML/CSS/JS puro, sem build), bilíngue PT/EN, responsivo, com
modo claro/escuro automático, galeria de vídeos com modal, portfólio em
formato flipbook e formulário de contato. Pronto pra publicar no **Cloudflare
Pages** ou **GitHub Pages**.

## Estrutura

```
index.html        → Home
about.html         → Sobre mim
portfolio.html     → Portfólio (flipbook + galeria de vídeos)
services.html      → Serviços
media-kit.html     → Media Kit (números, audiência, marcas)
contact.html       → Contato (formulário + WhatsApp + redes)
css/style.css       → Todo o design (cores, fontes, layout, animações)
js/script.js         → Tema, idioma, menu mobile, reveals, modal de vídeo, formulário
js/flipbook.js       → Lógica da "revista" do portfólio
robots.txt / sitemap.xml → SEO básico
```

## 1. O que trocar antes de publicar (checklist)

Faça uma busca por estes termos em todos os arquivos `.html` e troque pelo
seu conteúdo real:

| Buscar | Trocar por |
|---|---|
| `5500000000000` | Seu número de WhatsApp com DDI+DDD, só números (ex: `5511999999999`) |
| `contato@chivanskistudio.com` | Seu e-mail real |
| `SEU_FORM_ID` (em `contact.html`) | Seu ID do [Formspree](https://formspree.io) (grátis) — crie uma conta, um formulário, e copie o ID da URL de ação |
| `href="#"` nos ícones de redes sociais | Links reais do Instagram/TikTok/YouTube |
| `[Escreva aqui sua história...]`, `[Nome da marca]`, `Marca A/B/C...` | Seus textos e marcas reais |
| `SEU-DOMINIO.com` (em `robots.txt` e `sitemap.xml`) | Seu domínio final |

O formulário de contato **não envia nada** até você configurar o Formspree
(ou outro serviço tipo [Web3Forms](https://web3forms.com), que também é
grátis e não exige conta). Enquanto isso, ele mostra um aviso amigável em vez
de falhar silenciosamente.

## 2. Textos em PT/EN

Cada elemento de texto tem dois atributos:

```html
<h1 data-pt="Texto em português" data-en="Text in English">Texto em português</h1>
```

O JS troca o conteúdo ao clicar em **PT/EN** no topo do site. Pra editar um
texto, troque nos dois lugares: no atributo (`data-pt`/`data-en`) **e** no
conteúdo visível do elemento (que é o que aparece antes do JS rodar — deixe
sempre igual ao `data-pt`, já que o site abre em português por padrão, ou no
idioma do navegador do visitante).

Para `placeholder` de campos de formulário, use `data-pt-placeholder` /
`data-en-placeholder`.

## 3. Portfólio (flipbook) — usando seu PDF

O `portfolio.html` já tem uma "revista" funcional com 5 páginas de exemplo.
Pra usar seu PDF real:

1. Exporte cada página do PDF como imagem (PNG ou JPG, ~1600px de largura).
   Pode usar o site [pdf2image](https://www.ilovepdf.com/pdf_to_jpg) ou
   qualquer conversor de sua preferência.
2. Salve as imagens em `assets/portfolio/pagina-01.jpg`, `pagina-02.jpg`, etc.
3. Em cada bloco `.flip-page` do `portfolio.html`, troque a `<div class="placeholder-art">...</div>` por:
   ```html
   <img src="assets/portfolio/pagina-01.jpg" alt="Página 1" style="width:100%;height:100%;object-fit:cover;">
   ```
4. Copie/cole o bloco `.flip-page` pra ter mais páginas — o JS (`flipbook.js`)
   detecta automaticamente quantas páginas existem.

## 4. Vídeos clicáveis

Cada item da galeria em `portfolio.html` tem:

```html
<div class="gallery-item" data-video-src="LINK_AQUI" data-video-type="iframe">
```

- **YouTube/Vimeo**: use o link de "embed" (ex:
  `https://www.youtube.com/embed/ID_DO_VIDEO`) com `data-video-type="iframe"`.
- **Arquivo de vídeo próprio (.mp4)**: coloque o arquivo em `assets/videos/` e
  use `data-video-type="video"`.
- Instagram/TikTok não permitem embed direto de forma simples — o mais fácil
  é baixar o vídeo (com permissão/seu próprio conteúdo) e usar como `.mp4`,
  ou linkar para o post original em vez de abrir no modal.

## 5. Cores e fontes

Tudo fica em `css/style.css`, no topo, dentro de `:root` (modo claro) e
`[data-theme="dark"]` (modo escuro):

```css
--bg: #F8F5F1;      /* fundo */
--surface: #E9DFD4; /* cards, fundos secundários */
--ink: #222222;     /* texto principal */
--brand: #5E4A3E;   /* marrom café — marca */
--accent: #B08D57;  /* dourado — detalhes e CTAs */
```

As fontes (Cormorant Garamond, Inter, Parisienne) vêm do Google Fonts via
`@import` no topo do CSS — não precisa instalar nada.

## 6. Modo claro/escuro

Por padrão o site segue o sistema operacional do visitante
(`prefers-color-scheme`). O botão de sol/lua no menu permite forçar
claro ou escuro manualmente (fica salvo no navegador da pessoa).

## 7. Publicar de graça

### Cloudflare Pages
1. Crie uma conta em [pages.cloudflare.com](https://pages.cloudflare.com).
2. "Create a project" → "Upload assets" (ou conecte um repositório do GitHub).
3. Arraste a pasta inteira do site (sem subir o `README.md` é opcional, tanto faz).
4. Não precisa configurar build command — é site estático puro.
5. Pronto: você recebe uma URL `.pages.dev`, com opção de conectar domínio próprio depois.

### GitHub Pages
1. Crie um repositório no GitHub e suba todos os arquivos.
2. Vá em **Settings → Pages**.
3. Em "Source", selecione a branch `main` e a pasta `/root`.
4. Salve — em alguns minutos o site fica no ar em `usuario.github.io/repositorio`.

## 8. SEO básico já incluso

- `<title>` e `<meta name="description">` únicos por página.
- `robots.txt` e `sitemap.xml` (troque `SEU-DOMINIO.com` pelo domínio real).
- HTML semântico (`header`, `main`, `footer`, hierarquia de `h1`/`h2`).
- Depois de publicar, cadastre o site no
  [Google Search Console](https://search.google.com/search-console) pra ele
  ser indexado mais rápido.
