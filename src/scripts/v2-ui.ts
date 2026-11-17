// Comportements partagés du design v2, branchés par attribut (aucun effet si l'attribut est absent).
// Directions validées au styleguide le 2026-11-17. Tout se coupe sous prefers-reduced-motion.
import { animate, stagger, splitText } from 'animejs';
import { terminal, laptop, slow, plug, relay, patch, padlock, phone } from '@lucasmarkes/hairline';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
// Joue fn une fois quand el entre dans l'écran.
const inView = (el: Element, fn: () => void, margin = '-15% 0px') =>
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); fn(); } }, { rootMargin: margin }).observe(el);

// Boutons : lettres qui roulent au survol. Le libellé reste lisible par les lecteurs d'écran.
if (!reduce) $$('[data-roll]').forEach((el) => {
  const txt = el.textContent ?? '';
  el.setAttribute('aria-label', txt);
  el.innerHTML = [...txt].map((c, i) => `<span class="ch" aria-hidden="true" data-c="${c}" style="--i:${i}">${c}</span>`).join('');
});

// Nav et dock : pastille qui suit le lien survolé, revient sur la page courante.
$$('[data-pill]').forEach((wrap) => {
  const bg = wrap.querySelector<HTMLElement>('[data-pill-bg]');
  if (!bg) return;
  const links = $$<HTMLAnchorElement>(':scope > a:not(.v2-dock-cta), :scope > .v2-mega-item > a', wrap);
  const current = links.find((a) => a.hasAttribute('aria-current'));
  const move = (a?: HTMLElement) => {
    if (!a) { bg.style.opacity = '0'; return; }
    // Rect plutôt qu'offsetLeft : un lien de méga-menu est dans un parent positionné.
    bg.style.width = `${a.offsetWidth}px`; bg.style.transform = `translateX(${a.getBoundingClientRect().left - wrap.getBoundingClientRect().left - wrap.clientLeft}px)`; bg.style.opacity = '1';
  };
  links.forEach((a) => a.addEventListener('pointerenter', () => move(a)));
  wrap.addEventListener('pointerleave', () => move(current));
  requestAnimationFrame(() => move(current));
});

// Nav haute au départ, dock en bas une fois la nav haute sortie.
const top = document.querySelector<HTMLElement>('[data-top]');
const dock = document.querySelector<HTMLElement>('[data-dock]');
if (top && dock) {
  const onScroll = () => { const past = scrollY > 240; top.classList.toggle('is-hidden', past); dock.classList.toggle('is-shown', past); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
}

// Le masque d'un mot (overflow: clip) coupe les descendantes avec un interligne < 1 : on l'agrandit vers le bas sans décaler la ligne.
const roomForDescenders = (words: HTMLElement[]) => words.forEach((w) => { const m = w.parentElement!; m.style.paddingBottom = '.14em'; m.style.marginBottom = '-.14em'; });

// Titre du hero : lettres qui montent.
$$('[data-chars]').forEach((el) => {
  if (reduce) return;
  const sp = splitText(el, { words: { wrap: 'clip' }, chars: true });
  roomForDescenders(sp.words);
  sp.chars.forEach((c: HTMLElement) => (c.style.opacity = '0'));
  // Mot mis en avant (.v2-hl) : part en encre, balayé en teal une fois les lettres posées.
  const hl = sp.chars.filter((c: HTMLElement) => c.closest('.v2-hl'));
  const css = getComputedStyle(el);
  const ink = css.getPropertyValue('--ink').trim(), teal = css.getPropertyValue('--accent-strong').trim();
  hl.forEach((c: HTMLElement) => (c.style.color = ink));
  inView(el, () => {
    animate(sp.chars, { y: ['110%', '0%'], opacity: [0, 1], duration: 700, delay: stagger(18), ease: 'out(4)' });
    if (hl.length) animate(hl, { color: [ink, teal], duration: 450, delay: stagger(40, { start: sp.chars.length * 18 + 350 }), ease: 'out(3)' });
  }, '0px');
});

// Titres de section : mots qui montent à l'entrée.
$$('[data-words]').forEach((el) => {
  if (reduce) return;
  const sp = splitText(el, { words: { wrap: 'clip' } });
  roomForDescenders(sp.words);
  sp.words.forEach((w: HTMLElement) => (w.style.transform = 'translateY(105%)'));
  inView(el, () => animate(sp.words, { y: ['105%', '0%'], duration: 800, delay: stagger(45), ease: 'out(4)' }));
});

// Blocs qui montent à l'entrée : chaque enfant direct apparaît en décalé (études de cas, grilles de cartes, sections v2).
$$('[data-rise], .v2-hero-in, .v2-proofs, .v2-steps, .v2-cols3, .v2-bento, .v2-hub, .v2-photos, .v2-private, .v2-faq-list, .v2-contact, .v2-price, .v2-testi-list, .sv-n-res, .svc-grid').forEach((el) => {
  if (reduce) return;
  const kids = [...el.children] as HTMLElement[];
  kids.forEach((k) => { k.style.opacity = '0'; k.style.transform = 'translateY(28px)'; });
  inView(el, () => animate(kids, { opacity: [0, 1], y: [28, 0], duration: 900, delay: stagger(110), ease: 'out(4)' }), '-10% 0px');
});

// Paragraphe qui passe du gris au noir au fil du scroll.
$$('[data-reveal]').forEach((el) => {
  el.innerHTML = (el.textContent ?? '').trim().split(/\s+/).map((w) => `<span>${w}</span>`).join(' ');
  const spans = $$('span', el);
  let raf = 0;
  const paint = () => {
    raf = 0;
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)));
    const n = Math.round(p * spans.length);
    spans.forEach((s, i) => s.classList.toggle('on', i < n));
  };
  // N'écoute le scroll que pendant que le bloc est à l'écran, une peinture par frame.
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(paint); };
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) addEventListener('scroll', onScroll, { passive: true });
    else removeEventListener('scroll', onScroll);
    onScroll();
  }).observe(el);
});

