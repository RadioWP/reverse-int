module.exports = function reverse(n) {

  n = Math.abs(n);
  let reversedInteger = n.toString().split('').reverse().join('');
  return +reversedInteger;

}
