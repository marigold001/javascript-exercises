const imageAltText = document.querySelector("img").alt;
const infoArea = document.querySelector("div#info--text");
const infoOpen = document.querySelector("i#info--open");
const infoClose = document.querySelector("i#info--close");
const text = document.querySelector("div#info--text p");

console.log(imageAltText);

infoOpen.addEventListener("click", showInfo);

function showInfo() {
    infoArea.style.opacity = 0.6;
    infoArea.style.height = "20vh";
    infoOpen.style.opacity = 0;
    infoOpen.style.bottom = "30px";
    infoClose.style.opacity = 1;
    infoClose.style.bottom = "18vh";
    text.innerHTML = imageAltText;
}

infoClose.addEventListener("click", closeInfo);

function closeInfo() {
    infoArea.style.opacity = 0;
    infoArea.style.height = 0;
    infoClose.style.opacity = 0;
    infoClose.style.bottom = "18vh";
    infoOpen.style.opacity = 1;
    infoOpen.style.bottom = "30px";
}