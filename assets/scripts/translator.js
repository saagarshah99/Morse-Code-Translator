// TODO: improve file/folder structure of JS, see Helen's

// return array containing translations (https://www.sckans.edu/~sireland/radio/code.html)
const getMorseCodeDictionary = () => {
    const dictionary = [
        // letters
        ["A", "*-"], ["B", "-***"], ["C", "-*-*"], ["D", "-**"],
        ["E", "*"], ["F", "**-*"], ["G", "--*"], ["H", "****"],
        ["I", "**"], ["J", "*---"], ["K", "-*-"], ["L", "*-**"],
        ["M", "--"], ["N", "-*"], ["O", "---"], ["P", "*--*"],
        ["Q", "--*-"], ["R", "*-*"], ["S", "***"], ["T", "-"],
        ["U", "**-"], ["V", "***-"], ["W", "*--"], ["X", "-**-"],
        ["Y", "-*--"], ["Z", "--**"],

        // numbers
        ["1", "*----"], ["2", "**---"], ["3", "***--"], ["4", "****-"],
        ["5", "*****"], ["6", "-****"], ["7", "--***"], ["8", "---**"],
        ["9", "----*"], ["0", "-----"],

        // special characters
        [".", "*-*-*-"], [",", "--**--"], [":", "---***"], ["?", "**--**"],
        ["'", "*----*"], ["-", "-****-"], ["/", "-**-*"], ["(", "-*--*-"],
        [")", "-*--*-"], [" ", " "]
    ];

    return dictionary;
}

// return true if an empty string is provided
const containsOnlySpaces = (str) => !/\S/.test(str);
const isEmpty = (str) => !str || containsOnlySpaces(str);

// if the given character is a letter, capitalise it
const processCharacter = (character) => {
    if(/[a-zA-Z]/.test(character)) {
        return character.toUpperCase();
    }
    return character;
}

// comparing english text with morse code translations using dictionary array
const englishToMorseCode = (englishText) => {
    if(isEmpty(englishText)) return "<i>Invalid input</i>";
    
    const dictionary = getMorseCodeDictionary();

    // split english into array, return morse code translation and join back into string
    return englishText.split("").map((character) => {
        for (let i = 0; i < dictionary.length; i++) {
            
            // TODO: single responsiblity principle - additional tests might be needed then
            // TODO: move this to separate function and use regex to only use toUpperCase() if it's a letter
            if(processCharacter(character) === dictionary[i][0]) {
                return dictionary[i][1];
            }
        }
    }).join("");
}

export default englishToMorseCode;