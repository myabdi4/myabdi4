const logo = document.querySelector(".logo");
const mainContainer = document.querySelector(".mainContainer");
const welcome = document.querySelector(".welcome");
const warning = document.querySelector(".warning");
const description = document.querySelector(".imgdescription");
const aboutme = document.querySelector(".aboutme");
imgdescription.addEventListener("contextmenu", (event) => event.preventDefault());
let clickable = true;
logo.addEventListener("click", () => {
    if (clickable) {
        welcome.classList.toggle("hidden");
        warning.classList.toggle("hidden");
        imgdescription.classList.toggle("show");
        aboutme.classList.toggle("show");
    }
});