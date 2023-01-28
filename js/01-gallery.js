import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imgCards = createImgCardsMarkup(galleryItems);

galleryContainer.addEventListener("click", onGalleryContainerClick);
galleryContainer.insertAdjacentHTML("beforeend", imgCards);

function createImgCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `<img src = ${evt.target.dataset.source}>`
  );
  modal.show();
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      modal.close();
    }
  });
}
