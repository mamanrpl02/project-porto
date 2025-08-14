const menuToggle = document.getElementById("menu-toggle");
const navItems = document.getElementById("nav-items");
const menuIcon = document.getElementById("menu-icon");
const overlay = document.getElementById("overlay");

// Toggle menu dan overlay saat tombol menu diklik
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navItems.classList.toggle("active");
  overlay.classList.toggle("active");
  menuIcon.textContent = navItems.classList.contains("active")
    ? "close"
    : "menu";
});

// Tutup menu saat salah satu link diklik
document.querySelectorAll(".nav-items ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    navItems.classList.remove("active");
    overlay.classList.remove("active");
    menuIcon.textContent = "menu";
  });
});

// Tutup menu jika klik di luar
document.addEventListener("click", (e) => {
  const isClickInsideMenu = navItems.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (
    !isClickInsideMenu &&
    !isClickOnToggle &&
    navItems.classList.contains("active")
  ) {
    navItems.classList.remove("active");
    overlay.classList.remove("active");
    menuIcon.textContent = "menu";
  }
});
