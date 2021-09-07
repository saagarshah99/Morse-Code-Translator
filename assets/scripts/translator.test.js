import { expect } from "@jest/globals";
import englishToMorseCode from "./translator";

// TODO: improve test descriptions

describe("englishToMorseCode() tests", () => {    
    test("Should return ******", () => {
        const result = englishToMorseCode("hi");
        const outcome = "******";
        
        expect(result).toBe(outcome);
    })
    
    test("Should return -*****--*-*- -*-----**-", () => {
        const result = englishToMorseCode("thank you");
        const outcome = "-*****--*-*- -*-----**-";
        
        expect(result).toBe(outcome);
    })
    
    test("Should return translation for punctuation also", () => {
        const result = englishToMorseCode("okay, thanks");
        const outcome = "----*-*--*----**-- -*****--*-*-***";
        
        expect(result).toBe(outcome);
    })

    // TODO: add test for number input
    
    test("Should return <i>Invalid input</i>", () => {
        const result = englishToMorseCode("");
        const outcome = "<i>Invalid input</i>";
        
        expect(result).toBe(outcome);
    })
});