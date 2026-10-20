/* ===== GALLERY: two rows that loop forever. Drag or swipe them either way; they keep gliding on their own. ===== */
function loopRow(track, dir, speed) {
  const box = track.parentElement;                 /* the .mq window */
  let x = 0, v = 0, half = 0, drag = false, hover = false, vis = true, lx = 0, lt = 0, last = performance.now();
  const measure = () => { half = track.scrollWidth / 2; };   /* content is doubled, so one loop = half */
  measure(); addEventListener("resize", measure);
  new IntersectionObserver(es => { vis = es[0].isIntersecting; }).observe(box);

  box.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") hover = true; });   /* pause while hovering */
  box.addEventListener("pointerleave", () => { hover = false; });
  box.addEventListener("pointerdown", e => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    drag = true; v = 0; lx = e.clientX; lt = performance.now();
    box.classList.add("drag"); box.setPointerCapture(e.pointerId);
  });
  box.addEventListener("pointermove", e => {
    if (!drag) return;
    const now = performance.now(), dx = e.clientX - lx;
    x += dx;
    v = .8 * v + .2 * (dx / Math.max((now - lt) / 1000, .008));                                  /* smoothed speed, px/s */
    lx = e.clientX; lt = now;
  });
  const end = () => {
    if (!drag) return;
    drag = false; box.classList.remove("drag");
    v = Math.max(-2500, Math.min(2500, v));
    if (performance.now() - lt > 80) v = 0;                                                      /* paused before letting go: no fling */
  };
  box.addEventListener("pointerup", end);
  box.addEventListener("pointercancel", end);
  box.addEventListener("wheel", e => {                                                           /* sideways trackpad / shift+wheel */
    const dx = e.shiftKey ? e.deltaY : e.deltaX;
    if (dx && (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY))) { e.preventDefault(); x -= dx; }
  }, { passive: false });

  const tick = t => {
    const dt = Math.min((t - last) / 1000, .05); last = t;
    if (!drag) {
      if (Math.abs(v) > 12) { x += v * dt; v *= Math.pow(.05, dt); }                            /* fling, slowing down */
      else { v = 0; if (!hover) x += dir * speed * dt * (reduced ? .5 : 1); }                             /* idle glide */
    }
    if (half) { x %= half; if (x > 0) x -= half; }                                               /* wrap = endless loop */
    if (vis) track.style.transform = `translate3d(${x}px,0,0)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function marquee(id, offset, dir) {
  const html = Array.from({ length: 6 }, (_, i) => slot(GALLERY[(i + offset) % 6], "📷", "Event photo " + (((i + offset) % 6) + 1), i + offset)).join("");
  $(id).innerHTML = html + html;                   /* doubled for the seamless loop */
  loopRow($(id), dir, 38);
}
function initGallery() { marquee("#m1", 0, -1); marquee("#m2", 3, 1); }