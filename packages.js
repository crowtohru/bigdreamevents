/* ===== PACKAGE INCLUSIONS: tabs + image viewer + details ===== */
let pk = PKGS[0], pi = 0;

function renderPkInfo() {
  $("#pkName").textContent = pk.n;
  $("#pkFrom").textContent = pk.from;
  $("#pkDesc").textContent = pk.desc;
  $("#pkList").innerHTML = (INC[pk.n] || DEFAULT_INC).map(i => `<li>${i}</li>`).join("");
  const box = $("#pkInfo");
  box.classList.remove("swap"); void box.offsetWidth; box.classList.add("swap");
}

function renderPkImg() {
  /* new image fades/pops in while the previous one fades away */
  const st = $("#pkStage"), tmp = document.createElement("div");
  tmp.innerHTML = slot(PKG_IMG[pk.k][pi], pk.e, `${pk.n} inclusions ${pi + 1}`, pi);
  const fresh = tmp.firstElementChild, old = st.lastElementChild;
  fresh.classList.add("pk-in"); st.appendChild(fresh);
  if (old) { old.classList.remove("pk-in"); old.classList.add("pk-out"); setTimeout(() => old.remove(), 850); }
  while (st.children.length > 2) st.firstElementChild.remove();
  $("#pkCount").textContent = `${pi + 1} / ${pk.c}`;
  $("#pkThumbs").innerHTML = Array.from({ length: pk.c }, (_, i) =>
    `<button class="${i === pi ? "on" : ""}" data-i="${i}" aria-label="Image ${i + 1}">${slot(PKG_IMG[pk.k][i], "", "", i)}<span>${i + 1}</span></button>`).join("");
}

/* slide the gold underline under the active tab (and centre it in the strip) */
let inkL = 0, inkW = 0;
function moveInk(animate) {
  const on = $(".pk-tab.on"), ink = $(".pk-ink"), nav = $("#pkNav");
  if (!on || !ink) return;
  const L = on.offsetLeft, W = on.offsetWidth;
  if (animate && inkW) {                         /* stretch toward the new tab, then settle: a liquid slide */
    const a = Math.min(inkL, L), b = Math.max(inkL + inkW, L + W);
    ink.style.left = a + "px"; ink.style.width = (b - a) + "px";
    clearTimeout(ink._t);
    ink._t = setTimeout(() => { ink.style.left = L + "px"; ink.style.width = W + "px"; }, 200);
  } else { ink.style.left = L + "px"; ink.style.width = W + "px"; }
  inkL = L; inkW = W;
  if (animate) glide(nav, L - (nav.clientWidth - W) / 2, 520, easeInOutCubic);
}

const stepPk = d => { pi = (pi + d + pk.c) % pk.c; renderPkImg(); };

function initPackages() {
  $("#pkTabs").innerHTML = '<span class="pk-ink"></span>' + PKGS.map((p, i) =>
    `<button class="pk-tab${i ? "" : " on"}" data-i="${i}" data-r="up" style="--d:${i * .07}s"><span class="e">${p.e}</span><b>${p.n}</b><small>from ${p.from}</small></button>`).join("");
  $("#pkTabs").onclick = e => {
    const b = e.target.closest(".pk-tab"); if (!b) return;
    pk = PKGS[+b.dataset.i]; pi = 0;
    $$(".pk-tab").forEach(x => x.classList.toggle("on", x === b));
    moveInk(true); renderPkInfo(); renderPkImg();
  };
  rowScroll($("#pkNav"));
  rowScroll($("#pkThumbs"));
  addEventListener("resize", () => moveInk(false));
  document.fonts?.ready.then(() => moveInk(false));
  requestAnimationFrame(() => moveInk(false));
  $("#pkPrev").onclick = () => stepPk(-1);
  $("#pkNext").onclick = () => stepPk(1);
  $("#pkThumbs").onclick = e => { const b = e.target.closest("button"); if (b) { pi = +b.dataset.i; renderPkImg(); } };

  /* swipe or drag the image (touch and mouse) + arrow keys */
  let x0 = null;
  const st = $("#pkStage");
  st.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse" || e.button === 0) x0 = e.clientX; });
  addEventListener("pointerup", e => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    if (Math.abs(dx) > 40) stepPk(dx < 0 ? 1 : -1);
    x0 = null;
  });
  st.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); stepPk(e.key === "ArrowRight" ? 1 : -1); }
  });

  $("#pkBook").onclick = () => bookService(`${pk.n} package`);
  renderPkInfo(); renderPkImg();
}