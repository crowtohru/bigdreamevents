/* ===== LIGHT / DARK MODE (saved, defaults to the device setting) ===== */
const Theme = {
  key: "bde-theme",
  saved() { try { return localStorage.getItem(this.key); } catch (e) { return null; } },
  init() {
    const sys = matchMedia("(prefers-color-scheme: dark)");
    this.set(this.saved() || (sys.matches ? "dark" : "light"));
    sys.addEventListener?.("change", e => { if (!this.saved()) this.set(e.matches ? "dark" : "light"); });
    $("#theme").onclick = () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      this.set(next);
      try { localStorage.setItem(this.key, next); } catch (e) {}
    };
  },
  set(t) {
    document.documentElement.dataset.theme = t;
    $("#theme").setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    $("#metaTheme").setAttribute("content", t === "dark" ? "#1a0507" : "#fff6e6");
  }
};
