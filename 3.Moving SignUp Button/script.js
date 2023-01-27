'use strict'

// Input Fields
let uname = document.getElementById('uname')
let passwd = document.getElementById('passwd')

// Button
let flex = document.querySelector('.flex-btn')
let btn = document.getElementById('btn')
let str = '';
let allow = false;

let chechStr = (str) => (str.length > 7)?true:false;

passwd.addEventListener('keydown', (e) => {
  if(e.key == 'Tab' || e.key == 'Shift' || e.key == 'Control' || e.key == 'Meta' || e.key == 'Alt' || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'ArrowUp' || e.key == 'ArrowDown')
    return;
  else{
    str = str + e.key;
    allow = chechStr(str);
  }
})

btn.addEventListener("mouseover", function() {
if(allow == false){
    let style = window.getComputedStyle(flex);
    flex.style.justifyContent = (style.getPropertyValue("justify-content") == "start")?'center':
    (style.getPropertyValue("justify-content") == "center")?'end':'start';

    // !This is the same as the above line but using if else
    /*
    if (style.getPropertyValue("justify-content") == "start") {
      flex.style.justifyContent = 'center';
    }
    else if(style.getPropertyValue("justify-content") == "center") {
      flex.style.justifyContent = 'end';
    }
    else if(style.getPropertyValue("justify-content") == "end") {
      flex.style.justifyContent = 'start';
    }
      */
  }
  else
  flex.classList.remove("flex-btn__sec")
});



