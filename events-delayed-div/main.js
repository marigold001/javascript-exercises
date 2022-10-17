const div = document.querySelector("div");

setTimeout(showDiv, 3000);
function showDiv() {
  div.style.display = "block";
}

div.addEventListener("click", centerDiv);
function centerDiv(e) {
  e.target.style.top = (window.innerHeight / 2) - 100 + "px";
  e.target.style.left = (window.innerWidth / 2) - 100 + "px";
}
