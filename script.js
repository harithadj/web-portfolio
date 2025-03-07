/* script.js */
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.style.left = "0";
});

closeBtn.addEventListener("click", () => {
    menu.style.left = "-100%";
});
