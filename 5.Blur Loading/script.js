let bgBlur = 0;
let count = 100;
let countAdd = 0;
let blurLoading = document.querySelector(".blur-loading");
let text = document.querySelector(".text");
let fun = () => {
  count--;
  countAdd++;
  bgBlur = ((100 - countAdd)/100);
  if(count == 0)
    clearInterval(int);
  blurLoading.style.filter = `blur(${count}px)`;
  text.style.opacity = `${bgBlur}`;
  text.textContent = `${countAdd}%`
}
let int = setInterval(fun,20)