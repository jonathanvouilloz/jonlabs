// Interactions du styleguide v2 : récap des choix + un bloc par essai qui en a besoin.
// Anime.js (texte, compteurs), Zag vanilla (onglets, accordéon), canvas iso et Hairline repris de /v2.
// Piège Zag : spreadProps réécrit data-part ; on cible donc nos propres attributs (data-tab, data-acc).
import { animate, stagger, splitText, scrambleText } from 'animejs';
import * as tabs from '@zag-js/tabs';
import * as accordion from '@zag-js/accordion';
import { VanillaMachine, normalizeProps, spreadProps } from '@zag-js/vanilla';
import { terminal, laptop, slow, plug } from '@lucasmarkes/hairline';
import { isoNetwork } from './iso-network';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
const store = {
  get: (k: string) => { try { return JSON.parse(localStorage.getItem(k) ?? 'null'); } catch { return null; } },
  set: (k: string, v: unknown) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* navigation privée */ } },
};
// Joue fn une fois quand el entre dans l'écran.
const inView = (el: Element, fn: () => void, margin = '-15% 0px') =>
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); fn(); } }, { rootMargin: margin }).observe(el);

const toastEl = $('[data-toast]');
let toastT = 0;
function toast(msg: string) {
  if (!toastEl) return;
  toastEl.textContent = msg; toastEl.classList.add('on');
  clearTimeout(toastT); toastT = window.setTimeout(() => toastEl.classList.remove('on'), 2200);
}
async function copy(text: string) {
  try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
}

/* ---------- Récap des choix ---------- */
type Recap = { id: string; t: string; n: string; opts: [string, string, string][] };
const recap: Recap[] = JSON.parse($('#sg-recap-data')?.textContent ?? '[]');
const KEY = 'sg-v2-choices', NKEY = 'sg-v2-notes';
const choices: Record<string, string> = store.get(KEY) ?? {};
const notes = $<HTMLTextAreaElement>('[data-notes]');
if (notes) { notes.value = store.get(NKEY) ?? ''; notes.addEventListener('input', () => store.set(NKEY, notes.value)); }

function paintRecap() {
  for (const r of recap) {
    const v = choices[r.id];
    const cell = $(`[data-recap="${r.id}"] [data-recap-v]`);
    const opt = r.opts.find((o) => o[0] === v);
    if (cell) { cell.textContent = opt ? `${opt[0]} · ${opt[1]}` : '—'; cell.classList.toggle('on', !!opt); }
    $(`[data-toc="${r.id}"]`)?.classList.toggle('is-done', !!opt);
    const input = $<HTMLInputElement>(`input[name="${r.id}"][value="${v}"]`);
    if (input) input.checked = true;
  }
  const c = $('[data-count]'); if (c) c.textContent = String(Object.keys(choices).filter((k) => recap.some((r) => r.id === k)).length);
}
document.addEventListener('change', (e) => {
  const t = e.target as HTMLInputElement;
  if (t.matches('.sg-pick input')) { choices[t.name] = t.value; store.set(KEY, choices); paintRecap(); }
});
$('[data-copy-recap]')?.addEventListener('click', async () => {
  const lines = recap.map((r) => { const o = r.opts.find((x) => x[0] === choices[r.id]); return `${r.n} ${r.t} : ${o ? `${o[0]} (${o[1]})` : 'pas de choix'}`; });
  const txt = `Styleguide v2, mes choix\n${lines.join('\n')}${notes?.value.trim() ? `\n\nNotes :\n${notes.value.trim()}` : ''}`;
  toast((await copy(txt)) ? 'Choix copiés' : 'Copie impossible, sélectionne le récap à la main');
});
$('[data-reset]')?.addEventListener('click', () => {
  for (const k of Object.keys(choices)) delete choices[k];
  store.set(KEY, choices); $$<HTMLInputElement>('.sg-pick input').forEach((i) => (i.checked = false)); paintRecap();
});
paintRecap();

// Sommaire : section courante surlignée.
const tocObs = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) {
    $$('[data-toc]').forEach((a) => a.classList.toggle('is-on', a.dataset.toc === e.target.id));
  }
}, { rootMargin: '-45% 0px -50% 0px' });
$$('.sg-sec').forEach((s) => tocObs.observe(s));

/* ---------- Fondations : longueur des pistes d'easing ---------- */
$$('.sg-track').forEach((t) => t.style.setProperty('--tw', `${t.clientWidth - 52}px`));

