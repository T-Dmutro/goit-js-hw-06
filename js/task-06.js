const inputItem = document.getElementById("validation-input");
// console.log(inputItem);
const  onData= document.querySelector('#validation-input').getAttribute('data-length')
// console.log(onData)


//для чекбокса
inputItem.addEventListener('change', onInputChange );
function onInputChange(){
    const inputLength = [];
    inputLength.push(event.currentTarget.value)
    console.log(inputLength[0].length)
    if (inputLength[0].length === Number(onData)){
        inputItem.classList.add('valid')
    } else{ inputItem.classList.add('invalid')}
    
}


// inputItem.addEventListener( 'focus', onInputFocus);
// inputItem.addEventListener( 'blur', onInputBlur)
// // console.log()
// function onInputFocus (){
//     console.log('la lal lala ')
// }
// function onInputBlur(){
//     console.log('be be be')
// }

