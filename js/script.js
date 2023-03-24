const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]
const itemsWrapper = document.querySelector('.items-wrapper');
const btnDown = document.querySelector('.down');
const btnUp = document.querySelector('.up');
let counterImage = 0;

for (let i = 0; i < images.length; i++){

  const image = images[i];

  console.log(image);

  itemsWrapper.innerHTML += `
  <img class="item hide" src="${image}">
  `;
  
}

const items = document.getElementsByClassName('item');
items[counterImage].classList.remove('hide');

//bottone down
btnDown.addEventListener('click', function(){

  items[counterImage].classList.add('hide');

  counterImage++;
  items[counterImage].classList.remove('hide');
})

//bottone up
btnUp.addEventListener('click', function(){

  items[counterImage].classList.add('hide');

  counterImage--;

  items[counterImage].classList.remove('hide');

})