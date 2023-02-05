const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imagesItem= ({url, alt})=>{
return
`<li> <img src= ${url}, alt = ${alt}> </li>`
}
// console.log(imagesItem)
const listImage = document.querySelector('.gallery');

// console.log(listImage)
const listMeker = images.map((ielement)=>{ielement})
console.log(listMeker)
listImage.insertAdjacentHTML('beforebegin', listMeker)


{/* <li><img src='https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt='White and Black Long Fur Cat'>  </li> */}