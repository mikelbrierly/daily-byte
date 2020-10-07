// https://www.wikihow.com/Read-Binary

const sum = (acc, num) => acc + num;

const intFromBin = (binary) => binary.split('')     // convert binary string to array
  .reverse()                                        // reverse so we can take action on it using indexes since binary operates right to left
  .map((currVal, i) => currVal * Math.pow(2, i), 0) // "Multiply each binary digit by two to the power of its place number" - from "how to read binary"
  .reduce(sum);                                     // add up all the values returned from our previous operation

const getMultiplesOfTwo = (max) => {
  const multiples = [1];                   // lowest multiple will alway be 1
  while(multiples[0] * 2 <= max) {         // while the highest potential value in multiples is less than or equal to our integer,
      multiples.unshift(multiples[0] * 2); // keep adding multiples of two
  };
  return multiples;
}

const binFromInt = (int) => {
    const binary = [];                     // collector for final binary number
    const keyMap = getMultiplesOfTwo(int); // create binary keymap for our integer
    keyMap.reduce((acc, currVal) => {      // accumulator starts at 0. keyMap values are highest to lowest
        if((acc + currVal) <= int) {       // if we are less than the value of the integer, we know it is a binary 1
            binary.push(1);                
            return acc + currVal;          // return this so reduce() maintains a reference to the accumulator (aka acc = acc + currVal)
        } else {
            binary.push(0);                // if we make it here, the summed value of our current with the accumulator was too much, so it is a binary 0 
        }
        return acc;                        // acc will not have changed in this instance
         
    }, 0)
    return binary.join('');                // return our final string of two summed binary numbers
}

const binarySum = (first, second) => {
  const firstInt = intFromBin(first);
  const secondInt = intFromBin(second);
  const intSum = sum(firstInt, secondInt); // sum both func results
  return binFromInt(intSum);
}

binarySum('10100001', '10101101');