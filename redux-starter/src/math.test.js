import { isEven } from "./math.js"; 

describe("isEven", () => {
    it("should return true if given an even number", () => {
        // Function Under test (SUT)
        const result = isEven(2);
        expect(result).toEqual(true);
    });
    
    it("should return false if given an odd number", () => {
        // Function Under test (SUT)
        const result = isEven(3);
        expect(result).toEqual(false);
    });
});

