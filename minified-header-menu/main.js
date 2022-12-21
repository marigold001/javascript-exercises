const header = document.querySelector("div#header");
const menu = document.querySelector("i");
const navigation = document.querySelector("nav.mobile");
const logo = document.querySelector("div#header img");
const main = document.querySelector("main");
const desktopLinks = document.querySelectorAll("#desktop a");
const mobileLinks = document.querySelectorAll("nav.mobile a");

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function () {
        if(window.scrollY > 50) {
            header.classList.add("fixed--top");
            header.style.backgroundColor = "#fff";
            menu.style.fontSize = 30 + "px";
            menu.style.lineHeight = 70 + "px";
            menu.style.color = "#002171";
            logo.style.height = 50 + "px";
            logo.style.marginTop = 10 + "px";
            logo.style.transform = "rotate(360deg) scale(0.8)";
            main.style.paddingTop = header.offsetHeight + "px";
            desktopLinks.forEach(link => link.style.color = "#002171");
            mobileLinks.forEach(link => link.style.color = "#002171");
            const mediaQuery = window.matchMedia('(min-width: 788px)');
            if(mediaQuery.matches) {
                logo.style.marginTop = 0;
            }
        } else {
            header.classList.remove("fixed--top");
            header.style.backgroundColor = "#81d4fa";
            menu.style.fontSize = 40 + "px";
            menu.style.lineHeight = 100 + "px";
            logo.style.height = 90 + "px";
            logo.style.transform = "rotate(0deg) scale(1.2)";
            main.style.paddingTop = 0;
            
            menu.style.color = "#fff";
            desktopLinks.forEach(link => link.style.color = "#fff");
            mobileLinks.forEach(link => link.style.color = "#fff");

        }
    })
})

menu.addEventListener("click", showNavigation);

function showNavigation() {
    navigation.classList.toggle("show");

    navigation.style.top = header.offsetHeight + "px";
}