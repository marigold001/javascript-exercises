const navigationButton = document.querySelector("#show-navigation");
const navigation = document.querySelector("#navigation");
const navigationItems = document.querySelectorAll("li");

navigationButton.addEventListener("mouseover", showNavigation);

function showNavigation() {
  navigation.style.display = "block";
}

navigationButton.addEventListener("mouseout", hideNavigation);

function hideNavigation() {
  navigation.style.display = "none";
}

navigationButton.addEventListener("click", destroyNavigation);
navigationItems.forEach((item) =>
  item.addEventListener("click", destroyNavigation)
);

function destroyNavigation() {
  navigationButton.remove();
  navigation.remove();
}
