// comparing english text with morse code translations using dictionary array
const englishToMorseCode = (englishText) => {
    if(!englishText) return "<i>Invalid input</i>";
    
    const dictionary = [
        ["A", "*-"], ["B", "-***"], ["C", "-*-*"], ["D", "-**"],
        ["E", "*"], ["F", "**-*"], ["G", "--*"], ["H", "****"],
        ["I", "**"], ["J", "*---"], ["K", "-*-"], ["L", "*-**"],
        ["M", "--"], ["N", "-*"], ["O", "---"], ["P", "*--*"],
        ["Q", "--*-"], ["R", "*-*"], ["S", "***"], ["T", "-"],
        ["U", "**-"], ["V", "***-"], ["W", "*--"], ["X", "-**-"],
        ["Y", "-*--"], ["Z", "--**"], [" ", " "]
    ];

    // split english into array, return morse code translation and join back into string
    return englishText.split("").map((character) => {
        for (let i = 0; i < dictionary.length; i++) {
            if(character.toUpperCase() === dictionary[i][0]) {
                return dictionary[i][1];
            }
        }
    }).join("");
}

export default englishToMorseCode; //exporting function for testing