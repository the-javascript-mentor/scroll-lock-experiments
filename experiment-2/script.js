const menuContainer = document.getElementById("menuContainer");
const menuButton = document.getElementById("menuButton");
const main = document.querySelector("main");

menuButton.addEventListener("click", () => {
  menuContainer.classList.toggle("visible");
  const allFocusableElementsInFocusLock = [
    ...main.querySelectorAll("a,button,input"),
  ];
  if (menuContainer.classList.contains("visible")) {
    allFocusableElementsInFocusLock.forEach((element) => {
      element.tabIndex = -1;
    });
  } else {
    allFocusableElementsInFocusLock.forEach((element) => {
      element.removeAttribute("tabIndex");
    });
  }
});
