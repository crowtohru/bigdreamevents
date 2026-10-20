/* ===== SERVICES CAROUSEL + CATEGORY TABS ===== */
let currentCat = "Celebrations";

function drawCards() {
  const track = $("#track");
  track.innerHTML = ALL.filter(x => x.c === currentCat).map((x, i) =>
    `<div class="cd" data-n="${x.n}">${slot(IMG[x.n + "|0"], x.e, x.n, i)}<div class="ov"><h3>${x.n}</h3></div><div class="in"><div class="p">${x.p}</div><span class="more">View package styles ›</span></div></div>`
  ).join("");
  track.scrollLeft = 0;
  applyCoverflow();
}

/* scale/fade cards by distance from center */
function applyCoverflow() {
  const t = $("#track"), mid = t.scrollLeft + t.clientWidth / 2;
  $$(".cd", t).forEach(c => {
    const d = Math.min(Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid) / t.clientWidth, .7);
    c.style.transform = `scale(${1 - d * .28})`;
    c.style.opacity = 1 - d * .6;
  });
}

function initCarousel() {
  const track = $("#track");
  $("#chips").innerHTML = Object.keys(D).map(c =>
    `<button class="chip${c === currentCat ? " on" : ""}" data-c="${c}">${nice(c)}</button>`).join("");
  $("#chips").onclick = e => {
    const c = e.target.dataset.c; if (!c) return;
    currentCat = c;
    $$("#chips .chip").forEach(b => b.classList.toggle("on", b.dataset.c === c));
    drawCards();
  };
  track.addEventListener("scroll", () => requestAnimationFrame(applyCoverflow), { passive: true });
  addEventListener("resize", applyCoverflow);
  $("#nx").onclick = () => stepRow(track, 1);
  $("#pl").onclick = () => stepRow(track, -1);
  track.onclick = e => { const c = e.target.closest(".cd"); if (c) openModal(c.dataset.n); };
  rowScroll(track, { step: true });
  drawCards();
}