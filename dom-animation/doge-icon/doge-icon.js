document.body.addEventListener("mousemove", moveDoge);
const dogeIcon = document.querySelector("img");

function moveDoge(event) {
  const x = event.screenX;
  const y = event.screenY;
  dogeIcon.style.left = x - 50 + "px";
  dogeIcon.style.top = y - 150 + "px";
}
