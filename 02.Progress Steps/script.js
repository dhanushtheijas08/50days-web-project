const prev = document.getElementById('prev');
const next = document.getElementById('next');
let highlightLine = document.querySelector('.container__main--line')
let circles = document.querySelectorAll('.container__main--circle')
let active = 1;
let activeLine;
let nextCircle = () => {
  circles.forEach((circle,index) => {
    (index < active)?circle.classList.add('active'):circle.classList.remove('active');
    activeLine = document.querySelectorAll('.active')
    len = activeLine.length;
    highlightLine.style.width = `${len == 2?"35%":len == 3?"65%":"100%"}`
  })
}

let prevCircle = () => {
  circles.forEach((circle,index) => {
    (index >= active)?circle.classList.remove('active'):null;
    activeLine = document.querySelectorAll('.active')
    len = activeLine.length;
    highlightLine.style.width = `${len == 1?"0%":len == 2?"35%":len ==3?"65%":"100%"}`
  })
}
next.addEventListener('click',() => {
  (active < circles.length)?active++:null;
  nextCircle();
})

prev.addEventListener('click',() => {
  ((active <= circles.length) && active > 1)?active--:1;
  prevCircle();
})
