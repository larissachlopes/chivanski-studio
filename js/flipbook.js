/* =========================================================
   CHIVANSKI STUDIO — flipbook.js
   Efeito de revista folheável para o portfólio
   ========================================================= */
(function(){
  'use strict';
  const stage = document.querySelector('[data-flipbook]');
  if(!stage) return;

  const pages = Array.from(stage.querySelectorAll('.flip-page'));
  const prevBtn = document.querySelector('[data-flip-prev]');
  const nextBtn = document.querySelector('[data-flip-next]');
  const resetBtn = document.querySelector('[data-flip-reset]');
  const indexLabel = document.querySelector('[data-flip-index]');
  let current = 0; // número de páginas já viradas (0 = capa fechada)

  // z-index em pilha decrescente pra virada realista
  function layout(){
    pages.forEach((p, i)=>{
      p.style.zIndex = pages.length - i;
      p.classList.toggle('turned', i < current);
    });
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === pages.length;
    if(resetBtn) resetBtn.disabled = current === 0;
    if(indexLabel){
      indexLabel.textContent = current === 0
        ? '—'
        : `${current} / ${pages.length}`;
    }
  }

  function next(){ if(current < pages.length){ current++; layout(); } }
  function prev(){ if(current > 0){ current--; layout(); } }
  function reset(){ current = 0; layout(); }

  nextBtn && nextBtn.addEventListener('click', next);
  prevBtn && prevBtn.addEventListener('click', prev);
  resetBtn && resetBtn.addEventListener('click', reset);

  stage.setAttribute('tabindex','0');
  stage.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight') next();
    if(e.key === 'ArrowLeft') prev();
  });

  // swipe no mobile
  let touchX = null;
  stage.addEventListener('touchstart', (e)=>{ touchX = e.touches[0].clientX; }, {passive:true});
  stage.addEventListener('touchend', (e)=>{
    if(touchX === null) return;
    const delta = e.changedTouches[0].clientX - touchX;
    if(Math.abs(delta) > 40){ delta < 0 ? next() : prev(); }
    touchX = null;
  }, {passive:true});

  layout();
})();
