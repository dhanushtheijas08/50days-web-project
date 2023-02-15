"use strict";

let range = document.querySelector(".range");
let text = document.querySelector(".text");
range.addEventListener("input", function () {
  text.textContent = range.value;
});
