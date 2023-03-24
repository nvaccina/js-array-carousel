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

const gallery = document.getElementsByClassName('gallery');
gallery[counterImage].classList.remove('opaco');
gallery[counterImage].classList.add('luce');

//bottone down
btnDown.addEventListener('click', function(){

  items[counterImage].classList.add('hide');
  gallery[counterImage].classList.add('opaco');
  gallery[counterImage].classList.remove('luce');

  counterImage++;

  items[counterImage].classList.remove('hide');
  gallery[counterImage].classList.remove('opaco');
  gallery[counterImage].classList.add('luce');

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
  gallery[counterImage].classList.add('opaco');
  gallery[counterImage].classList.remove('luce');

  counterImage--;

  items[counterImage].classList.remove('hide');
  gallery[counterImage].classList.remove('opaco');
  gallery[counterImage].classList.add('luce');

  //loop dalla prima immagine all'ultima
  if(counterImage === 0){

    items[0].insertAdjacentElement("beforebegin", items[lastCounterImage]);
    
    items[counterImage].classList.add('hide');
    
    counterImage++; 

    items[counterImage].classList.remove('hide');
  }
})



