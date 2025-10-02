/**
    @param {string}  numbers
    @return {number} sum of numbers
 */
function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    delimiter = numbers[2];
    numbers = numbers.slice(4);
  }
  if (numbers.includes("\n")) {
    numbers = numbers.replace("\n", delimiter);
  }
  if (numbers.includes(delimiter)) {
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed ${negatives.join(",")}`);
    }
    return numArray.reduce((acc, curr) => acc + curr, 0);
  }
  return parseInt(numbers);
}

module.exports = add;
