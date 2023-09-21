function findMaxNumber(arr) {
  let max = -Infinity;

  for (const element of arr) {
    console.log(element);
    if (Array.isArray(element)) {
      const nestedMax = findMaxNumber(element);
      if (nestedMax > max) {
        max = nestedMax;
      }
    } else if (element > max) {
      max = element;
    }
  }

  return max;
}

// Test cases
//   console.log(findMaxNumber([1, 3, 2])); // Output: 3
//   console.log(findMaxNumber([1, [2, 3, 4], 3])); // Output: 4
console.log(findMaxNumber([1, 2, [6, 5, [6, 4]], 3])); // Output: 6
