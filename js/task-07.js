const inputValue = document.querySelector("#font-size-control");
const  spanvalue = document.querySelector("#text")
console.log(inputValue)
inputValue.addEventListener("change", onInputChange);
function onInputChange( event){
    console.log(event.currentTarget.value)
}