// Fond en trame de points : le pointeur l'allume.
$$('[data-spot]').forEach((el) => el.addEventListener('pointermove', (e) => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`);
}));

// Compteurs : seule la partie numérique défile (« ≈ 50 pages », « 25+ »).
$$('[data-count-to]').forEach((el) => {
  const m = el.dataset.countTo!.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!m || reduce) return;
  const [, pre, num, post] = m;
  const target = parseFloat(num.replace(',', '.'));
  const dec = /[.,]/.test(num) ? 1 : 0;
  const o = { v: 0 };
  el.textContent = `${pre}0${post}`;
  inView(el, () => animate(o, { v: target, duration: 1400, ease: 'out(3)', onUpdate: () => (el.textContent = `${pre}${o.v.toFixed(dec)}${post}`) }));
});

// Heure de Genève (barre d'état du footer).
const clocks = $$('[data-clock]');
const tick = () => { const t = new Date().toLocaleTimeString('fr-CH', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit' }); clocks.forEach((c) => (c.textContent = t)); };
if (clocks.length) { tick(); setInterval(tick, 15000); }
$$('[data-top-link]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); }));

// Témoignages : un bouton de la liste affiche sa citation.
$$('[data-testi]').forEach((wrap) => {
  const btns = $$<HTMLButtonElement>('button[aria-controls]', wrap);
  btns.forEach((b) => b.addEventListener('click', () => btns.forEach((o) => {
    const on = o === b;
    o.setAttribute('aria-pressed', String(on));
    document.getElementById(o.getAttribute('aria-controls')!)!.hidden = !on;
  })));
});

// Figures isométriques Hairline.
const figures = { terminal, laptop, slow, plug, relay, patch, padlock, phone } as const;
$$('[data-iso]').forEach((el) => {
  figures[el.dataset.iso as keyof typeof figures]?.(el, { theme: (el.dataset.theme as 'light' | 'dark') ?? 'light', play: !reduce, label: '' });
});

// Cal.com : un seul chargeur pour l'agenda inline (#cal-inline) et la fenêtre « Discuter de mon projet » ([data-cal-popup]).
const CAL_LINK = 'jonathan-vouilloz/appel-de-bienvenue';
function cal() {
  const w = window as any;
  if (!w.Cal) {
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = C.document;
      C.Cal = C.Cal || function (...ar: any[]) {
        const c = C.Cal;
        if (!c.loaded) { c.ns = {}; c.q = c.q || []; d.head.appendChild(d.createElement('script')).src = A; c.loaded = true; }
        if (ar[0] === L) {
          const api: any = function (...a: any[]) { p(api, a); };
          const ns = ar[1]; api.q = api.q || [];
          if (typeof ns === 'string') { c.ns[ns] = c.ns[ns] || api; p(c.ns[ns], ar); p(c, ['initNamespace', ns]); } else p(c, ar);
          return;
        }
        p(c, ar);
      };
    })(w, 'https://app.cal.com/embed/embed.js', 'init');
    w.Cal('init', 'rdv', { origin: 'https://cal.com' });
    w.Cal.ns.rdv('ui', { theme: 'light', hideEventTypeDetails: false });
  }
  return w.Cal.ns.rdv;
}
const calInline = document.getElementById('cal-inline');
if (calInline) new IntersectionObserver(([e], o) => {
  if (!e.isIntersecting) return;
  o.disconnect();
  cal()('inline', { elementOrSelector: '#cal-inline', calLink: CAL_LINK, layout: 'month_view' });
}, { rootMargin: '400px' }).observe(calInline);
// Le lien garde /contact#agenda en repli (sans JS) ; avec JS, l'agenda s'ouvre en fenêtre sur place.
// Préchargement dès l'intention (survol, toucher) : embed.js et la page de réservation sont prêts avant le clic.
let calWarm = false;
const warmCal = () => { if (calWarm) return; calWarm = true; cal()('preload', { calLink: CAL_LINK }); };
const menu = document.getElementById('v2-menu');
$$<HTMLAnchorElement>('[data-cal-popup]').forEach((a) => {
  a.addEventListener('pointerenter', warmCal, { once: true });
  a.addEventListener('touchstart', warmCal, { once: true, passive: true });
  a.addEventListener('focus', warmCal, { once: true });
  a.addEventListener('click', (ev) => {
    ev.preventDefault();
    cal()('modal', { calLink: CAL_LINK, config: { layout: 'month_view' } });
  });
});

// Menu mobile : un lien suivi ferme le panneau (sinon il reste au-dessus d'une ancre de la même page).
menu?.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) menu.hidePopover(); });
