const header = document.querySelector("div#header");
const menu = document.querySelector("i");
const navigation = document.querySelector("nav.mobile");
const logo = document.querySelector("div#header img");


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function () {
        if(window.scrollY > 50) {
            header.classList.add("fixed--top");
            menu.style.fontSize = 30 + "px";
            menu.style.lineHeight = 70 + "px";
            logo.style.height = 50 + "px";
            logo.style.marginTop = 10 + "px";
            const mediaQuery = window.matchMedia('(min-width: 788px)');
            if(mediaQuery.matches) {
                logo.style.marginTop = 0;
            }
        } else {
            header.classList.remove("fixed--top");
            menu.style.fontSize = 40 + "px";
            menu.style.lineHeight = 100 + "px";
            logo.style.height = 90 + "px";
        }
    })
})

menu.addEventListener("click", showNavigation);

function showNavigation() {
    navigation.classList.toggle("show");

    navigation.style.top = header.offsetHeight + "px";
}