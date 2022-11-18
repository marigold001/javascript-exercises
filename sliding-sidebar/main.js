const listItems = document.querySelectorAll("nav ul li");
const icons = document.querySelectorAll("nav ul li i");
const visitButtons = document.querySelectorAll("nav ul li a.visit--link");

listItems.forEach((item, id) => {
  item.addEventListener("mouseover", function () {
    icons[id].style.transform = "translateX(-100px)";
    icons[id].style.width = 0;
    visitButtons[id].style.transform = "translateX(0%)";
    visitButtons[id].style.opacity = 1;
  });
  item.addEventListener("mouseout", function () {
    icons[id].style.transform = "translate(0)";
    icons[id].style.width = "auto";
    visitButtons[id].style.transform = "translateX(100%)";
    visitButtons[id].style.opacity = 0;
  });
});
