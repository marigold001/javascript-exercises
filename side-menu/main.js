const spans = document.querySelectorAll("span");

console.log(spans, "Check");

spans.forEach(span => {
    span.style.transform = "translateX(" + span.offsetWidth + "px)";
    console.log(span.offsetWidth);
})