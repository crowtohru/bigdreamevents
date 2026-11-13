/* ===== SERVICE DETAILS POP-UP =====
   Every service has its own package names (Magical, Gloss, Bubbly...) in data.js.
   Tapping a name changes the price, the highlights and the price-sheet photo. */
   let modalItem = null, modalTier = 0;

   /* chips are shown when a service has 2 to 8 sizes (equipment rental has 16, so it shows a list) */
   const hasChips = m => m.tiers && m.tiers.length >= 2 && m.tiers.length <= 8;
   function tierLabel(m, t) {
     const dup = m.tiers.filter(x => x.n === t.n).length > 1;
     return dup && t.pax ? `${t.n} · ${t.pax.replace(" pax", "")}` : t.n;
   }
   
   function openModal(id) {
     modalItem = SERVICES.find(x => x.id === id);
     modalTier = 0;
     const m = modalItem, chips = hasChips(m);
     $("#dt2").textContent = m.n;
     $("#dp").textContent = m.price;
     $("#dnote").textContent = m.note || ""; $("#dnote").hidden = !m.note;
     $("#dstyl").hidden = $("#dsty").hidden = $("#dsel").hidden = !chips;
     $("#dtiers").innerHTML = tierRows(m.tiers); $("#dtiers").hidden = chips || !(m.tiers && m.tiers.length);
     $("#dsheets").hidden = !(m.imgs && m.imgs.length);
     renderTier();
     $("#dlg").showModal();
   }
   
   /* refresh everything that depends on the selected package name */
   function renderTier() {
     const m = modalItem, t = m.tiers && m.tiers[modalTier], chips = hasChips(m);
     if (chips) {
       $("#dsty").innerHTML = m.tiers.map((x, i) => `<button class="chip${i === modalTier ? " on" : ""}" data-i="${i}">${tierLabel(m, x)}</button>`).join("");
       $("#dsel").innerHTML = `<div class="dsel-h"><b>${t.n}</b>${t.pax ? `<span>${t.pax}</span>` : ""}</div>` +
         `<div class="dsel-p">${t.was ? `<s>${t.was}</s> ` : ""}${t.p}${t.p2 ? `<small>${t.p2}</small>` : ""}</div>`;
       const box = $("#dsel"); box.classList.remove("swap"); void box.offsetWidth; box.classList.add("swap");
     }
     const inc = t && t.inc ? t.inc : (m.inc && m.inc.length ? m.inc.slice(0, 5) : DEFAULT_INC);
     $("#dul").innerHTML = inc.map(i => `<li>${i}</li>`).join("");
     /* left side: the price-sheet photo for this package (tap to zoom), or a cover placeholder */
     const sheet = m.imgs && m.imgs.length ? m.imgs[(t && t.sheet) || 0] : null;
     $("#dimg").innerHTML = slot(sheet || IMG[m.n], m.e, m.n, SERVICES.indexOf(m));
     const s = $("#dimg .slot"); if (sheet) { s.classList.add("sheet"); s.title = "Tap to zoom"; }
     $("#dimg").dataset.sheet = sheet || "";
   }
   
   /* "Book" buttons scroll to Contact and show what the visitor picked */
   function bookService(label) {
     const p = $("#pick");
     p.textContent = `You're interested in: ${label}. Message us and mention it, and we'll take it from there.`;
     p.hidden = false;
     $("#contact").scrollIntoView();
   }
   
   function initModal() {
     $("#dsty").onclick = e => { const b = e.target.closest("button"); if (b) { modalTier = +b.dataset.i; renderTier(); } };
     $("#dimg").onclick = () => { if ($("#dimg").dataset.sheet) openZoom($("#dimg").dataset.sheet); };
     $("#dx").onclick = () => $("#dlg").close();
     $("#dlg").onclick = e => { if (e.target.id === "dlg") $("#dlg").close(); };
     $("#dbook").onclick = () => {
       const m = modalItem;
       $("#dlg").close();
       bookService(hasChips(m) ? `${m.n} · ${tierLabel(m, m.tiers[modalTier])} (${m.tiers[modalTier].pax || m.tiers[modalTier].p})` : m.n);
     };
     $("#dsheets").onclick = () => {
       const t = modalItem.tiers && modalItem.tiers[modalTier];
       $("#dlg").close(); selectPackage(modalItem.id, (t && t.sheet) || 0);
     };
   }