import { expect } from "@jest/globals";
import englishToMorseCode from "./translator";

describe("englishToMorseCode() tests", () => {    
    test("Should be able to translate basic words", () => {
        const result = englishToMorseCode("hi");
        const outcome = "******";
        expect(result).toBe(outcome);
    })
    
    test("Should be able to recognise spaces", () => {
        const result = englishToMorseCode("thank you");
        const outcome = "-*****--*-*- -*-----**-";
        expect(result).toBe(outcome);
    })
    
    test("Should be able to translate punctuation", () => {
        const result = englishToMorseCode("okay, thanks");
        const outcome = "----*-*--*----**-- -*****--*-*-***";
        expect(result).toBe(outcome);
    })
    
    test("Should be able to translate numbers", () => {
        const result = englishToMorseCode("123");
        const outcome = "*----**---***--";
        expect(result).toBe(outcome);
    })

    test("Should be able to handle empty strings", () => {
        const result = englishToMorseCode("");
        const outcome = "<i>Invalid input</i>";
        expect(result).toBe(outcome);
    })
});

// TODO: add tests for helper functions, might need to export them