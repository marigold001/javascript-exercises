const enlargeButton = document.querySelector("#enlarge");
const reduceButton = document.querySelector("#reduce");
const body = document.body;

enlargeButton.addEventListener("click", enlarge);
reduceButton.addEventListener("click", reduce);

function enlarge(event) {
    let button = event.target;
    button.value = +getCookie("fontSize") + 20;
    let value = button.value;
    body.style.fontSize = value + "%";
    setCookie("fontSize", value, 10);
}

function reduce(event) {
  let button = event.target;
  button.value = +getCookie("fontSize") - 20;
  let value = button.value;
  body.style.fontSize = value + "%";
  setCookie("fontSize", value, 10);
}

function setFontSize() {
    getCookie("fontSize");
    body.style.fontSize = getCookie("fontSize") + "%";
}

setFontSize();

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
