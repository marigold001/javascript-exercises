const image = document.querySelector("#animate");

image.addEventListener("click", animateImage);

function animateImage() {
  if (image.clientWidth == 320) {
    if (image.style.transform == "rotate(20deg)") {
      image.style.transform = "rotate(-20deg)";
    } else {
      image.style.transform = "rotate(20deg)";
    }
    return;
  }
  image.style.width = image.clientWidth + 20 + "px";
}
