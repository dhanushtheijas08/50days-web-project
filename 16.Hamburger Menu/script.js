"use strict";


let menu = document.querySelector(".hamburger-menu");

menu.addEventListener("click", function() {
  menu.classList.toggle("hamburger-menu__clicked")
})