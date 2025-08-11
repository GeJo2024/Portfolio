const menu = document.querySelector("#menu");
const navLinks = document.querySelector("#links");

menu.addEventListener("click", () => {
    menu.classList.toggle('bx-x');
    navLinks.classList.toggle('active');
});
