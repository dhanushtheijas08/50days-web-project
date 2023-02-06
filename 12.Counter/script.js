"use strict";

const target = document.querySelectorAll(".target");

target.forEach((num) => {
  let incrementer = Math.ceil(+num.getAttribute("data-target") / 150);
  let targetVal = +num.textContent;

  let timeInterval = setInterval(() => {
    if (targetVal < +num.getAttribute("data-target")) {
      targetVal = targetVal + incrementer;
      num.textContent = targetVal;
    } else clearInterval(timeInterval);
  }, 10);
});
