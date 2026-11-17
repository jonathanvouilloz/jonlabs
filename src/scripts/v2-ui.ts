// Comportements partagés du design v2, branchés par attribut (aucun effet si l'attribut est absent).
// Directions validées au styleguide le 2026-11-17. Tout se coupe sous prefers-reduced-motion.
import { animate, stagger, splitText } from 'animejs';
import { terminal, laptop, slow, plug, relay, patch, padlock } from '@lucasmarkes/hairline';

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
  inView(el, () => animate(sp.chars, { y: ['110%', '0%'], opacity: [0, 1], duration: 700, delay: stagger(18), ease: 'out(4)' }), '0px');
});

// Titres de section : mots qui montent à l'entrée.
$$('[data-words]').forEach((el) => {
  if (reduce) return;
  const sp = splitText(el, { words: { wrap: 'clip' } });
  roomForDescenders(sp.words);
  sp.words.forEach((w: HTMLElement) => (w.style.transform = 'translateY(105%)'));
  inView(el, () => animate(sp.words, { y: ['105%', '0%'], duration: 800, delay: stagger(45), ease: 'out(4)' }));
});

// Paragraphe qui passe du gris au noir au fil du scroll.
$$('[data-reveal]').forEach((el) => {
  el.innerHTML = (el.textContent ?? '').trim().split(/\s+/).map((w) => `<span>${w}</span>`).join(' ');
  const spans = $$('span', el);
  const paint = () => {
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)));
    const n = Math.round(p * spans.length);
    spans.forEach((s, i) => s.classList.toggle('on', i < n));
  };
  addEventListener('scroll', paint, { passive: true }); paint();
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
const figures = { terminal, laptop, slow, plug, relay, patch, padlock } as const;
$$('[data-iso]').forEach((el) => {
  figures[el.dataset.iso as keyof typeof figures]?.(el, { theme: (el.dataset.theme as 'light' | 'dark') ?? 'light', play: !reduce, label: '' });
});
