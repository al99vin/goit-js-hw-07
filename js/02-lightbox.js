import { galleryItems } from './gallery-items.js';
// Change code below this line

// list of items and pull down



const marked = galleryItems.map((image)=> `
    <a class = "gallery__item" href = '${image.original}'>
        <img  class = "gallery__image",
        src = '${image.preview}', 
        alt = '${image.description}', 
</a>`).join(""); 
const itemsContainer = document.querySelector(".gallery"); 
itemsContainer.insertAdjacentHTML('afterBegin', marked);

//making modal window

const lightbox = new SimpleLightbox('.gallery__item',{captionsData: 'alt', captionDelay: '250',});





  