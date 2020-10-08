// Given an array of integers, return whether or not two numbers sum to a given target, k.
// Note: you may not sum a number with itself.

// Ex: Given the following...

const a: number[] = [1, 3, 8, 2]; const t: number = 10; // return true (8 + 2)
// const a: number[] = [3, 9, 13, 7]; const t: number = 8; // return false
// const a: number[] = [4, 2, 6, 5, 2]; const t: number = 4; // return true (2 + 2)
// const a: number[] = [200000, 400000, 2124, 666, 5203, 20304]; const t: number = 600000; // return true (200000 + 400000)

const twoSum = (arr: number[], target: number) => {
  let output: boolean | string = false;
  for(let item of arr) {
    const hitTarget: string | number = arr.reduce((acc, val) => acc + val === target ? `true (${acc} + ${val})` : acc, item)
    if(typeof hitTarget !== 'number') {
      output = hitTarget;
      break;
    } 
  }
  return output;
}

twoSum(a, t);