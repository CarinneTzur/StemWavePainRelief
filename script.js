const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

const directions = document.querySelector(".directions");
const directionsButton = document.querySelector(".directions__button");
const directionsMenu = document.querySelector(".directions__menu");

function closeDirections() {
  if (!directionsButton || !directionsMenu) return;
  directionsMenu.hidden = true;
  directionsButton.setAttribute("aria-expanded", "false");
}

directionsButton?.addEventListener("click", () => {
  const isOpening = directionsMenu.hidden;
  directionsMenu.hidden = !isOpening;
  directionsButton.setAttribute("aria-expanded", String(isOpening));
});

document.addEventListener("click", (event) => {
  if (directions && !directions.contains(event.target)) closeDirections();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDirections();
    directionsButton?.focus();
  }
});
