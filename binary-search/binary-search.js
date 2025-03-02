function binary_search(sortedArray, item) {
  let firstIndex = 0;
  let lastindex = sortedArray.length - 1;

  while (firstIndex <= lastindex) {
    let midIndex = Math.floor((firstIndex + lastindex) / 2);
    console.log(`midIndex: ${midIndex}`);
    if (sortedArray[midIndex] == item) {
      return midIndex;
    }
    if (sortedArray[midIndex] > item) {
      lastindex = midIndex - 1;
    } else {
      firstIndex = midIndex + 1;
    }
  }
  return null;
}
const myArray = Array.from({ length: 1000 }, (_, i) => i + 1);

console.log(`Result: ${binary_search(myArray, 999)}`);
