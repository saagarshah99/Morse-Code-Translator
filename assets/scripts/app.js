import {englishToMorseCode} from "./translator.js";

// take english text entered in textbox and pass into translation function when submit is clicked
document.querySelector(".translator__form").addEventListener("submit", (event) => {
    event.preventDefault();

    const englishText = document.querySelector(".translator__text").value;
    const morseTranslation = englishToMorseCode(englishText);
    
    const outputMorse = document.querySelector(".translator__output");
    outputMorse.innerHTML = "<b>Morse Code:</b> " + morseTranslation;
})