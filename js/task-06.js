const inputItem = document.getElementById("validation-input");
// console.log(inputItem);
const  onData= document.querySelector('#validation-input').getAttribute('data-length')
// console.log(onData)


//для чекбокса
inputItem.addEventListener('change', onInputChange );
function onInputChange(){
    // const inputLength = [];
    // inputLength.push(event.currentTarget.value)
    // console.log(inputLength[0].length)
    // console.log(event.currentTarget.value.length)
 
    if (event.currentTarget.value.length=== Number(onData)){
     inputItem.classList.add('valid');
     inputItem.classList.remove('invalid')
     
    }  else{ inputItem.classList.add('invalid');
    inputItem.classList.remove('valid')
}
   
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

