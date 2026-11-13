/* ===== START EVERYTHING (order matters) ===== */
initIcons();
Theme.init();
initUI();
initHero();
initCarousel();
initModal();
initPackages();
initGallery();
initContact();

if (typeof initChat === "function") addEventListener("DOMContentLoaded", initChat);
initReveal();