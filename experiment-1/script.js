const menuContainer = document.getElementById("menuContainer");
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");

let isMenuOpen = false;
let bodyScrollPositionLock = window.pageYOffset;

const preventDefault = (e) => {
  e.preventDefault();
};

const preventDefaultForScrollKeys = (e) => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
};

menuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menuContainer.classList.add("visible");
    bodyScrollPositionLock = window.pageYOffset;
  } else {
    menuContainer.classList.remove("visible");
  }
});

document.addEventListener("scroll", (event) => {
  if (isMenuOpen) {
    console.log(`Scrolling window to ${bodyScrollPositionLock}`);
    window.scrollTo(0, bodyScrollPositionLock);
  }
});
