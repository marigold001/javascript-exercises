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

const reg = /^#([0-9A-F]{3}){1,2}$/i;

const name = getCookie("name");

if(name != "") {
    alert("Hello, welcome back " + name + ".");
} else {
    const namePrompt = prompt("Hi, please tell me your name.");
    setCookie("name", namePrompt, 30);
}

const textColor = getCookie("textColor");
if(textColor != "") {
    document.body.style.color = textColor;
} else {
    let textPrompt = prompt("Tell me the text color you would like. You must use hex code, e.g. #fff");
    setCookie("textColor", textPrompt, 30);
    while(reg.test(textPrompt) != true) {
        textPrompt = prompt("Tell me the text color you would like. You must use hex code, e.g. #fff");
    }
    setCookie("textColor", textPrompt, 30);
    document.body.style.color = textPrompt;
}

const backgroundColor = getCookie("backgroundColor");
if(backgroundColor != "") {
    document.body.style.backgroundColor = backgroundColor;
} else {
    let backgroundColorPrompt = prompt("Tell me the background color you would like. You must use hex code, e.g. #fff");
    setCookie("backgroundColor", backgroundColorPrompt, 30);
    while(reg.test(backgroundColorPrompt) != true) {
        backgroundColorPrompt = prompt("Tell me the background color you would like. You must use hex code, e.g. #fff");
    }
    setCookie("backgroundColor", backgroundColorPrompt, 30);
    document.body.style.backgroundColor = backgroundColorPrompt;
}

console.log(userName, textColor, backgroundColor);
