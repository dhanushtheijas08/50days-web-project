"use strict";

let faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
  faq.addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("click");
  })
})
