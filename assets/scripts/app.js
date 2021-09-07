import englishToMorseCode from "./translator.js";

// take english text entered in textbox and pass into translation function when submit is clicked
document.querySelector(".translator").addEventListener("submit", (event) => {
    event.preventDefault();

    const englishText = document.querySelector(".translator__text");
    const morseTranslation =  englishToMorseCode(englishText.value);
    
    const morseOutput = document.querySelector(".morse-code");
    morseOutput.innerHTML = "<b>Morse Code:</b> " + morseTranslation;
})