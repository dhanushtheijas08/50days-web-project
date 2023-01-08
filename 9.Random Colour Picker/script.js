"use strict";
const container = document.querySelector(".container");
let hex = document.querySelector(".color-hex");  
// let rgb = document.querySelector(".color-rgb");  
// let hsl = document.querySelector(".color-hsl");  
let randomColourPicker = function() {
  const colors = "0123456789ABCDF".split("");
  let color = "#";
  for(let i=0;i<6;i++) {
    let index = Math.floor(Math.random() * 15);
    color = color + colors[`${index}`];
  }
    console.log("🚀 | file: script.js:13 | randomColourPicker | color", typeof color);
    container.style.backgroundColor = color;
    hex.textContent = color;
}
randomColourPicker();
window.addEventListener("keydown",(e) => {
  if(e.key == " ")
  randomColourPicker();
})

let sample = 11;
console.log(typeof sample);
sample = sample.toString(16);
console.log("🚀 | file: script.js:26 | sample", sample)
console.log(typeof sample);
