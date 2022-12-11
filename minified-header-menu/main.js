const header = document.querySelector("div#header");
const menu = document.querySelector("i");
const navigation = document.querySelector("nav.mobile");
const logo = document.querySelector("div#header img");

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function () {
        if(window.scrollY > 50) {
            header.classList.add("fixed--top");
            document.body.style.paddingTop = navigation.offsetHeight + "px";
            menu.style.fontSize = 30 + "px";
            logo.style.height = 50 + "px";
        } else {
            header.classList.remove("fixed--top");
            this.document.body.style.paddingTop = 0;
            menu.style.fontSize = 40 + "px";
            logo.style.height = 90 + "px";

        }
    })
})

menu.addEventListener("click", showNavigation);

function showNavigation() {
    navigation.classList.toggle("show");
}