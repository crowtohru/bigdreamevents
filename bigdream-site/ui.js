/* ===== NAV, SCROLL EFFECTS, BACK-TO-TOP ===== */
function initUI() {
  const setMenu = open => {
    $("#links").classList.toggle("open", open);
    $("#menu").setAttribute("aria-expanded", open);
    document.body.classList.toggle("noscroll", open);
  };
  $("#menu").onclick = () => setMenu(!$("#links").classList.contains("open"));
  $("#links").onclick = e => { if (e.target.closest("a")) setMenu(false); };
  addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
  addEventListener("resize", () => { if (innerWidth > 1180) setMenu(false); });

  /* header solid + progress bar + back-to-top */
  const hdr = $("#hdr"), prog = $("#prog"), top = $("#top");
  const tick = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    hdr.classList.toggle("solid", scrollY > 40);
    prog.style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
    top.classList.toggle("s", scrollY > 600);
  };
  addEventListener("scroll", tick, { passive: true }); tick();
  top.onclick = () => scrollTo({ top: 0 });

  /* highlight the nav link of the section in view */
  const links = $$("#links > a[href^='#']");
  const spy = new IntersectionObserver(es => es.forEach(x => {
    if (x.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + x.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  $("#y").textContent = new Date().getFullYear();
  dockAboveLauncher();
}

/* Keep the back-to-top button just above the chat bubble in the bottom-right corner (the Fastbots logo).
   If the bubble can be measured, the button sits 12px above it, centred. If it can't be measured
   (for example it lives inside a big transparent frame), it uses BOT_SPACE instead. */
const BOT_SPACE = 92;   /* px reserved for the chat bubble. Raise it if your bubble is bigger. */

function dockAboveLauncher() {
  const fab = $(".fab"); if (!fab) return;
  const root = document.documentElement;
  const set = (dock, right) => { root.style.setProperty("--dock", dock); fab.style.right = right; };

  const probe = () => {
    let found = null;
    for (const el of document.elementsFromPoint(innerWidth - 45, innerHeight - 45)) {
      if (el.closest(".fab,.chat,.chat-tip")) continue;                  /* ignore our own buttons */
      let n = el;
      while (n && n !== document.body && n !== document.documentElement && getComputedStyle(n).position !== "fixed") n = n.parentElement;
      if (n && n !== document.body && n !== document.documentElement) { found = n; break; }
    }
    const r = found && found.getBoundingClientRect();
    if (r && r.width <= 150 && r.height <= 150) {                        /* a measurable bubble */
      set(Math.round(innerHeight - r.top + 12) + "px", Math.max(8, Math.round(innerWidth - r.right + r.width / 2 - 27)) + "px");
    } else if (document.querySelector('script[src*="fastbots"]')) set(BOT_SPACE + "px", "");                        /* bubble present but not measurable */
    else set("", "");                                                    /* no bubble: normal corner */
  };
  setInterval(probe, 600);
  addEventListener("resize", probe);
  probe();
}