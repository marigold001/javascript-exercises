const listItems = document.querySelectorAll("nav ul li");
const icons = document.querySelectorAll("nav ul li i");
const visitButtons = document.querySelectorAll("nav ul li a.visit--link");

listItems.forEach((item, id) => {
  item.addEventListener("mouseover", function () {
    icons[id].style.display = "none";
    visitButtons[id].style.transform = "translateX(0%)";
    visitButtons[id].style.display = "inline-block";
  });
  item.addEventListener("mouseout", function () {
    icons[id].style.display = "inline-block";
    visitButtons[id].style.transform = "translateX(100%)";
    visitButtons[id].style.display = "none";
  });
});
