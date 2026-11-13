/* ===== SCROLL-IN ANIMATIONS (any element with data-r) ===== */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(x => {
    if (!x.isIntersecting) return;
    x.target.classList.add("v");
    io.unobserve(x.target);
    /* drop the entrance delay once finished so hover effects stay snappy */
    setTimeout(() => x.target.removeAttribute("data-r"), 1600);
  }), { threshold: .12 });
  $$("[data-r]").forEach(el => io.observe(el));
}
