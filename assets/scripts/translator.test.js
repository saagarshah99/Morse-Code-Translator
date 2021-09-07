import { expect } from "@jest/globals";
import englishToMorseCode from "./translator";

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
    
    test("Should return <i>Invalid input</i>", () => {
        const result = englishToMorseCode("");
        const outcome = "<i>Invalid input</i>";
        
        expect(result).toBe(outcome);
    })

    // TODO: write tests for numbers/special characters, then handle that input in the function
});