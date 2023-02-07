function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button =document.querySelector("button");
const span = document.querySelector(".color");
console.log(span);
console.log(button);
button.addEventListener('click', onChangeColor);
function onChangeColor(){
  document.body.style.backgroundColor= getRandomHexColor();
  span.textContent= getRandomHexColor();
};