/* ---------- Boutons B : roulement des lettres ---------- */
$$('[data-roll]').forEach((el) => {
  const txt = el.textContent ?? '';
  el.setAttribute('aria-label', txt);
  el.innerHTML = [...txt].map((c, i) => `<span class="ch" aria-hidden="true" data-c="${c}" style="--i:${i}">${c}</span>`).join('');
});

/* ---------- Liens C : brouillage au survol ---------- */
$$('[data-scramble]').forEach((a) => {
  const txt = a.textContent ?? '';
  a.addEventListener('pointerenter', () => {
    if (reduce) return;
    animate(a, { innerHTML: scrambleText({ text: txt, chars: 'A-Z0-9_', revealRate: 40, settleDuration: 220 }) });
  });
});

/* ---------- Pastille glissante (nav B, dock B) ---------- */
$$('[data-pill]').forEach((wrap) => {
  const bg = $('[data-pill-bg]', wrap)!;
  const links = $$<HTMLAnchorElement>(':scope > a:not(.v2-dock-cta)', wrap);
  const move = (a: HTMLElement | undefined, show = true) => {
    if (!a) { bg.style.opacity = '0'; return; }
    bg.style.width = `${a.offsetWidth}px`; bg.style.transform = `translateX(${a.offsetLeft}px)`; bg.style.opacity = show ? '1' : '0';
  };
  const current = links.find((a) => a.hasAttribute('aria-current'));
  links.forEach((a) => a.addEventListener('pointerenter', () => move(a)));
  wrap.addEventListener('pointerleave', () => move(current, !!current));
  requestAnimationFrame(() => move(current, !!current));
});

/* ---------- Heure de Genève (nav C, footer C) ---------- */
const clocks = $$('[data-clock]');
const tick = () => { const t = new Date().toLocaleTimeString('fr-CH', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit' }); clocks.forEach((c) => (c.textContent = t)); };
if (clocks.length) { tick(); setInterval(tick, 15000); }

/* ---------- Scroll : progression du dock C, frise du process B, gris→noir des titres C ---------- */
const ring = $('[data-progress]');
const timeline = $('[data-timeline]');
const tlItems = timeline ? $$('li', timeline) : [];
const reveal = $('[data-reveal]');
let revealSpans: HTMLElement[] = [];
if (reveal) {
  reveal.innerHTML = (reveal.textContent ?? '').trim().split(/\s+/).map((w) => `<span>${w}</span>`).join(' ');
  revealSpans = $$('span', reveal);
}
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  ring?.style.setProperty('--p', String(Math.min(1, scrollY / max)));
  if (timeline) {
    const r = timeline.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.8 - r.top) / (r.height + innerHeight * 0.3)));
    timeline.style.setProperty('--pr', String(p));
    tlItems.forEach((li, i) => li.classList.toggle('on', p >= i / Math.max(1, tlItems.length - 1) - 0.001));
  }
  if (reveal) {
    const r = reveal.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35)));
    const n = Math.round(p * revealSpans.length);
    revealSpans.forEach((s, i) => s.classList.toggle('on', reduce || i < n));
  }
}
addEventListener('scroll', onScroll, { passive: true }); onScroll();

/* ---------- Hero A : réseau iso ---------- */
const iso = $<HTMLCanvasElement>('[data-iso-bg]');
if (iso) isoNetwork(iso);

/* ---------- Hero B : titre lettre à lettre ---------- */
const chars = $('[data-chars]');
if (chars && !reduce) {
  const sp = splitText(chars, { words: { wrap: 'clip' }, chars: true });
  sp.chars.forEach((c: HTMLElement) => (c.style.opacity = '0'));
  const play = () => animate(sp.chars, { y: ['110%', '0%'], opacity: [0, 1], duration: 700, delay: stagger(18), ease: 'out(4)' });
  inView(chars, play);
}

/* ---------- Hero C : console d'agent, en boucle ---------- */
const consoleEl = $('[data-console]');
if (consoleEl) {
  const lines = $$('li', consoleEl);
  let k = 0, timer = 0;
  const step = () => {
    if (k < lines.length) { lines[k++].classList.add('on'); timer = window.setTimeout(step, 900); }
    else timer = window.setTimeout(() => { lines.forEach((l) => l.classList.remove('on')); k = 0; step(); }, 4200);
  };
  if (reduce) lines.forEach((l) => l.classList.add('on'));
  else new IntersectionObserver(([e]) => { clearTimeout(timer); if (e.isIntersecting) step(); }).observe(consoleEl);
}

