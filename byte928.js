// Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

// Ex: Given the following jewels and stones...

let jewels;
let stones;

jewels = "abc"; stones = "ac"; // return 2
// jewels = "Af"; stones = "AaaddfFf"; // return 3
// jewels = "AYOPD"; stones = "ayopd"; // return 0

const sorter = (jewels, stones) => {
  return stones.split('').reduce((acc, val) => {
      return jewels.includes(val) ? acc += 1 : acc;
  }, 0)
}

sorter(jewels, stones);