/* ===== SERVICES CAROUSEL + CATEGORY TABS ===== */
let currentCat = CATS[0];

/* "Magical · Romantic · Euphoric · Radiant" under the price, so the names are visible before opening */
function cardNames(x) {
  const names = [...new Set((x.tiers || []).map(t => t.n))];
  return names.length >= 2 && names.length <= 5 && !names.some(n => /pax|guests|table|chair/i.test(n)) ? `<div class="names">${names.join(" · ")}</div>` : "";
}

function drawCards() {
  const track = $("#track");
  track.innerHTML = SERVICES.filter(x => x.cat === currentCat).map((x, i) =>
    `<div class="cd" data-id="${x.id}">${slot(IMG[x.n], x.e, x.n, i)}<div class="ov"><h3>${x.n}</h3></div><div class="in"><div class="p">${x.price}</div>${cardNames(x)}<span class="more">View details ›</span></div></div>`
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
  $("#chips").innerHTML = CATS.map(c =>
    `<button class="chip${c === currentCat ? " on" : ""}" data-c="${c}">${c}</button>`).join("");
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
  track.onclick = e => { const c = e.target.closest(".cd"); if (c) openModal(c.dataset.id); };
  rowScroll(track, { step: true });
  drawCards();
}