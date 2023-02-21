const logo = document.querySelector(".logo");
const mainContainer = document.querySelector(".mainContainer");
const texttospeech = document.querySelector(".texttospeech");
const projectTwo = document.querySelector(".projectTwo");
const description = document.querySelector(".description");
const aboutme = document.querySelector(".aboutme");
description.addEventListener("contextmenu", (event) => event.preventDefault());
let clickable = true;
 
logo.addEventListener("click", () => {
    if (clickable) {
        texttospeech.classList.toggle("hidden");
        projectTwo.classList.toggle("hidden");
        description.classList.toggle("show");
        aboutme.classList.toggle("show");
    }
});

// Add a click event listener to the button
const helloButton = document.getElementById('hello-button');

helloButton.addEventListener('click', () => {
    // Create a new SpeechSynthesisUtterance object with the text of the button
    const utterance = new SpeechSynthesisUtterance(helloButton.textContent);
    const voices = speechSynthesis.getVoices();
    // Set the voice of the utterance to the first available voice
    utterance.voice = voices[4];
    // Use the SpeechSynthesis API to generate speech from the text
    window.speechSynthesis.speak(utterance);
});