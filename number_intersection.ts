// Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.

// Ex: Given the following arrays...

const nums1: number[] = [2, 4, 4, 2]; const nums2: number[] = [2, 4, 4, 2]; // return [2, 4]
// const nums1 = [1, 2, 3, 3]; const nums2 = [3, 3]; // return [3]
// const nums1 = [2, 4, 6, 8]; const nums2 = [1, 3, 5, 7]; // return []

// ----------------------------

// const longestFirst = (a: number[], b: number[]) => a.length > b.length ? [a, b] : [b, a];

const findIntersection = (arr1: number[], arr2: number[]): number[] => {
  // combo of ideas from the ol' stack overflow
  // the second filter is what I was missing
  // from MDN: the filter() method creates a new array with all elements that pass the test implemented by the provided function.
  return arr1.filter(value => arr2.includes(value)).filter(function (currVal, index, arr) {
    return arr.indexOf(currVal) === index; // extra step to remove duplicates EDIT: just realized this makes it buggy with the given example. lol
  })
}
// findIntersection(...longestFirst(nums1, nums2));
findIntersection(nums1, nums2);
// console.log(findIntersection(nums1, nums2));


// filter syntax
// let newArray = arr.filter(callback(currentValue[, index, [array]]) {
  // return element for newArray, if true
// }[, thisArg]);