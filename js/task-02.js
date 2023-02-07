const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")


const listFull = ingredients.map(option =>{
    const el = document.createElement("li")
  el.textContent=option;
  el.classList.add('item')
  
  
  // console.log(el)
  return el
});
console.log(list)

list.append(...listFull)


// for (const ingredient of ingredients){
//   console.log(ingredient)
//   const el = document.createElement("li")
//   el.textContent=ingredient;
//   el.classList.add('item')
//   // list.after(el)
//   listFull.push(el)
//   console.log(listFull)
// };
