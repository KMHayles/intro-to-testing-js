// Unit tests for the helloWorld function
// describe('isFive', function() {
//     it('should be a defined function', function() {
//         expect(typeof isFive).toBe('function');
//     });
//     it('should return a true or false when called', function() {
//         expect(typeof isFive()).toBe('boolean');
//     });
//     it('should return true when passed 5', function() {
//         expect(isFive(5)).toBe(true);
//     });
//     it('should return false when passed "5"', function() {
//         expect(isFive("5")).toBe(false);
//     });
// });

// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });

// describe('sayHello', function(){
//     it('should be a defined function', function() {
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', function(){
//         expect(typeof sayHello()).toBe('string');
//     });
//     it('should return the string "Hello, Jane!" when executed', function() {
//         expect(sayHello("Jane")).toBe("Hello, Jane!");
//     });
//     it('should return the string "Hello, Alex!" when executed', function() {
//         expect(sayHello("Alex")).toBe("Hello, Alex!");
//     });
//     it('should return the string "Hello, Pat!" when executed', function() {
//         expect(sayHello("Pat")).toBe("Hello, Pat!");
//     });
//     it('should return the string "Hello, True!" when executed', function() {
//         expect(sayHello(true)).toBe("Hello, World!");
//     });
//     it('should return the string "Hello, False!" when executed', function() {
//         expect(sayHello(false)).toBe("Hello, World!");
//     });
//     it('should return object passed "null"', function() {
//         expect(sayHello("null")).toBe('true');
//     });
// });

// describe('isEven', function() {
//     it('should be a defined function', function() {
//       expect(typeof isEven).toBe('function');
//     });
//     it('should return a boolean when called no matter what input', function() {
//       expect(typeof isEven('boolean')).toBe('boolean');
//     });
//     it('should return true if the input is even', function() {
//       expect(isEven(2)).toBe(true);
//     });
//     it("should return false if the is not even ", function() {
//       expect(isEven(3)).toBe(false);
//     });
//     it("should return false if passed a string", function() {
//         expect(isEven('banana')).toBe(false);
//     });
//     it('should return false if passed a "boolean"', function() {
//         expect(isEven(true)).toBe(false);
//     });
//     // it("should return false if passed a boolean input", function() {
//     //     expect(isEven(false)).toBe(false);
//     // });  need to readdress
//     it("should return false if passed empty argument", function() {
//         expect(isEven()).toBe(false);
//     });
// });

// describe('isVowel', function() {
//     it('should be a defined function', function() {
//       expect(typeof isVowel).toBe('function');
//     });
//     it('should return a boolean when called no matter what input', function() {
//       expect(typeof isVowel('boolean')).toBe('boolean');
//     });
//     it('should return true if the input is a Vowel', function() {
//       expect(isVowel("a")).toBe(true);
//     });
//     it('should return true if the input is an upper-cased Vowel', function() {
//         expect(isVowel("A")).toBe(true);
//     });
//     it('should return false if the input is not a Vowel', function() {
//         expect(isVowel("y")).toBe(true);
//     });
//     it('should return false if the input IS a "boolean"', function() {
//         expect(isVowel(false)).toBe(true);
//     });
//     it('should return false if the input is empty', function() {
//         expect(isVowel()).toBe(true);
//     });
// });

// describe('addNum', function() {
//     it('should be a defined function', function() {
//       expect(typeof addNum).toBe('function');
//     });
//     it('should return a number value when called no matter what input', function() {
//       expect(typeof addNum('num1','num2' )).toBe('number');
//     });
//     it('should return true if inputs is NaN', function() {
//       expect(addNum("banana", "split")).toBeNaN();
//     });
//     it('should return true if input is NaN', function() {
//         expect(addNum()).toBeNaN();
//     });
// });