// Fond du hero : grille isométrique où des impulsions circulent de nœud en nœud
// (lecture visuelle : des données qui traversent un système). Canvas 2D, sans dépendance.
// Pause hors écran, statique si prefers-reduced-motion.

type Pulse = { i: number; j: number; di: number; dj: number; t: number; steps: number; trail: [number, number][] };

export function isoNetwork(canvas: HTMLCanvasElement, opts = { spacing: 46, accent: '0,190,143', line: '20,22,26' }) {
  const ctx = canvas.getContext('2d')!;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const S = opts.spacing;
  const ux = Math.cos(Math.PI / 6) * S, uy = Math.sin(Math.PI / 6) * S;
  let w = 0, h = 0, ox = 0, oy = 0, range = 0;
  let nodes: { i: number; j: number; glow: number }[] = [];
  const pulses: Pulse[] = [];
  const mouse = { x: -9999, y: -9999 };
  let running = false, raf = 0;

  // Repère iso : (i, j) -> pixels. Les lignes à i constant suivent v, à j constant suivent u.
  const P = (i: number, j: number): [number, number] => [ox + (i - j) * ux, oy + (i + j) * uy];

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ox = w / 2; oy = h / 2;
    range = Math.ceil(Math.max(w / ux, h / uy) / 2) + 2;
    // Nœuds répartis sur une couronne autour du texte (le centre reste lisible).
    nodes = [];
    for (let n = 0, guard = 0; n < 14 && guard < 500; guard++) {
      const i = Math.round((Math.random() * 2 - 1) * range * 0.75);
      const j = Math.round((Math.random() * 2 - 1) * range * 0.75);
      const [x, y] = P(i, j);
      const dx = (x - w / 2) / (w * 0.5), dy = (y - h / 2) / (h * 0.5);
      const d = Math.hypot(dx, dy);
      if (x < 20 || x > w - 20 || y < 20 || y > h - 20 || d < 0.75) continue;
      if (nodes.some((m) => Math.abs(m.i - i) + Math.abs(m.j - j) < 3)) continue;
      nodes.push({ i, j, glow: 0 }); n++;
    }
  }

  function spawn() {
    const n = nodes[(Math.random() * nodes.length) | 0];
    if (!n) return;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const [di, dj] = dirs[(Math.random() * 4) | 0];
    pulses.push({ i: n.i, j: n.j, di, dj, t: 0, steps: 6 + ((Math.random() * 10) | 0), trail: [] });
  }

  function lattice(color: string | CanvasGradient) {
    ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.beginPath();
    for (let k = -range; k <= range; k++) {
      let [x1, y1] = P(k, -range), [x2, y2] = P(k, range); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      [x1, y1] = P(-range, k); [x2, y2] = P(range, k); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
    }
    ctx.stroke();
  }

  function cube(x: number, y: number, s: number, glow: number) {
    // Petit cube iso en traits fins, qui s'allume au passage d'une impulsion.
    const a = Math.cos(Math.PI / 6) * s, b = Math.sin(Math.PI / 6) * s;
    ctx.fillStyle = `rgba(255,255,255,1)`;
    ctx.strokeStyle = glow > 0.05 ? `rgba(${opts.accent},${0.45 + glow * 0.55})` : `rgba(${opts.line},0.35)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y - s); ctx.lineTo(x + a, y - s + b); ctx.lineTo(x + a, y + b); ctx.lineTo(x, y + s);
    ctx.lineTo(x - a, y + b); ctx.lineTo(x - a, y - s + b); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - a, y - s + b); ctx.lineTo(x, y); ctx.lineTo(x + a, y - s + b); ctx.moveTo(x, y); ctx.lineTo(x, y + s); ctx.stroke();
    if (glow > 0.05) {
      ctx.fillStyle = `rgba(${opts.accent},${glow * 0.18})`;
      ctx.beginPath(); ctx.moveTo(x, y - s); ctx.lineTo(x + a, y - s + b); ctx.lineTo(x, y); ctx.lineTo(x - a, y - s + b); ctx.closePath(); ctx.fill();
    }
  }

  let last = performance.now(), acc = 0;
  function frame(now: number) {
    const dt = Math.min(64, now - last); last = now;
    ctx.clearRect(0, 0, w, h);
    lattice(`rgba(${opts.line},0.07)`);

    // Lueur autour du pointeur : la grille passe en teal localement.
    if (mouse.x > -999) {
      ctx.save(); ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2); ctx.clip();
      const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 140);
      g.addColorStop(0, `rgba(${opts.accent},0.55)`); g.addColorStop(1, `rgba(${opts.accent},0)`);
      lattice(g); ctx.restore();
    }

    if (!reduce) {
      acc += dt;
      if (acc > 420 && pulses.length < 9) { spawn(); acc = 0; }
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += dt / 260;
        if (p.t >= 1) {
          p.trail.push([p.i, p.j]); if (p.trail.length > 4) p.trail.shift();
          p.i += p.di; p.j += p.dj; p.t = 0; p.steps--;
          const hit = nodes.find((n) => n.i === p.i && n.j === p.j); if (hit) hit.glow = 1;
          if (p.steps <= 0 || Math.abs(p.i) > range || Math.abs(p.j) > range) { pulses.splice(k, 1); continue; }
          if (Math.random() < 0.35) { const turn = p.di === 0 ? [[1, 0], [-1, 0]] : [[0, 1], [0, -1]]; [p.di, p.dj] = turn[(Math.random() * 2) | 0]; }
        }
        // Traînée : segments passés + segment courant, alpha décroissant.
        const pts = [...p.trail, [p.i, p.j] as [number, number]].map(([i, j]) => P(i, j));
        const [hx, hy] = P(p.i + p.di * p.t, p.j + p.dj * p.t);
        pts.push([hx, hy]);
        ctx.lineCap = 'round';
        for (let s = 1; s < pts.length; s++) {
          ctx.strokeStyle = `rgba(${opts.accent},${(s / pts.length) * 0.8})`; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.moveTo(pts[s - 1][0], pts[s - 1][1]); ctx.lineTo(pts[s][0], pts[s][1]); ctx.stroke();
        }
        ctx.fillStyle = `rgba(${opts.accent},1)`; ctx.beginPath(); ctx.arc(hx, hy, 2.4, 0, Math.PI * 2); ctx.fill();
      }
    }

    for (const n of nodes) { const [x, y] = P(n.i, n.j); cube(x, y, 11, n.glow); n.glow *= 0.97; }
    if (running) raf = requestAnimationFrame(frame);
  }

  const start = () => { if (!running) { running = true; last = performance.now(); raf = requestAnimationFrame(frame); } };
  const stop = () => { running = false; cancelAnimationFrame(raf); };

  resize();
  new ResizeObserver(() => { resize(); if (!running) frame(performance.now()); }).observe(canvas);
  const host = canvas.parentElement!;
  host.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  host.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  if (reduce) { for (let k = 0; k < 4; k++) nodes[k] && (nodes[k].glow = 0.6); frame(performance.now()); return; }
  new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop())).observe(canvas);
}
