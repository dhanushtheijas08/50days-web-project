"use strict";

let hamburgerMenu = document.querySelector(".hamburger-menu");
let item1 = document.querySelector(".nav-item-1");
let item2 = document.querySelector(".nav-item-2");
let item3 = document.querySelector(".nav-item-3");
let item4 = document.querySelector(".nav-item-4");
let item5 = document.querySelector(".nav-item-5");
hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger-menu__clicked");
  item1.classList.toggle("nav-item-1-active");
  item2.classList.toggle("nav-item-2-active");
  item3.classList.toggle("nav-item-3-active");
  item4.classList.toggle("nav-item-4-active");
  item5.classList.toggle("nav-item-5-active");
});
