const rangeInput = document.querySelector("input[type='range']");
const showValue = document.querySelector("#show--value");

rangeInput.addEventListener("input", showValues);

function showValues() {
    showValue.innerHTML = rangeInput.value + "$";
}