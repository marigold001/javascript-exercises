const images = document.querySelectorAll(".row img");
const modal = document.querySelector(".modal");
const modalImages = document.querySelectorAll(".modal img");
const closeButton = document.querySelector(".close");
const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const captionText = document.querySelector("#caption--text");

let slideIndex = 0;

images.forEach((image, id) => {
  image.addEventListener("click", openModal);
  image.addEventListener("click", function () {
    showSlide(id);
  });
});

function openModal() {
  modal.style.display = "block";
}

function showSlide(n) {
  if (n > modalImages.length - 1) {
    slideIndex = 0; // no more images ahead pick the first one
  }
  if (n < 0) {
    slideIndex = modalImages.length - 1; // no more images behind pick the last one
  }
  for (let i = 0; i < modalImages.length; i++) {
    modalImages[i].style.display = "none";
  }
  modalImages[slideIndex].style.display = "block";
  captionText.innerHTML = modalImages[slideIndex].alt;
}

closeButton.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
}

previousButton.addEventListener("click", function () {
  changeSlides(-1);
});
nextButton.addEventListener("click", function () {
  changeSlides(1);
});

function changeSlides(n) {
  showSlide(slideIndex += n);
}
