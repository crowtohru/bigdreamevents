/* ===== PACKAGES: tabs + binder photos + prices ===== */
let pk = PKGS[0], pi = 0;

function renderPkInfo() {
  $("#pkName").textContent = pk.n;
  $("#pkPrice").hidden = !pk.from;
  $("#pkFrom").textContent = pk.from || "";
  $("#pkDesc").textContent = pk.note || ""; $("#pkDesc").hidden = !pk.note;
  $("#pkTiers").innerHTML = tierRows(pk.tiers, true); $("#pkTiers").hidden = !(pk.tiers && pk.tiers.length);
  $("#pkTierHint").hidden = !$("#pkTiers .clk");
  const inc = pk.inc || [];
  $("#pkSub").hidden = !inc.length;
  $("#pkList").innerHTML = inc.map(i => `<li>${i}</li>`).join("");
  $("#pkPerk").innerHTML = (pk.perks || []).map(p => `<span>🎁 ${p}</span>`).join(""); $("#pkPerk").hidden = !(pk.perks && pk.perks.length);
  const box = $("#pkInfo");
  box.classList.remove("swap"); void box.offsetWidth; box.classList.add("swap");
}

function renderPkImg() {
  const n = pk.imgs.length;
  /* new photo fades in while the previous one fades away */
  const st = $("#pkStage"), tmp = document.createElement("div");
  tmp.innerHTML = slot(pk.imgs[pi], pk.e, `${pk.n} inclusions ${pi + 1}`, pi);
  const fresh = tmp.firstElementChild, old = st.lastElementChild;
  fresh.classList.add("pk-in"); st.appendChild(fresh);
  if (old) { old.classList.remove("pk-in"); old.classList.add("pk-out"); setTimeout(() => old.remove(), 850); }
  while (st.children.length > 2) st.firstElementChild.remove();
  const img = $("img", fresh);                                  /* shape the frame to the photo (portrait or landscape) */
  const fit = () => { st.style.aspectRatio = Math.max(.72, Math.min(1.4, img.naturalWidth / img.naturalHeight)); };
  if (img) { img.complete ? fit() : img.addEventListener("load", fit); } else st.style.aspectRatio = 4 / 3;
  $("#pkCount").textContent = `${pi + 1} / ${n}`;
  $("#pkPrev").hidden = $("#pkNext").hidden = $("#pkCount").hidden = n < 2;
  $("#pkThumbs").hidden = n < 2;
  $("#pkThumbs").innerHTML = pk.imgs.map((s, i) =>
    `<button class="${i === pi ? "on" : ""}" data-i="${i}" aria-label="Photo ${i + 1}">${slot(s, "", "", i)}<span>${i + 1}</span></button>`).join("");
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

const stepPk = d => { const n = pk.imgs.length; pi = (pi + d + n) % n; renderPkImg(); };

function choosePackage(i, photo) {
  pk = PKGS[i]; pi = photo || 0;
  $$(".pk-tab").forEach((x, j) => x.classList.toggle("on", j === i));
  moveInk(true); renderPkInfo(); renderPkImg();
}
/* used by the service pop-up: jump to a package's tab and scroll to it */
function selectPackage(id, photo) {
  const i = PKGS.findIndex(p => p.id === id);
  if (i < 0) return;
  choosePackage(i, photo);
  $("#packages").scrollIntoView();
}

function openZoom(src) { $("#zimg").src = src; $("#zoom").classList.remove("z"); $("#zoom").showModal(); }

function initPackages() {
  $("#pkTabs").innerHTML = '<span class="pk-ink"></span>' + PKGS.map((p, i) =>
    `<button class="pk-tab${i ? "" : " on"}" data-i="${i}" data-r="up" style="--d:${Math.min(i, 6) * .06}s"><span class="e">${p.e}</span><b>${p.n}</b><small>${p.from ? "from " + p.from : "view menu"}</small></button>`).join("");
  $("#pkTabs").onclick = e => { const b = e.target.closest(".pk-tab"); if (b) choosePackage(+b.dataset.i); };
  rowScroll($("#pkNav"));
  rowScroll($("#pkThumbs"));
  addEventListener("resize", () => moveInk(false));
  document.fonts?.ready.then(() => moveInk(false));
  requestAnimationFrame(() => moveInk(false));

  /* tap a size (Magical, Gloss, Bubbly...) to jump to its price-sheet photo */
  const pickTier = li => {
    if (!li) return;
    const t = pk.tiers[+li.dataset.i];
    if (t.sheet == null || t.sheet >= pk.imgs.length) return;
    pi = t.sheet; renderPkImg();
    $$("#pkTiers li").forEach(x => x.classList.toggle("sel", x === li));
  };
  $("#pkTiers").onclick = e => pickTier(e.target.closest("li.clk"));
  $("#pkTiers").onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pickTier(e.target.closest("li.clk")); } };

  $("#pkPrev").onclick = () => stepPk(-1);
  $("#pkNext").onclick = () => stepPk(1);
  $("#pkThumbs").onclick = e => { const b = e.target.closest("button"); if (b) { pi = +b.dataset.i; renderPkImg(); } };

  /* swipe or drag the photo (touch and mouse); a plain tap/click zooms it */
  let x0 = null;
  const st = $("#pkStage");
  st.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse" || e.button === 0) x0 = e.clientX; });
  addEventListener("pointerup", e => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) stepPk(dx < 0 ? 1 : -1);
    else if (Math.abs(dx) < 8 && pk.imgs[pi]) openZoom(pk.imgs[pi]);
  });
  st.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); stepPk(e.key === "ArrowRight" ? 1 : -1); }
    if (e.key === "Enter" && pk.imgs[pi]) openZoom(pk.imgs[pi]);
  });

  $("#zimg").onclick = () => $("#zoom").classList.toggle("z");
  $("#zx").onclick = () => $("#zoom").close();

  $("#pkBook").onclick = () => bookService(pk.n);
  renderPkInfo(); renderPkImg();
}