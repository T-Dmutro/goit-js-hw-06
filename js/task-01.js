const liItem = document.querySelectorAll("li.item");
console.log("Number of categories:" ,liItem.length);





liItem.forEach((category, index)=>{
   console.log(`Category: ${category.firstElementChild.textContent} 
   Elements: ${category.lastElementChild.childElementCount}`  );}
);






// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5