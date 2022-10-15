const myH1 = document.querySelector("#display-greeting-message");
const myImage = document.querySelector("#display-time-dependent-image");
const time = prompt("What time is it: 0-24?");

if(time >= 5 && time < 12) {
    myH1.innerHTML = "Good morning, kiddo";
    myImage.src = "./img/good-morning-kiddo.jpg";
    myImage.alt = "Good Morning Kiddo";
} else if (time >= 12 && time < 17) {
    myH1.innerHTML = "Good day to you";
    myImage.src= "./img/good-day-to-you.jpg";
    myImage.alt = "Good Day To You";
} else if (time >= 17 && time < 21) {
    myH1.innerHTML = "Good evening, sir";
    myImage.src = "./img/good-evening-sir.jpg";
    myImage.alt = "Good Evening Sir";
} else if ((time >= 21 && time < 24) || (time >= 1 && time <= 4)){
    myH1.innerHTML = "Good Night, madam";
    myImage.src = "./img/good-night-madam.jpg";
    myImage.alt = "Good Night Madam";
} else if (time == 0 || time == 00 || time == 24) {
    myH1.innerHTML = "Hello, midnight snack";
    myImage.src = "./img/hello-midnight-snack.jpg";
    myImage.alt = "Hello Midnight Snack";
}