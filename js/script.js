const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]
const itemsWrapper = document.querySelector('.items-wrapper');

const galleryImage = document.querySelector('.gallery-image');

const btnDown = document.querySelector('.down');
const btnUp = document.querySelector('.up');

let counterImage = 0;
let lastCounterImage = images.length - 1;

for (let i = 0; i < images.length; i++){

  const image = images[i];

  itemsWrapper.innerHTML += `
  <img class="item hide" src="${image}">
  `;
  
  galleryImage.innerHTML += ` 
  <img class="gallery opaco" src="${image}">
  `;

}

const items = document.getElementsByClassName('item');
items[counterImage].classList.remove('hide');

//bottone down
btnDown.addEventListener('click', function(){

  items[counterImage].classList.add('hide');

  counterImage++;
  items[counterImage].classList.remove('hide');

  //loop dall'ultima immagine alla prima
  if(counterImage == lastCounterImage){

    items[lastCounterImage].insertAdjacentElement("afterend", items[0]);
    
    items[counterImage].classList.add('hide');

    counterImage--;

    items[counterImage].classList.remove('hide');
  }
})

//bottone up
btnUp.addEventListener('click', function(){

  items[counterImage].classList.add('hide');

  counterImage--;

  items[counterImage].classList.remove('hide');

  //loop dalla prima immagine all'ultima
  if(counterImage === 0){

    items[0].insertAdjacentElement("beforebegin", items[lastCounterImage]);
    
    items[counterImage].classList.add('hide');
    
    counterImage++; 

    items[counterImage].classList.remove('hide');
  }
})



