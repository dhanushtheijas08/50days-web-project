'use strict'
// Container
let box = document.querySelectorAll(".box");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show',entry.isIntersecting);
  })
})
box.forEach(card => {  
  observer.observe(card);
})


// Bottom Cards
let newBox = document.querySelectorAll(".new-box");
const newObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('new-show',entry.isIntersecting);
  })
})

newBox.forEach(newCard => {  
  newObserver.observe(newCard);
})