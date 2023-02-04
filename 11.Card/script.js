"use strict";

let card = document.querySelector(".card");
let filler = document.querySelector(".filler");

let cardHover = function (h, w, br, t) {
  filler.style.height = h;
  filler.style.width = w;
  filler.style.borderRadius = br;
  filler.style.transition = t;
};
card.addEventListener(
  "mouseenter",
  cardHover.bind(null, "150%", "150%", "5px 5px 5px 25%", "all .8s")
);
card.addEventListener(
  "mouseleave",
  cardHover.bind(null, "50px", "50px", "50%", "all .4s")
);
