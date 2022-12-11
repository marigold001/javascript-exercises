const navigation = document.querySelector("nav");
const openMenu = document.querySelector("button#open--menu");
const closeMenu = document.querySelector("a#close--menu");
const theList = document.querySelector("nav ul");

openMenu.addEventListener("click", showNavigation);

function showNavigation() {
    navigation.style.visibility = "visible";
    navigation.style.zIndex = 1;
    theList.style.transform = "translateY(0)";
    theList.style.opacity = 1;
    closeMenu.style.visibility = "visible";
}

closeMenu.addEventListener("click", hideNavigation);

function hideNavigation() {
    navigation.style.visibility = "hidden";
    navigation.style.zIndex = 0;
    theList.style.transform = "translateY(-60%)";
    theList.style.opacity = 0;
    closeMenu.style.visibility = "hidden";
}

