/* ===== HERO: photos change by themselves on a timer ===== */
function initHero() {
  const n = HERO_IMG.length || 4, slides = $("#slides");     /* one slide per photo in data.js */
  slides.innerHTML = Array.from({ length: n }, (_, i) =>
    `<div class="slide${i ? "" : " on"}">${slot(HERO_IMG[i], "", "Hero image " + (i + 1), i)}</div>`).join("");
  $("#dots").innerHTML = Array.from({ length: n }, (_, i) =>
    `<button class="${i ? "" : "on"}" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join("");

  const secs = typeof HERO_SECONDS === "number" ? HERO_SECONDS : 6;   /* set in data.js */
  const bar = $(".hero-timer i");
  let cur = 0, timer, anim;

  /* (re)start the countdown for the photo on screen */
  function schedule() {
    clearTimeout(timer);
    if (anim) anim.cancel();
    if (bar) anim = bar.animate([{ width: "0%" }, { width: "100%" }], { duration: secs * 1000, easing: "linear", fill: "forwards" });
    if (n > 1) timer = setTimeout(() => go(cur + 1), secs * 1000);
  }
  function go(k) {
    cur = (k + n) % n;
    const all = $$(".slide"), old = $(".slide.on"), next = all[cur];
    if (old && old !== next) {                         /* previous photo fades away on top of the new one */
      all.forEach(s => s.classList.remove("prev"));
      old.classList.remove("on"); old.classList.add("prev");
      clearTimeout(go.t);
      go.t = setTimeout(() => old.classList.remove("prev"), (parseFloat(getComputedStyle($(".hero")).getPropertyValue("--fade")) || 1.8) * 1000);
    }
    next.classList.add("on");
    $$("#dots button").forEach((b, j) => b.classList.toggle("on", j === cur));
    schedule();
  }
  $("#dots").onclick = e => { const b = e.target.closest("button"); if (b) go(+b.dataset.i); };
  schedule();

  /* floating gold sparkles */
  $("#spark").innerHTML = Array.from({ length: 18 }, () => {
    const s = 6 + Math.random() * 14;
    return `<i style="left:${Math.random() * 100}%;width:${s}px;height:${s}px;animation-duration:${7 + Math.random() * 8}s;animation-delay:${-Math.random() * 12}s"></i>`;
  }).join("");

  /* gentle parallax (skipped for people who asked for less motion) */
  if (!reduced) addEventListener("scroll", () => {
    if (scrollY < innerHeight) slides.style.transform = `translateY(${scrollY * .25}px)`;
  }, { passive: true });
}