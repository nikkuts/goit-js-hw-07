import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);
galleryRef.innerHTML = markup;

function createMarkup(items) {
    return items
    .map(({preview, original, description}) => 
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" alt="${description}" 
    />
    </a>`)
    .join("");
}

galleryRef.addEventListener("click", onShowsImage);

function onShowsImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    } 
    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250, 
    });
}