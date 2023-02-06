const form = document.querySelector('.login-form')
// console.log(form);

form.addEventListener('submit', onFormSubmit);


function onFormSubmit (event){
    event.preventDefault();
    console.log(`ура працює`)
    
    const formEl = document.forms[0].elements;
    console.dir(formEl);
    const mail = formEl.email.value;
    const password = formEl.password.value;
    console.log(mail, password)
    const submitValue = {mail: this.mail, password: this.password};
    console.log( submitValue);
   
}
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.---?
// Під час відправлення форми сторінка не повинна перезавантажуватися.---зроблено
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.