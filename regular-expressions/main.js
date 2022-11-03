const input = document.querySelector("#is-alphanumeric");
const span = document.querySelector("#show-if-alphanumeric");

input.addEventListener("change", isAlphaNumeric);

function isAlphaNumeric() {
    const regEx = /^[a-zA-Z0-9]+$/;
    if(regEx.test(input.value)) {
        span.innerHTML = true;
    } else {
        span.innerHTML = false;
    }
}

const submit = document.getElementById("submit");

submit.addEventListener("click", replace);
function replace() {
    let textarea = document.querySelector("textarea[name='text']");
    let searchInput = document.querySelector("input[name='search']");
    let replaceInput = document.querySelector("input[name='replace']");

    let searchInputValue = searchInput.value;
    let regEx = new RegExp(searchInputValue, "gi");

    let textareaValue = textarea.value;
    let replaceInputValue = replaceInput.value;
    let replaced = textareaValue.replace(regEx, replaceInputValue);

    textarea.value = replaced;
    searchInput.value = "";
    replaceInput.value = "";
}

function isUppercase(string) {
    const regEx = /^[A-Z]/;
    if(regEx.test(string)) {
        return true;
    } else {
        return false;
    }
}

console.log(isUppercase("Neven"));
console.log(isUppercase("neven"));

const string = " One Two Three Four Five Six ";

function countWords(string) {
    // exclude start and end whitespace
    string = string.replace(/(^\s*)|(\s*$)/gi,"");
    // convert two or more spaces into one
    string = string.replace(/[  ]{2,}/gi," ");
    // exclude newline with a start spacing
    string = string.replace(/\n /, "\n");
    return string.split(" ").length;
}

console.log(countWords(string));

function isCreditCard(number) {
    const regEx = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    if(regEx.test(number)) {
        return true;
    } else {
        return false;
    }
}

console.log(isCreditCard("378282246310006"));
console.log(isCreditCard("37828224630006"));

function isHex(color) {
    const regEx = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    if(regEx.test(color)) {
        return true;
    } else {
        return false;
    }
}

console.log(isHex("#fff"));
console.log(isHex("#ggg"));

function thousandsSepartor(number) {
    let numberSplit = number.toString().split('.');
    numberSplit[0] = numberSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberSplit.join('.');
}

console.log(thousandsSepartor(3000));
console.log(thousandsSepartor(3000));
console.log(thousandsSepartor(300000000.00));


