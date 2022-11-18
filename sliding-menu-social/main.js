const listItems = document.querySelectorAll("nav ul li");
const textItems = document.querySelectorAll("nav ul li span");

listItems.forEach((listItem, id) => {
    listItems[id].style.transform = "translateX(-" + textItems[id].offsetWidth + "px)";
    listItem.addEventListener("mouseover", () => {
        listItems[id].style.transform = "translateX(0)";
    })

    listItem.addEventListener("mouseout", () => {
        listItems[id].style.transform = "translateX(-" + textItems[id].offsetWidth + "px)";
    })
})


