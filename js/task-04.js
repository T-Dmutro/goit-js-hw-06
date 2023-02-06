let value = 0 ;
const valueEl = document.querySelector("#value");
// console.log(valueEl)
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
// console.log(buttonIncrement)
// console.log(buttonDecrement)

// варіант 1
function decrement (){value-=1; valueEl.innerHTML = value;};
function increment (){value+=1; valueEl.innerHTML = value;};
console.log(value);
buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment );
console.log(value);





// // Варіант 2
// buttonDecrement.onclick = function(){
//     value -=1;
//     valueEl.innerHTML = value;
// }
// buttonIncrement.onclick = function(){
//     value +=1;
//     valueEl.innerHTML = value;

// }


