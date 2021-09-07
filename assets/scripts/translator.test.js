// importing multiple functions at once
import {englishToMorseCode, checkDictionary, isEmpty, capitaliseIfLetter} from "./translator";


describe("englishToMorseCode() tests", () => {    
    test("Should be able to translate basic words", () => {
        const result = englishToMorseCode("hi");
        const outcome = "******";
        expect(result).toBe(outcome);
    });
    
    test("Should be able to recognise spaces", () => {
        const result = englishToMorseCode("thank you");
        const outcome = "-*****--*-*- -*-----**-";
        expect(result).toBe(outcome);
    });
    
    test("Should be able to translate punctuation", () => {
        const result = englishToMorseCode("okay, thanks");
        const outcome = "----*-*--*----**-- -*****--*-*-***";
        expect(result).toBe(outcome);
    });
    
    test("Should be able to translate numbers", () => {
        const result = englishToMorseCode("123");
        const outcome = "*----**---***--";
        expect(result).toBe(outcome);
    });

    test("Should be able to handle empty strings", () => {
        const result = englishToMorseCode("");
        const outcome = "<i>Invalid input</i>";
        expect(result).toBe(outcome);
    });
});


describe("checkDictionary() tests", () => {    
    test("Should return the morse code from the dictionary for a given character ", () => {
        const result = checkDictionary("S");
        const outcome = "***";
        expect(result).toBe(outcome);
    });
    
    test("Should return the morse code from the dictionary for a given character ", () => {
        const result = checkDictionary("?");
        const outcome = "**--**";
        expect(result).toBe(outcome);
    });
    
});


describe("isEmpty() tests", () => {
    test("Should return true for an empty string", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });
    
    test("Should return false for an empty string", () => {
        const result = isEmpty("Contains text");
        expect(result).toBe(false);
    });
    
    test("Should return true for a string that only contains spaces", () => {
        const result = isEmpty("    ");
        expect(result).toBe(true);
    });
    
    test("Should return false for a string that only contains spaces", () => {
        const result = isEmpty("  contains text  ");
        expect(result).toBe(false);
    });
});



describe("capitaliseIfLetter() tests", () => {
    test("Should capitalise the given lowercase letter", () => {
        const result = capitaliseIfLetter("a");
        expect(result).toBe("A");
    });
    
    test("Non-letters should remain unchanged", () => {
        const result = capitaliseIfLetter("1");
        expect(result).toBe("1");
    });
});