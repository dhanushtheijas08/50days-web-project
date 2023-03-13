let src = document.querySelector(".src");
let btn = document.querySelector(".btn");

btn.addEventListener("click",() => {
  btn.style.transform = "translateX(200px)";
  btn.style.borderRadius= "0px 10px 10px 0px";
  src.classList.add('active');
})