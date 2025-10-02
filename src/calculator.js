/**
    @param {string}  numbers
    @return {number} sum of numbers
 */
function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let delimiters = [","];
  if (numbers.startsWith("//")) {
    if (numbers[2] === "[") {
      const lastDelimiterIndex = numbers.lastIndexOf("]");
      let ptr = 2;
      delimiters = [];
      while (ptr < lastDelimiterIndex) {
        const nextDelimiterEndIndex = numbers.indexOf("]", ptr);
        delimiters.push(numbers.slice(ptr + 1, nextDelimiterEndIndex));
        ptr = nextDelimiterEndIndex + 1;
      }
      numbers = numbers.slice(lastDelimiterIndex + 2);
    } else {
      delimiters[0] = numbers[2];
      numbers = numbers.slice(4);
    }
  }
  if (numbers.includes("\n")) {
    numbers = numbers.replace("\n", delimiters[0]);
  }
  if (numbers.includes(delimiters[0])) {
    let numArray = [];
    if (delimiters.length > 1) {
      const regex = new RegExp(`[${delimiters.join("")}]`, "g");
      numArray = numbers.split(regex).map(Number);
    } else {
      numArray = numbers.split(delimiters[0]).map(Number);
    }
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
