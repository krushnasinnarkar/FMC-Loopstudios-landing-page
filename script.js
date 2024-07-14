const masthead = document.querySelector(".masthead");
const btn = document.querySelector(".btn--menu");
const btnIcon = document.querySelector(".mobile-menu-icon");
const nav = document.querySelector(".nav__list");
const navItems = document.querySelectorAll(".nav__list-item");

function toggleMenu() {
  // Mobile navigation toggle
  nav.classList.toggle("nav__list--hidden");
  document.body.classList.toggle("disable-scroll");

  // Add nav item staggered, fadein animation
  navItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `fadeInTop .7s backwards ${index / 8 + 0.3}s`;
    }
  });

  // Switch menu button icon and aria-expanded on toggle
  if (nav.classList.contains("nav__list--hidden")) {
    btnIcon.src = "./images/icon-hamburger.svg";
    btn.setAttribute("aria-expanded", "false");
  } else {
    btnIcon.src = "./images/icon-close.svg";
    btn.setAttribute("aria-expanded", "true");
  }
}

function mobileScrollBG() {
  // Check for mobile layout screen size
  if (window.innerWidth < 750) {
    // Add black background to fixed masthead on scroll
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      masthead.classList.add("masthead--scroll");
    } else {
      masthead.classList.remove("masthead--scroll");
    }
  } else {
    // Remove black background on larger screens
    masthead.classList.remove("masthead--scroll");
  }
}

window.onscroll = function () {
  mobileScrollBG();
};
btn.addEventListener("click", toggleMenu);
