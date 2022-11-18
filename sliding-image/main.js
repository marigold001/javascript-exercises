const button = document.querySelector("button");
const container = document.querySelector("div#container");

button.addEventListener("click", showImage);

function showImage() {
    container.classList.toggle('active');
    console.log(container.classList);
}