/* ===== SHARED HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const nice = k => k.replace("_", "-");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const svg = p => `<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const ICON = {
  fb: svg('<path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>'),
  msg: svg('<path d="M12 2C6.48 2 2 6.04 2 11c0 2.8 1.4 5.3 3.6 6.9V22l3.3-1.8c1 .27 2.03.4 3.1.4 5.52 0 10-4.04 10-9S17.52 2 12 2z"/>'),
  ig: svg('<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>'),
  mail: svg('<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>'),
  theme: svg('<g class="sun"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></g><path class="moon" d="M21 14.5A9 9 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z"/>')
};

/* Image slot: shows the image if a URL is set, otherwise a placeholder */
function slot(src, emoji, label, i) {
  const inner = src
    ? `<img src="${src}" alt="${label}" loading="lazy">`
    : `<div class="ph"><b>${emoji}</b>${label}<br>image here</div>`;
  return `<div class="slot" style="--a:${G[i % 6][0]};--b:${G[i % 6][1]}">${inner}</div>`;
}

const LINK_FALLBACK = { instagram: "https://www.instagram.com/bigdreameventby.aki_ali" };

/* Fill [data-icon] with SVGs and [data-link] with URLs */
function initIcons() {
  $$("[data-icon]").forEach(el => el.insertAdjacentHTML("afterbegin", ICON[el.dataset.icon]));
  $$("[data-link]").forEach(a => {
    const url = LINKS[a.dataset.link] ?? LINK_FALLBACK[a.dataset.link];
    if (url) a.href = url; else a.hidden = true; /* hide buttons whose link is empty */
  });
}

/* ===== SMOOTH ROW SCROLLING (wheel, drag with a flick, arrow keys) =====
   step:true  -> moves one card at a time and always lands centred (snapping carousels)
   step:false -> free sideways scrolling with easing (thumbnails, tab strip)          */
const easeInOutCubic = k => k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
const easeOutCubic = k => 1 - Math.pow(1 - k, 3);

/* animate a row's scrollLeft with easing (snapping is paused while it moves) */
function glide(el, to, ms = 520, ease = easeInOutCubic) {
  cancelAnimationFrame(el._g);
  const from = el.scrollLeft, max = el.scrollWidth - el.clientWidth;
  to = Math.max(0, Math.min(max, to));
  if (Math.abs(to - from) < 1) { el.classList.remove("free"); return; }
  el.classList.add("free");
  const t0 = performance.now();
  const frame = t => {
    const k = Math.min((t - t0) / ms, 1);
    el.scrollLeft = from + (to - from) * ease(k);
    if (k < 1) el._g = requestAnimationFrame(frame); else el.classList.remove("free");
  };
  el._g = requestAnimationFrame(frame);
}

const cardCenter = (el, c) => c.offsetLeft + c.offsetWidth / 2 - el.clientWidth / 2;   /* scrollLeft that centres card c */
function nearestCard(el, at) {                                                          /* index of the card closest to scroll position */
  let best = 0, d = Infinity;
  [...el.children].forEach((c, i) => { const k = Math.abs(cardCenter(el, c) - at); if (k < d) { d = k; best = i; } });
  return best;
}

function stepRow(el, dir) {
  const cards = [...el.children]; if (!cards.length) return;
  const busy = performance.now() < (el._until || 0);
  const i = Math.max(0, Math.min(cards.length - 1, (busy ? el._idx : nearestCard(el, el.scrollLeft)) + dir));
  el._idx = i; el._until = performance.now() + 520;
  glide(el, cardCenter(el, cards[i]), 560, easeInOutCubic);
}

function rowScroll(el, { step = false } = {}) {
  el.classList.add("rs");
  let lock = 0, acc = 0, lastT = 0;

  el.addEventListener("wheel", e => {
    if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;          /* zoom / sideways trackpad: leave alone */
    const max = el.scrollWidth - el.clientWidth - 1;
    if ((el.scrollLeft <= 0 && e.deltaY < 0) || (el.scrollLeft >= max && e.deltaY > 0)) return; /* at the ends the page scrolls again */
    e.preventDefault();
    const now = performance.now();
    if (step) {
      if (now - lastT > 250) acc = 0;
      lastT = now;
      if (now < lock) return;
      acc += e.deltaY;
      if (Math.abs(acc) < 30) return;
      stepRow(el, acc > 0 ? 1 : -1);
      acc = 0; lock = now + 420;
    } else {                                                                     /* chain notches into one smooth glide */
      const base = now < (el._wUntil || 0) ? el._wTarget : el.scrollLeft;
      el._wTarget = Math.max(0, Math.min(el.scrollWidth - el.clientWidth, base + e.deltaY * 1.4));
      el._wUntil = now + 420;
      glide(el, el._wTarget, 480, easeOutCubic);
    }
  }, { passive: false });

  if (step) {
    el.tabIndex = 0;
    el.addEventListener("keydown", e => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); stepRow(el, e.key === "ArrowRight" ? 1 : -1); }
    });
  }

  /* click-and-drag with a mouse; letting go with a flick keeps it moving, then it settles */
  let down = false, sx = 0, sl = 0, moved = 0, vel = 0, lt = 0, ls = 0;
  el.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    cancelAnimationFrame(el._g);
    down = true; sx = e.clientX; sl = el.scrollLeft; moved = 0; vel = 0; lt = performance.now(); ls = el.scrollLeft;
    el.classList.add("free", "drag");
  });
  addEventListener("pointermove", e => {
    if (!down) return;
    moved = Math.max(moved, Math.abs(e.clientX - sx));
    el.scrollLeft = sl - (e.clientX - sx);
    const now = performance.now(), dt = now - lt;
    if (dt > 0) { vel = .7 * vel + .3 * ((el.scrollLeft - ls) / dt); lt = now; ls = el.scrollLeft; }   /* px per ms */
  });
  addEventListener("pointerup", () => {
    if (!down) return;
    down = false; el.classList.remove("drag");
    if (performance.now() - lt > 90) vel = 0;                                    /* paused before letting go: no fling */
    const projected = el.scrollLeft + vel * 280;
    if (step) {
      const cards = [...el.children], i = nearestCard(el, projected);
      el._idx = i; el._until = performance.now() + 560;
      glide(el, cardCenter(el, cards[i]), 560, easeOutCubic);
    } else glide(el, projected, 700, easeOutCubic);
  });
  el.addEventListener("click", e => { if (moved > 6) { e.stopPropagation(); moved = 0; } }, true); /* a drag is not a click */
}