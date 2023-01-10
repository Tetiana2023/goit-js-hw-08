// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

const galleryNewEl = galleryItems.map(item => {
    return ` <a class= "gallery__link" href= "${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`
})
.join("");

galleryEl.insertAdjacentHTML('afterbegin', galleryNewEl);
console.log(galleryEl);


const gallery = new SimpleLightbox('.gallery a', 
{ captions: true,
    captionsData: "alt",
    captionDelay: 250,});
