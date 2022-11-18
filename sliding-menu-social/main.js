const listItems = document.querySelectorAll("nav ul li");
const textItems = document.querySelectorAll("nav ul li span");
const icons = document.querySelectorAll("nav ul li i");

listItems.forEach((listItem, id) => {
    listItems[id].style.transform = "translateX(-" + textItems[id].offsetWidth + "px)";
    listItem.addEventListener("mouseover", () => {
        listItems[id].style.transform = "translateX(0)";
    })

    listItem.addEventListener("mouseout", () => {
        listItems[id].style.transform = "translateX(-" + textItems[id].offsetWidth + "px)";
    })
})

icons.forEach(icon => {
    icon.style.width = "50px"; 
    icon.style.textAlign = "center"
    icon.style.padding = "5px";
})
