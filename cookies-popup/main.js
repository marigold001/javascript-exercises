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

const hideButton = document.querySelector("button");
const popup = document.querySelector("#cookie--popup");

hideButton.addEventListener("click", () => {
    setCookie("popup", true, 30);
    popup.style.display = "none";
});

function hide() {
    const cookie = getCookie("popup");
    if(cookie == "true") {
        popup.style.display = "none";
    } else {
        popup.style.display = "flex";
    }
}

hide();