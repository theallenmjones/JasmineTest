const year = 2023; 
describe( "Get year dates", () => {



    beforeEach(() => {
        year += 3;
    })
    
    it("should be in the next 3 years", () => {
        expect(year).toBe(2026);
    });
    
    
    });