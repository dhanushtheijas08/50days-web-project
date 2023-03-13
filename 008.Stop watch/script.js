let hrs = document.querySelector(".timer__hrs")
let min = document.querySelector(".timer__min")
let sec = document.querySelector(".timer__sec")
let start = document.querySelector(".btn__start")
let reset = document.querySelector(".btn__reset")
let stopTimer = document.querySelector(".btn__stop")
let innerTimer = {
  hrs : 00,
  min : 00,
  sec : 00
}
let secInterval;
let minInterval;
let hrsInterval;
let secFunction = () => {
  if(innerTimer.sec < 60)
    ++innerTimer.sec
  else
    innerTimer.sec = 0;

  if(innerTimer.sec <= 9)
    sec.textContent = "0"+innerTimer.sec;
  else
    sec.textContent = innerTimer.sec;
};
let minFunction = () => {
  if(innerTimer.min < 60)
    ++innerTimer.min
  else
    innerTimer.min = 0;
  
  if(innerTimer.min <= 9)
    min.textContent = "0"+innerTimer.min;
  else
    min.textContent = innerTimer.min;
};
let hrsFunction = () => {
  if(innerTimer.hrs < 24)
    ++innerTimer.hrs
  else
    innerTimer.hrs = 0;
  if(innerTimer.hrs<=9)
    hrs.textContent = "0"+innerTimer.hrs;
  else
    hrs.textContent = innerTimer.hrs;
};

start.addEventListener("click",() => {
  secInterval = setInterval(secFunction,1000);
  minInterval = setInterval(minFunction,60000);
  hrsInterval = setInterval(hrsFunction,3600000);
});
let clearInt = () =>{
  clearInterval(secInterval);
  clearInterval(minInterval);
  clearInterval(hrsInterval);
}
stopTimer.addEventListener("click",clearInt);
let resetInt = () =>{
  hrs.textContent = innerTimer.sec = innerTimer.min = innerTimer.hrs = 0;
  hrs.textContent = "00"
  min.textContent = "00"
  sec.textContent = "00"
}
reset.addEventListener("click",() => {
  clearInt();
  resetInt();
})
