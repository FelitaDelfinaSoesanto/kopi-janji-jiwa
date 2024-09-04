// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu di click
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// click diluar sidebar untuk menghilangkan nav hamburg menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
