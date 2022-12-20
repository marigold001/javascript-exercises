const openIcon = document.querySelector("i.open");
const closeIcon = document.querySelector("i.close");
const menu = document.querySelector(".hide--menu");
const wrapper = document.querySelector(".wrapper");
const main = document.querySelector("main");

main.style.paddingTop = wrapper.offsetHeight + "px";

openIcon.addEventListener("click", showMenu);

function showMenu() {
  menu.classList.toggle("reveal");

  if (closeIcon.style.opacity == 0) {
    closeIcon.style.opacity = 1;
    closeIcon.style.transform = "translate(-50%, -50%) rotate(-180deg)";
    openIcon.style.opacity = 0;
    openIcon.style.transform = "translate(-50%, -50%) rotate(-180deg)";
  } else {
    closeIcon.style.opacity = 0;
    closeIcon.style.transform = "translate(-50%, -50%) rotate(0deg)";
    openIcon.style.opacity = 1;
    openIcon.style.transform = "translate(-50%, -50%) rotate(0deg)";

  }
}
