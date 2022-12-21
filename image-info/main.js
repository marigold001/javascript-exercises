const imageText = document.querySelectorAll("img");
const infoOpen = document.querySelectorAll("i.info--open");
const infoClose = document.querySelectorAll("i.info--close");
const text = document.querySelectorAll("div.info--text p");
const infoArea = document.querySelectorAll("div.info--text");

infoOpen.forEach((icon, id) => icon.addEventListener("click", () => {
    showInfo(id)
}));

function showInfo(id) {
    infoArea[id].style.display = "flex";
    const infoAreaHeight = infoArea[id].offsetHeight;
    infoArea[id].style.opacity = 0.6;
    infoOpen[id].style.display = "none";
    infoClose[id].style.display = "block";
    infoClose[id].style.bottom = (infoAreaHeight - infoClose[id].offsetHeight / 2) + "px";
    text[id].innerHTML = imageText[id].alt;
}

infoClose.forEach((icon, id) => icon.addEventListener("click", () => {
    closeInfo(id)
}));

function closeInfo(id) {
    infoArea[id].style.display = "none";
    infoClose[id].style.display = "none";
    infoOpen[id].style.display = "block";
}

