const form = document.querySelector("form");
const subscribe = document.querySelector("input[type='button']");

form.addEventListener("submit", validate);

function validate(event) {
  event.preventDefault();
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValue = form[0].value;
  if (emailRegex.test(emailValue)) {
    setCookie("subscribed", true, 30);
    form.style.display = "none";
  } else {
    return console.log("Invalid email");
  }
}

function hideForm() {
  const cookie = getCookie("subscribed");
  if (cookie == "true") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

hideForm();

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
