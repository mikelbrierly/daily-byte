// Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.

// Ex: Given the following arrays...

//     const nums1 = [2, 4, 4, 2]; const nums2 = [2, 4]; // return [2, 4]
//     const nums1 = [1, 2, 3, 3]; const nums2 = [3, 3]; // return [3]
//     const nums1 = [2, 4, 6, 8]; const nums2 = [1, 3, 5, 7]; // return []

const intersection = (arr1, arr2) => {
  let shortest = arr1.length < arr2.length ? arr1 : arr2;
  const longest = arr1.length > arr2.length ? arr1 : arr2;
  if (shortest === longest) shortest = arr1;
  const intersection = shortest.map(item => longest.includes(item) ? item : false);
  return !intersection[0] ? [] : [...new Set(intersection)];
}

intersection(nums1, nums2);