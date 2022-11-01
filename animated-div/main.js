const div = document.querySelector("div");

div.addEventListener("click", animate);

let firstClick = false;
function animate() {
  if (firstClick) {
    // when the windows width is less then divs distance from left it means that the div has exited the viewport in that case stop it from moving
    if (!(window.innerWidth - 150 <= div.getBoundingClientRect().left + 75)) {
      div.style.left = div.getBoundingClientRect().left + 100 + "px";
      console.log(window.innerWidth, div.getBoundingClientRect().left);
    }
  }
  if (!firstClick) {
    div.style.width = 150 + "px";
    div.style.height = 150 + "px";
    div.style.backgroundColor = "brown";
    div.style.lineHeight = 150 + "px";
    div.style.fontSize = 18 + "px";
    firstClick = true;
  }
}
