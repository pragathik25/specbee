const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerInner = document.querySelector(".hamburger__inner");
const navMenuSubMenu = document.querySelector(".nav-menu__sub-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

hamburgerInner.addEventListener("click", () => {
    hamburgerInner.classList.toggle("active");
    navMenuSubMenu.classList.toggle("active");
})
