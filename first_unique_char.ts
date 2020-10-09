// Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

// Ex: Given the following strings...

// const str = "abcdefabghij"; // return 2
// const str = "thedailybyte"; // return 1
// const str = "developer"; // return 0
const str = "aaa"; // return -1

const uniqueChar = (str: string): number => {
  const rev = str.split('').reverse().join('');
  for(let i = 0; i < str.length; i++) {
    if((rev.indexOf(str[i]) + i) === (str.length - 1)) return i;
  }
  return -1;
}

console.log(uniqueChar(str));