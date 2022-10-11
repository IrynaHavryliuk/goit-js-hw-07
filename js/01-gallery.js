import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createMarkup(galleryItems);
console.log(galleryMarkup);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onGalleryContainerClick);

function createMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <div class="gallery__item">
                    <a class="gallery__link" href="${preview}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </div>
            `;
        })
        .join('');
}

function onGalleryContainerClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`
    );
    instance.show();

    window.addEventListener('keydown', onEscPress);

    function onEscPress(event) {
        const Esc_code = 'Escape';
        const isEscPress = event.code === Esc_code;

        if (isEscPress) {
            instance.close();
        }
    }
}
