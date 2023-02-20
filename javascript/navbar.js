const iconHead = document.querySelector(".icon-head-search");
const researchInput = document.querySelector(".research");
console.log(researchInput);
iconHead.addEventListener("click", function () {
  if (researchInput.style.display === "block") {
    researchInput.style.display = "none";
  } else {
    researchInput.style.display = "block";
  }
});

const btnMenu = document.querySelector(".btn-menu");
const navBarMenu = document.querySelector(".all-page");
function openNav() {
  if (navBarMenu.style.display === "block") {
    navBarMenu.style.display = "none";
  } else {
    navBarMenu.style.display = "block";
  }
}
btnMenu.addEventListener("click", openNav);
