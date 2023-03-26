"use strict";

let cursorMove = document.querySelector(".cursor");
let root = document.querySelector(":root");
let navLinks = document.querySelector(".nav-link")
let img = document.querySelector(".man-img");

window.addEventListener("mousemove", function (event) {
  root.style.setProperty("--mouse-top", `${event.pageY - cursorMove.offsetHeight / 2}px`);
  root.style.setProperty("--mouse-left", `${event.pageX - cursorMove.offsetWidth / 2}px`);
});


navLinks.addEventListener("mouseover", function (){
  cursorMove.classList.add("cursor-on-nav");
  cursorMove.classList.remove("animation");
})
navLinks.addEventListener("mouseout", function (){
  cursorMove.classList.remove("cursor-on-nav");
  cursorMove.classList.add("animation");
})

img.addEventListener("mouseover", function (){
  cursorMove.classList.add("gray-scale");
  cursorMove.classList.remove("animation");
  cursorMove.classList.remove("bg-color");
})
img.addEventListener("mouseout", function (){
  cursorMove.classList.remove("gray-scale");
  cursorMove.classList.add("animation");
  cursorMove.classList.add("bg-color");
})
