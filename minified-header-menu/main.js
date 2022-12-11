const navigation = document.querySelector("div#header");

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function () {
        if(window.scrollY > 50) {
            navigation.classList.add("fixed--top");
            document.body.style.paddingTop = navigation.offsetHeight + "px";
        } else {
            navigation.classList.remove("fixed--top");
            this.document.body.style.paddingTop = 0;
        }
    })
})