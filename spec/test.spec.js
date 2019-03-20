// describe('Setting up tests with Jasmine', function(){
//   it('should be true', function() {
//     expect(true).toBe(true);
//   });

//   it('should see the source file', function() {
//     const expected = compliment ();
//     const actual = 'You look nice today';
//     expect(compliment(expected)).toBe(actual);
//   });
// });


// describe("FizzBuzz", () => {
//   it("should return the number 1", () => {
//     expect(fizzbuzz(1)).toBe(1);
//   });

//   it("should return the number 2", () => {
//     expect(fizzbuzz(2)).toBe(2);
//   });

// });

describe ("clock", () => {
  it("should be 0 minutes", () => {
    expect(clock(zeroMinutes)).toBe("off");
  });

  it("should be 23:59 minutes", () => {
    expect(clock(twentyThreeHoursFiftyNineMinutes)).toBe("on");
  });

  it("should be 12:32 minutes", () => {
    expect(clock(twelveHoursThirtyTwoMinutes)).toBe("on, on, off, off");
  });

  

});