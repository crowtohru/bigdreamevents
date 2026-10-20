/* ===== SERVICE STYLE POPUP ===== */
let modalItem = null, styleIdx = 0;

function openModal(name) {
  modalItem = ALL.find(x => x.n === name);
  styleIdx = 0;
  $("#dt2").textContent = modalItem.n;
  $("#dp").textContent = modalItem.p;
  $("#dul").innerHTML = (INC[modalItem.n] || DEFAULT_INC).map(i => `<li>${i}</li>`).join("");
  renderStyle();
  $("#dlg").showModal();
}

function renderStyle() {
  const st = STYLES[modalItem.c];
  $("#dsty").innerHTML = st.map((s, i) => `<button class="chip${i === styleIdx ? " on" : ""}" data-i="${i}">${s}</button>`).join("");
  $("#dimg").innerHTML = slot(IMG[modalItem.n + "|" + styleIdx], modalItem.e, modalItem.n + " · " + st[styleIdx], styleIdx);
}

/* "Book" buttons scroll to Contact and show what the visitor picked */
function bookService(label) {
  const p = $("#pick");
  p.textContent = `You're interested in: ${label}. Message us and mention it, and we'll take it from there.`;
  p.hidden = false;
  $("#contact").scrollIntoView();
}

function initModal() {
  $("#dsty").onclick = e => { if (e.target.dataset.i) { styleIdx = +e.target.dataset.i; renderStyle(); } };
  /* click the big image = preview a photo from your device (not saved) */
  $("#dimg").onclick = () => {
    const f = document.createElement("input");
    f.type = "file"; f.accept = "image/*";
    f.onchange = () => { if (f.files[0]) { IMG[modalItem.n + "|" + styleIdx] = URL.createObjectURL(f.files[0]); renderStyle(); drawCards(); } };
    f.click();
  };
  $("#dx").onclick = () => $("#dlg").close();
  $("#dlg").onclick = e => { if (e.target.id === "dlg") $("#dlg").close(); };
  $("#dbook").onclick = () => { $("#dlg").close(); bookService(`${modalItem.n} · ${STYLES[modalItem.c][styleIdx]} style`); };
}