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
    if (numbers[2] === "[") {
      const delimiterEndIndex = numbers.indexOf("]");
      delimiter = numbers.slice(3, delimiterEndIndex);
      numbers = numbers.slice(delimiterEndIndex + 2);
    } else {
      delimiter = numbers[2];
      numbers = numbers.slice(4);
    }
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
    return numArray.reduce((acc, curr) => {
      if (curr > 1000) {
        curr = 0;
      }
      return acc + curr;
    }, 0);
  }
  return parseInt(numbers);
}

module.exports = add;
