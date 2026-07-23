/* =========================================================
   CHIVANSKI STUDIO — script.js
   Theme, idioma (PT/EN), navegação mobile, reveals, vídeo modal, form
   ========================================================= */
(function(){
  'use strict';

  /* ---------------- Theme (light/dark, auto por padrão) ---------------- */
  const root = document.documentElement;
  const THEME_KEY = 'chivanski-theme';

  function applyTheme(theme){
    if(theme === 'light' || theme === 'dark'){
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme'); // auto -> segue prefers-color-scheme
    }
  }

  function getStoredTheme(){
    try { return localStorage.getItem(THEME_KEY); } catch(e){ return null; }
  }
  function storeTheme(v){
    try { localStorage.setItem(THEME_KEY, v); } catch(e){ /* ambiente sem storage: ok, só não persiste */ }
  }

  applyTheme(getStoredTheme() || 'auto');

  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const current = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      storeTheme(next);
    });
  });

  /* ---------------- Idioma PT/EN ---------------- */
  const LANG_KEY = 'chivanski-lang';

  function detectDefaultLang(){
    const stored = (function(){ try{ return localStorage.getItem(LANG_KEY);}catch(e){return null;} })();
    if(stored) return stored;
    return (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  function setLang(lang){
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-pt]').forEach(el=>{
      const val = el.dataset[lang] ;
      if(val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-pt-html]').forEach(el=>{
      const val = lang === 'pt' ? el.dataset.ptHtml : el.dataset.enHtml;
      if(val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-pt-placeholder]').forEach(el=>{
      const val = lang === 'pt' ? el.dataset.ptPlaceholder : el.dataset.enPlaceholder;
      if(val !== undefined) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('.lang-switch button').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang === lang);
    });

    try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
  }

  document.querySelectorAll('.lang-switch button').forEach(btn=>{
    btn.addEventListener('click', ()=> setLang(btn.dataset.lang));
  });

  setLang(detectDefaultLang());

  /* ---------------- Navegação mobile ---------------- */
  const burger = document.querySelector('[data-nav-burger]');
  const navToc = document.querySelector('.nav-toc');
  if(burger && navToc){
    burger.addEventListener('click', ()=>{
      navToc.classList.toggle('open');
    });
    navToc.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navToc.classList.remove('open')));
  }

  /* ---------------- Ano no rodapé ---------------- */
  document.querySelectorAll('[data-year]').forEach(el=>{
    el.textContent = new Date().getFullYear();
  });

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:.15, rootMargin:'0px 0px -60px 0px' });
    revealEls.forEach(el=> io.observe(el));
  } else {
    revealEls.forEach(el=> el.classList.add('is-visible'));
  }

  /* ---------------- Barras (media kit) animadas ---------------- */
  const bars = document.querySelectorAll('.bar-fill');
  if('IntersectionObserver' in window && bars.length){
    const ioBar = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.style.width = entry.target.dataset.value + '%';
          ioBar.unobserve(entry.target);
        }
      });
    }, { threshold:.4 });
    bars.forEach(b=> ioBar.observe(b));
  }

  /* ---------------- Modal de vídeo ---------------- */
  const modal = document.querySelector('[data-video-modal]');
  if(modal){
    const modalInner = modal.querySelector('.modal-inner');
    document.querySelectorAll('[data-video-src]').forEach(item=>{
      item.addEventListener('click', ()=>{
        const src = item.getAttribute('data-video-src');
        const type = item.getAttribute('data-video-type') || 'iframe';
        modalInner.innerHTML = type === 'iframe'
          ? `<iframe src="${src}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="video"></iframe>`
          : `<video src="${src}" controls autoplay playsinline></video>`;
        modal.classList.add('is-open');
      });
    });
    modal.addEventListener('click', (e)=>{
      if(e.target === modal || e.target.closest('[data-video-close]')){
        modal.classList.remove('is-open');
        modalInner.innerHTML = '';
      }
    });
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape'){ modal.classList.remove('is-open'); modalInner.innerHTML=''; }
    });
  }

  /* ---------------- Formulário de contato ---------------- */
  const form = document.querySelector('[data-contact-form]');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const btn = form.querySelector('button[type="submit"]');
      const lang = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
      const endpoint = form.getAttribute('action');

      const isPlaceholder = !endpoint || endpoint.includes('SEU_FORM_ID');
      if(isPlaceholder){
        status.textContent = lang === 'pt'
          ? 'Formulário ainda não conectado — veja o README para ativar o envio (Formspree/Web3Forms).'
          : 'Form not connected yet — see the README to enable sending (Formspree/Web3Forms).';
        return;
      }

      btn.disabled = true;
      const original = btn.textContent;
      btn.textContent = lang === 'pt' ? 'Enviando...' : 'Sending...';

      try{
        const res = await fetch(endpoint, {
          method:'POST',
          headers:{ 'Accept':'application/json' },
          body:new FormData(form)
        });
        if(res.ok){
          status.textContent = lang === 'pt' ? 'Mensagem enviada! Retorno em breve. ✨' : 'Message sent! I\'ll reply soon. ✨';
          form.reset();
        } else {
          status.textContent = lang === 'pt' ? 'Algo deu errado. Tente novamente ou envie um e-mail direto.' : 'Something went wrong. Try again or email me directly.';
        }
      } catch(err){
        status.textContent = lang === 'pt' ? 'Sem conexão. Tente novamente em instantes.' : 'No connection. Please try again shortly.';
      } finally {
        btn.disabled = false;
        btn.textContent = original;
      }
    });
  }

})();
