"use strict";

// Element toggle function

const elemToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarCloseBtn = document.querySelector("[data-nav-close-btn]");

navbarOpenBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

navbarCloseBtn.addEventListener("click", () => {
  elemToggleFunc(navbar);
});

// go top variable

const goTopBtn = document.querySelector("[data-go-top]");

// window scroll event for go top button
window.addEventListener("scroll", () => {
  if (this.window.scrollY > 499) return goTopBtn.classList.add("active");
  goTopBtn.classList.remove("active");
});
