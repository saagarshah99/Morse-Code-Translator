// return array containing translations (https://www.sckans.edu/~sireland/radio/code.html)
const getDictionary = () => {
    return [
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
}



/***********************HELPER FUNCTIONS************************/

// return true if an empty string/string with spaces only is provided
const isEmpty = (str) => !str || !/\S/.test(str);

// if the given character is a letter, capitalise it
const capitaliseIfLetter = (character) => {
    if(/[a-zA-Z]/.test(character)) {
        return character.toUpperCase();
    }
    return character;
}



/***********************MAIN LOGIC************************/

//fetching corrsponding morse code translation from dictionary for current character
const checkDictionary = (character) => {
    const dictionary = getDictionary();
    
    for (let i = 0; i < dictionary.length; i++) {
        if(capitaliseIfLetter(character) === dictionary[i][0]) {
            return dictionary[i][1];
        }
    }
}

// split english into array, return morse code translation and join back into string
const englishToMorseCode = (englishText) => {
    if(isEmpty(englishText)) return "<i>Invalid input</i>";

    return englishText.split("").map((character) => checkDictionary(character)).join("")
}

export {englishToMorseCode, isEmpty, checkDictionary, capitaliseIfLetter};