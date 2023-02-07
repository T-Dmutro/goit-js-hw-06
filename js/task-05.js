const form = document.querySelector("#name-input");
const span = document.querySelector("#name-output")

// console.log(form);
// console.log(span);
form.addEventListener('input', onInputChange);
function onInputChange(event){
    console.log(event.currentTarget.value)
    if( event.currentTarget.value === ""){
        span.textContent = "Anonymous"
    } else {
    span.textContent =event.currentTarget.value;}
     
}