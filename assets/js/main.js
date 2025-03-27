// Add class to header if scrolled
window.addEventListener("scroll", isMenuScrolled);
document.addEventListener("DOMContentLoaded", isMenuScrolled);

function isMenuScrolled() {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
}
