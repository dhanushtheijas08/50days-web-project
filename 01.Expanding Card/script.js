
let imgContainer = document.querySelectorAll(".container__img");
console.log(imgContainer);

let cardExpandRemover = function(){
  imgContainer.forEach((element,index) => {
    element.classList.remove('active');
  })
}
imgContainer.forEach((element,index) => {
  element.addEventListener('click',() => {
    cardExpandRemover();
    element.classList.add('active');
  })
});
