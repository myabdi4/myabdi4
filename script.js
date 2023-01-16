const logo = document.querySelector('.logo');
const mainContainer = document.querySelector('.mainContainer');
const welcome = document.querySelector('.welcome');
const warning = document.querySelector('.warning');
const description = document.querySelector('.description');
const aboutme = document.querySelector('.aboutme');
description.addEventListener('contextmenu', event => event.preventDefault());
let clickable = true;
logo.addEventListener('click', () => {
    if (clickable) {
        welcome.classList.toggle('hidden');
        warning.classList.toggle('hidden');
        description.classList.toggle('show');
        aboutme.classList.toggle('show');
    }
});

// // second click
// mainContainer.addEventListener('click', () => {
//     if (clickable) {
//         welcome.classList.toggle('hidden');
//         warning.classList.toggle('hidden');
//         description.classList.toggle('show');
//         aboutme.classList.toggle('show');
//     }
// });