const tooltips = document.querySelectorAll("a[data-tooltip]");
const spanTags = document.querySelectorAll("a[data-tooltip] span")

tooltips.forEach((tooltip, id) => {
  tooltip.addEventListener("mouseover", () => {
    spanTags[id].innerHTML = tooltips[id].dataset.tooltip;
    spanTags[id].style.visibility = "visible";
  });
  tooltip.addEventListener("mouseout", () => {
    spanTags[id].style.visibility = "hidden";
  });
});
