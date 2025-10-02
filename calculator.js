/**
    @param {string}  numbers
    @return {number} sum of numbers
 */
function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  if (numbers.includes(",")) {
    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((acc, curr) => acc + curr, 0);
  }
  return parseInt(numbers);
}

module.exports = add;
