module.exports = function reverse(n) {

  n = Math.abs(n);
  let reversedInteger = n.toString().split('').reverse().join('');
  return +reversedInteger;

}

// The solution of the Reverse Int task:

//1. Convert number to an absolute value using the Math.abs() method;
//2. Convert absolute value to a string using the toString() method;
//3. Split a string into an array of substrings using the split() method;
//4. Reverse the order of the array elements using the reverse() method;
//5. Combine all elements of the array into a new string using the join() method;
//6. Convert the string to a number using the unary plus (+) operator;
