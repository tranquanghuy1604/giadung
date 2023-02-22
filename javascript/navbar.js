const iconHead = document.querySelector(".header__icon-head--search");
const researchInput = document.querySelector(
  ".header__for-user__icon-head__research"
);
console.log(researchInput);
iconHead.addEventListener("click", function () {
  if (researchInput.style.display === "block") {
    researchInput.style.display = "none";
  } else {
    researchInput.style.display = "block";
  }
});

const btnMenu = document.querySelector(
  ".header__for-user__icon-head__btn-menu"
);
const navBarMenu = document.querySelector(".header__all-page");
function openNav() {
  if (navBarMenu.style.display === "block") {
    navBarMenu.style.display = "none";
  } else {
    navBarMenu.style.display = "block";
  }
}
btnMenu.addEventListener("click", openNav);
