const form = document.querySelector('.login-form')
// console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
   
    
    const formEl = event.currentTarget.
    console.dir(formEl);
    const mail = formEl.email;
    const password = formEl.password;

    event.preventDefault();
    console.log(`ура працює`)
}
