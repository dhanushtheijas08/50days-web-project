"use strict";

let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let lists = [...document.querySelectorAll(".list")];

lists.forEach((list) => {
  list.addEventListener("mouseenter", (e) => {
    let iterator = 0;
    let changeWord = setInterval(() => {
      e.target.textContent = e.target.textContent
        .split("")
        .map((letter, i) => {
          if (i < iterator)
            return e.target.getAttribute("name").split("").at(i);
          else return alphabet[Math.floor(Math.random() * 26)];
        })
        .join("");
      iterator += 1 / 2;
      if (iterator > e.target.textContent.length) {
        clearInterval(changeWord);
      }
    }, 30);
  });
  list.addEventListener("mouseleave", (e) => {
    let iterator = e.target.textContent.length - 1;
    let changeWord = setInterval(() => {
      e.target.textContent = e.target.textContent
        .split("")
        .map((letter, i) => {
          if (i > iterator)
            return e.target.getAttribute("name").split("").at(i);
          else return alphabet[Math.floor(Math.random() * 26)];
        })
        .join("");
      iterator -= 1 / 2;
      console.log("🚀  iterator", iterator);
      if (iterator < -1) {
        clearInterval(changeWord);
      }
    }, 30);
  });
});
