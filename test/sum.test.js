// Add the unit tests of the sum function here
import {sum, multiple, divise} from "../src/sum";

test('adds 1 + 2 to equal 3', () => {
    const valueOne = 2;
    const valueTwo = 1;

    // expect(valueOne).toEqual(expect.any(Number));
    // expect(valueTwo).toEqual(expect.any(Number));
    expect(typeof valueOne).toBe('number')
    expect(sum(valueTwo, valueOne)).toBe(3);
});

test('add 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toEqual(4);
});

test('add 2 + 2 to equal 4', () => {
    const value = 2;
    expect(value).toBe(value);
  expect(sum(value, value)).toEqual(4);
});

test('multiple 2 * 3 to equal 6', () => {
 expect(multiple(2, 3)).toEqual(6);
});

test('deux + deux plus grand ou plus petit', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(6);
});

test('diviser 18 par 2', () => {
    expect(divise(18, 2)).toBe(9);
})