/* ---------- Fond A et bento B : lumière sous le pointeur ---------- */
$$('[data-spot]').forEach((el) => el.addEventListener('pointermove', (e) => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`);
}));
$$('[data-spotlight]').forEach((grid) => {
  const cells = $$('.v2-cell', grid);
  grid.addEventListener('pointermove', (e) => cells.forEach((c) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--x', `${e.clientX - r.left}px`); c.style.setProperty('--y', `${e.clientY - r.top}px`);
  }));
  grid.addEventListener('pointerleave', () => cells.forEach((c) => { c.style.removeProperty('--x'); c.style.removeProperty('--y'); }));
});

/* ---------- Titres A (mots) et B (décodage), avec « Rejouer » ---------- */
const words = $('[data-words]');
let playWords = () => {};
if (words) {
  const sp = splitText(words, { words: { wrap: 'clip' } });
  playWords = () => { if (!reduce) animate(sp.words, { y: ['105%', '0%'], duration: 800, delay: stagger(45), ease: 'out(4)' }); };
  inView(words, playWords);
}
const decode = $('[data-decode]');
const decodeTxt = decode?.textContent ?? '';
const playDecode = () => { if (decode && !reduce) animate(decode, { innerHTML: scrambleText({ text: decodeTxt, chars: 'a-z_/<>', revealRate: 28, cursor: '_' }) }); };
if (decode) inView(decode, playDecode);
$$('[data-replay]').forEach((b) => b.addEventListener('click', () => (b.dataset.replay === 'words' ? playWords() : playDecode())));

/* ---------- Cas C : l'image suit le curseur ---------- */
const follow = $('[data-follow]');
if (follow && matchMedia('(hover: hover)').matches) {
  const img = $<HTMLImageElement>('[data-follow-img]', follow)!;
  let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
  const loop = () => { x += (tx - x) * 0.16; y += (ty - y) * 0.16; img.style.transform = `translate(${x}px, ${y}px)`; raf = requestAnimationFrame(loop); };
  follow.addEventListener('pointermove', (e) => { const r = follow.getBoundingClientRect(); tx = e.clientX - r.left + 24; ty = e.clientY - r.top - 90; });
  $$<HTMLAnchorElement>('a[data-img]', follow).forEach((a) => a.addEventListener('pointerenter', () => { img.src = a.dataset.img!; img.classList.add('on'); }));
  follow.addEventListener('pointerenter', () => { if (!reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); } });
  follow.addEventListener('pointerleave', () => { img.classList.remove('on'); cancelAnimationFrame(raf); });
}

/* ---------- Bento A : figures Hairline ---------- */
const figures = { terminal, laptop, slow, plug } as const;
$$('[data-iso]').forEach((el) => {
  figures[el.dataset.iso as keyof typeof figures]?.(el, { theme: 'light', play: !reduce, label: '' });
});

/* ---------- Process C : onglets Zag ---------- */
const tabsRoot = $('[data-zag-tabs]');
if (tabsRoot) {
  const svc = new VanillaMachine(tabs.machine, { id: 'sg-process', defaultValue: 's0', orientation: matchMedia('(min-width: 901px)').matches ? 'vertical' : 'horizontal' });
  const render = () => {
    const api = tabs.connect(svc.service, normalizeProps);
    spreadProps(tabsRoot, api.getRootProps());
    spreadProps($('[data-tab="list"]', tabsRoot)!, api.getListProps());
    $$('[data-tab="trigger"]', tabsRoot).forEach((t) => spreadProps(t, api.getTriggerProps({ value: t.dataset.value! })));
    $$('[data-tab="content"]', tabsRoot).forEach((c) => spreadProps(c, api.getContentProps({ value: c.dataset.value! })));
  };
  svc.subscribe(render); svc.start(); render();
}

/* ---------- FAQ B : accordéon Zag ---------- */
const accRoot = $('[data-zag-accordion]');
if (accRoot) {
  const svc = new VanillaMachine(accordion.machine, { id: 'sg-faq', collapsible: true });
  const render = () => {
    const api = accordion.connect(svc.service, normalizeProps);
    spreadProps(accRoot, api.getRootProps());
    $$('[data-acc="item"]', accRoot).forEach((it) => {
      const value = it.dataset.value!;
      spreadProps(it, api.getItemProps({ value }));
      spreadProps($('[data-acc="trigger"]', it)!, api.getItemTriggerProps({ value }));
      spreadProps($('[data-acc="content"]', it)!, api.getItemContentProps({ value }));
    });
  };
  svc.subscribe(render); svc.start(); render();
}

/* ---------- FAQ C : index + panneau ---------- */
const qi = $('[data-qindex]');
if (qi) {
  const data: { q: string; a: string }[] = JSON.parse($('[data-q-data]', qi)?.textContent ?? '[]');
  const ans = $('[data-q-a]', qi)!, num = $('[data-q-n]', qi)!;
  const btns = $$<HTMLButtonElement>('[data-q]', qi);
  const select = (i: number) => {
    btns.forEach((b, k) => b.setAttribute('aria-selected', String(k === i)));
    num.textContent = `Question ${String(i + 1).padStart(2, '0')}`;
    ans.textContent = data[i].a; ans.classList.remove('swap'); void ans.offsetWidth; ans.classList.add('swap');
  };
  btns.forEach((b, i) => {
    b.addEventListener('click', () => select(i));
    b.addEventListener('keydown', (e) => {
      const d = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
      if (d) { e.preventDefault(); const n = (i + d + btns.length) % btns.length; btns[n].focus(); select(n); }
    });
  });
}

/* ---------- Preuves A : compteurs (partie numérique seulement) ---------- */
$$('[data-count-to]').forEach((el) => {
  const raw = el.dataset.countTo!;
  const m = raw.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!m || reduce) return;
  const [, pre, num, post] = m;
  const target = parseFloat(num.replace(',', '.'));
  const dec = num.includes('.') || num.includes(',') ? 1 : 0;
  const o = { v: 0 };
  el.textContent = `${pre}0${post}`;
  inView(el, () => animate(o, { v: target, duration: 1400, ease: 'out(3)', onUpdate: () => (el.textContent = `${pre}${o.v.toFixed(dec)}${post}`) }));
});

/* ---------- Preuves C : un repère à la fois, décodé ---------- */
const flap = $('[data-flap]');
if (flap) {
  const data: { value: string; label: string; client: string }[] = JSON.parse($('[data-flap-data]', flap)?.textContent ?? '[]');
  const v = $('[data-flap-v]', flap)!, l = $('[data-flap-l]', flap)!, c = $('[data-flap-client]', flap)!;
  const dots = $$('.xs-flap-dots i', flap);
  let i = 0, timer = 0;
  const show = () => {
    i = (i + 1) % data.length;
    const d = data[i];
    c.textContent = d.client; l.textContent = d.label;
    if (reduce) v.textContent = d.value;
    else animate(v, { innerHTML: scrambleText({ text: d.value, chars: '0-9', revealRate: 14, settleDuration: 380 }) });
    dots.forEach((dot, k) => dot.classList.toggle('on', k === i));
  };
  if (data.length > 1) new IntersectionObserver(([e]) => { clearInterval(timer); if (e.isIntersecting) timer = window.setInterval(show, 3200); }).observe(flap);
}

/* ---------- Contact B : copier l'adresse ---------- */
$$<HTMLButtonElement>('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
  const ok = await copy(b.dataset.copy!);
  const label = $('[data-copy-label]', b);
  if (ok) { b.classList.add('copied'); if (label) label.textContent = 'Copiée'; toast('Adresse copiée'); setTimeout(() => { b.classList.remove('copied'); if (label) label.textContent = 'Copier'; }, 2000); }
  else location.href = `mailto:${b.dataset.copy}`;
}));

/* ---------- Formulaires de démo ---------- */
$$<HTMLFormElement>('[data-demo-form]').forEach((f) => f.addEventListener('submit', (e) => { e.preventDefault(); toast('Démo : rien n\'est envoyé'); }));

/* ---------- Footer B : signature qui monte ; footer C : haut de page ---------- */
const word = $('[data-word]');
if (word && !reduce) {
  const sp = splitText(word, { chars: { wrap: 'clip' } });
  sp.chars.forEach((ch: HTMLElement) => (ch.style.transform = 'translateY(100%)'));
  inView(word, () => animate(sp.chars, { y: ['100%', '0%'], duration: 900, delay: stagger(40), ease: 'out(4)' }), '0px');
}
$$('[data-top-link]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); }));

// Les liens de démo ne naviguent pas.
$$<HTMLAnchorElement>('.sg-stage a[href="#"]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
