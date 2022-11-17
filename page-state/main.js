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

const form = document.querySelector("form");
const reg = /^#([0-9A-F]{3}){1,2}$/i;

// const name = getCookie("name");

// if(name != "") {
//     alert("Hello, welcome back " + name + ".");
// } else {
//     const namePrompt = prompt("Hi, please tell me your name.");
//     setCookie("name", namePrompt, 30);
// }

// const textColor = getCookie("textColor");
// if(textColor != "") {
//     document.body.style.color = textColor;
// } else {
//     let textPrompt = prompt("Tell me the text color you would like. You must use hex code, e.g. #fff");
//     setCookie("textColor", textPrompt, 30);
//     while(reg.test(textPrompt) != true) {
//         textPrompt = prompt("Tell me the text color you would like. You must use hex code, e.g. #fff");
//     }
//     setCookie("textColor", textPrompt, 30);
//     document.body.style.color = textPrompt;
// }

// const backgroundColor = getCookie("backgroundColor");
// if(backgroundColor != "") {
//     document.body.style.backgroundColor = backgroundColor;
// } else {
//     let backgroundColorPrompt = prompt("Tell me the background color you would like. You must use hex code, e.g. #fff");
//     setCookie("backgroundColor", backgroundColorPrompt, 30);
//     while(reg.test(backgroundColorPrompt) != true) {
//         backgroundColorPrompt = prompt("Tell me the background color you would like. You must use hex code, e.g. #fff");
//     }
//     setCookie("backgroundColor", backgroundColorPrompt, 30);
//     document.body.style.backgroundColor = backgroundColorPrompt;
// }

const nameInput = form[1];
const textColorInput = form[2];
const backgroundColorInput = form[3];
const button = document.createElement("button");
const textNode = document.createTextNode("Show form");
button.appendChild(textNode);

function createButton() {
  if (form.style.display == "") {
    button.style.padding = "10px 20px";
    document.body.appendChild(button);
    button.addEventListener("click", showForm);
    function showForm() {
      form.style.display = "flex";
      button.style.display = "none";
    }
  }
}
createButton();


let isValid = false;
form.addEventListener("submit", saveState);

function saveState(event) {
  event.preventDefault();

  if (nameInput.value != "" || nameInput.value != " ") {
    setCookie("name", nameInput.value, 30);
    isValid = true;
  } else {
    isValid = false;
  }

  if (reg.test(textColorInput.value)) {
    setCookie("textColor", textColorInput.value, 30);
    document.body.style.color = textColorInput.value;
    isValid = true;
  } else {
    isValid = false;
  }

  if (reg.test(backgroundColorInput.value)) {
    setCookie("backgroundColor", backgroundColorInput.value, 30);
    document.body.style.backgroundColor = backgroundColorInput.value;
    isValid = true;
  } else {
    isValid = false;
  }

  if (isValid) {
    form.style.display = "none";
    button.style.display = "inline-block";
  }
}

function setStyles() {
  document.body.style.color = getCookie("textColor");
  document.body.style.backgroundColor = getCookie("backgroundColor");
}

setStyles();

function checkCookies() {
  if (
    getCookie("textColor") &&
    getCookie("backgroundColor") &&
    getCookie("name")
  ) {
    alert("Welcome back, " + getCookie("name") + ".");
    form.style.display = "none";
  }
}



checkCookies();
