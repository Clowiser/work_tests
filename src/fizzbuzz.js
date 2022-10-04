export function fizzBuzz(n) {
  let result = n;

  if (n % 3 === 0) {
    result = "fizz";
    if (n % 5 === 0) {
      result += "buzz";
    }
  } else if (n % 5 === 0) {
    result = "buzz";
  }
  return result;
}

export const modulo = (n) => {
  let x = n;
  if (x % 2 === 0)
  {
    return("pair");
  }
  else
  {
    return("impair");
  }
}

export function loopTest(n) {
  let result = n;
    if (n % 3 === 0)  {
      result = "fizz";
      console.log(result);
    } else if (n % 5 === 0) {
      result = "buzz";
      console.log(result);
    } else if (n % 5 !== 0 || n% 3 !== 0) {
      result = n;
      console.log(result);
    }
    return result;
}