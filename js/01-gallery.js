import { galleryItems } from './gallery-items.js';
// Change code below this line

// list of items and pull down



const marked = galleryItems.map((image)=> `
<div class = "gallery__item">
    <a class = "gallery__link" href = '${image.original}'>
        <img  class = "gallery__image",
        src = '${image.preview}', 
        alt = '${image.description}', 
        data-source = '${image.original}'>
</a></div>`).join(""); 
const itemsContainer = document.querySelector(".gallery"); 
itemsContainer.insertAdjacentHTML('afterBegin', marked)
console.log(galleryItems);

//making modal window

function onClick(e){
        e.preventDefault();
        if(e.target === e.currentTarget){return;};
        
    const currentImage = e.target;
    console.log(`"Current image:${currentImage.dataset.source}"`)
    const instance = basicLightbox.create(`
            <div class = "modal">
                <img src = "${currentImage.dataset.source}">
            </div>`
            , {onShow: (instance) => {document.body.addEventListener('keydown', instanceCloseByEscape)}
                ,
                onClose: (instance) => {document.body.removeEventListener('keydown', instanceCloseByEscape)},
            }
            )
            instance.show();
        function instanceCloseByEscape(e){
             if(e.key === "Escape")instance.close();
           }
}
itemsContainer.addEventListener('click',  onClick);

  