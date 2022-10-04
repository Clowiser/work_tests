import {fizzBuzz, loopTest, modulo} from "../src/fizzbuzz";

test('should return number on other numbers', () => {
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(7)).toBe(7);
  expect(fizzBuzz(11)).toBe(11);
});

test('should return fizz on multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
  expect(fizzBuzz(6)).toBe('fizz');
});

test('should return buzz on multiples of 5', () => {
  expect(fizzBuzz(5)).toBe('buzz');
  expect(fizzBuzz(10)).toBe('buzz');
});

test('should return fizzbuzz on multiples of both 3 and 5', () => {
  expect(fizzBuzz(15)).toBe('fizzbuzz');
});

test('pair ou impair', () => {
  expect(modulo(46)).toBe('pair');
})

test('multipe 3 or 5', () => {
for(let i = 1; i < 101; i++) {
    if (i%15 === 0 ) {console.log("FizzBuzz")}
    else if(i%3 === 0){ console.log("fizz")}
    else if(i%5 === 0){ console.log("buzz")}
    else { console.log(i)}
  }
})


