const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
const displayErrors = document.querySelector("#errors");
let errors = [];


function validateForm(event) {
    event.preventDefault();
    
    let isValid = true;

    const name = document.querySelector("#patients-name").value;
    const nameError = document.querySelector("#name-error");
    const lastName = document.querySelector("#patients-last-name").value;
    const lastNameError = document.querySelector("#last-name-error");
    const age = document.querySelector("#age").value;
    const ageError = document.querySelector("#age-error");
    const sex = document.querySelector("#sex").value;
    const sexError = document.querySelector("#sex-error");
    const email = document.querySelector("#email").value;
    const emailError = document.querySelector("#email-error");
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(name.length == 0 || name.indexOf(" ") >= 0) {
        isValid = false;
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }

    if(lastName.length == 0 || lastName.indexOf(" ") >= 0) {
        isValid = false;
        lastNameError.style.display = "block";
    } else {
        lastNameError.style.display = "none";
    }


    if(age < 18 && !isNaN(age)) {
        isValid = false;
        ageError.style.display = "block";
    } else {
        ageError.style.display = "none";
    }

    if(sex == "") {
        isValid = false;
        sexError.style.display = "block";
    } else {
        sexError.style.display = "none";
    }

    if(!emailExp.test(email)) {
        isValid = false;
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }

    if(isValid) {
        form.submit();
    }

}


