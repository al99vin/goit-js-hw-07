import { galleryItems } from './gallery-items.js';
// Change code below this line

// list of items and pull down



const marked = galleryItems.map((image)=> `
    <a class = "gallery__item" href = '${image.original}'>
        <img  class = "gallery__image",
        src = '${image.preview}', 
        alt = '${image.description}', 
        data-source = '${image.original}'>
</a>`).join(""); 
const itemsContainer = document.querySelector(".gallery"); 
itemsContainer.insertAdjacentHTML('afterBegin', marked)
console.log(galleryItems);

//making modal window

var lightbox = new SimpleLightbox('.gallery__item',{captionsData: 'alt', captionDelay: '250',});

console.log(lightbox)




  