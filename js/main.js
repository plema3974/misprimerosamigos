// Mis Primeros Amigos · interacciones básicas
(function () {
  const header = document.querySelector('.header');
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  // Menú hamburguesa (móvil / tablet)
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // Sombra en la cabecera al hacer scroll
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Animación de aparición
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('is-visible'));
  }

  // Enlace activo del menú según la sección visible
  const links = [...document.querySelectorAll('.nav__list a')];
  const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => so.observe(s));
  }

  // Lightbox: muestra todas las fotos de la figura y permite deslizarlas
  const lb = document.getElementById('lightbox');
  const lbTrack = lb.querySelector('.lightbox__track');
  const lbDots = lb.querySelector('.lightbox__dots');
  const lbCount = lb.querySelector('.lightbox__count');
  const lbPrev = lb.querySelector('.lightbox__btn--prev');
  const lbNext = lb.querySelector('.lightbox__btn--next');
  let lbIndex = 0, lbTotal = 0, lastFocus = null;
  const lbGo = (i, smooth = true) => {
    lbIndex = (i + lbTotal) % lbTotal;
    lbTrack.scrollTo({ left: lbIndex * lbTrack.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
    lbMark();
  };
  const lbMark = () => {
    lbCount.textContent = (lbIndex + 1) + ' / ' + lbTotal;
    [...lbDots.children].forEach((d, i) => d.setAttribute('aria-selected', i === lbIndex));
  };
  const open = (sources, start) => {
    lastFocus = document.activeElement;
    lbTrack.innerHTML = ''; lbDots.innerHTML = '';
    lbTotal = sources.length;
    sources.forEach(({ src, alt }, i) => {
      const s = document.createElement('div'); s.className = 'lightbox__slide';
      const im = document.createElement('img'); im.src = src; im.alt = alt; s.appendChild(im); lbTrack.appendChild(s);
      const d = document.createElement('button'); d.className = 'carousel__dot'; d.setAttribute('aria-label', 'Ir a la foto ' + (i + 1));
      d.addEventListener('click', () => lbGo(i)); lbDots.appendChild(d);
    });
    lbPrev.hidden = lbNext.hidden = lbTotal < 2; lbDots.hidden = lbTotal < 2;
    lb.hidden = false; document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => lbGo(start, false));
    lb.querySelector('.lightbox__close').focus();
  };
  const close = () => { lb.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); };
  document.querySelectorAll('.gallery__item, .carousel__slide').forEach(btn => {
    btn.addEventListener('click', () => {
      const car = btn.closest('.carousel');
      const group = car ? [...car.querySelectorAll('.carousel__slide')] : [btn];
      open(group.map(b => ({ src: b.dataset.full, alt: b.querySelector('img').alt })), group.indexOf(btn));
    });
  });
  lbPrev.addEventListener('click', () => lbGo(lbIndex - 1));
  lbNext.addEventListener('click', () => lbGo(lbIndex + 1));
  lbTrack.addEventListener('scroll', () => {
    const i = Math.round(lbTrack.scrollLeft / lbTrack.clientWidth);
    if (i !== lbIndex) { lbIndex = i; lbMark(); }
  }, { passive: true });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox__slide') || e.target.classList.contains('lightbox__close')) close(); });
  window.addEventListener('resize', () => { if (!lb.hidden) lbGo(lbIndex, false); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') lbGo(lbIndex + 1);
    if (e.key === 'ArrowLeft') lbGo(lbIndex - 1);
  });

  // Carrusel horizontal de la galería
  document.querySelectorAll('.carousel').forEach(car => {
    const track = car.querySelector('.carousel__track');
    const slides = [...track.children];
    const dotsBox = car.querySelector('.carousel__dots');
    const dots = slides.map((_, i) => {
      const d = document.createElement('button');
      d.className = 'carousel__dot'; d.setAttribute('role', 'tab');
      d.setAttribute('aria-label', 'Ir a la foto ' + (i + 1));
      d.addEventListener('click', () => go(i));
      dotsBox.appendChild(d); return d;
    });
    let index = 0, timer;
    const go = i => { index = (i + slides.length) % slides.length; track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' }); };
    const mark = () => dots.forEach((d, i) => d.setAttribute('aria-selected', i === index));
    track.addEventListener('scroll', () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== index) { index = i; }
      mark();
    }, { passive: true });
    car.querySelector('.carousel__btn--prev').addEventListener('click', () => go(index - 1));
    car.querySelector('.carousel__btn--next').addEventListener('click', () => go(index + 1));
    track.addEventListener('keydown', e => { if (e.key === 'ArrowRight') go(index + 1); if (e.key === 'ArrowLeft') go(index - 1); });
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const play = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => { if (lb.hidden) go(index + 1); }, 4500); };
    const stop = () => clearInterval(timer);
    car.addEventListener('mouseenter', stop); car.addEventListener('mouseleave', play);
    car.addEventListener('focusin', stop); car.addEventListener('touchstart', stop, { passive: true });
    mark(); play();
  });
})();
