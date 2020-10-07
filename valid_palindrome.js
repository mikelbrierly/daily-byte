// Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...
// const str = "abcba"; // return true
// const str = "foobof"; // return true (remove the first 'o', the second 'o', or 'b')
            // "foboof"
            const str = "abccab"; // return false
            //"baccba"
  
  const reverse = str => {
      const reversed = [];
      str.split('').forEach(item => reversed.unshift(item))
      return reversed.join('');
  }
  
  const valPal = strInput => {
      const reversed = reverse(strInput);
      const removalArray = [];
      let removalString = `true (remove `;
  
      if(strInput === reversed) return true;
      
      strInput.split('').forEach((item, index, arr) => {
          if(item !== reversed[index] && (item === reversed[index + 1] || item === reversed[index - 1])) {
              removalArray.push(index);
          }
      })
  
      if(!removalArray.length) return false;
  
      removalArray.forEach((item, index) => {
          removalString += `the '${strInput[item]}' at position ${item + 1}`;
          index === removalArray.length - 1 ? removalString += `)` : removalString += `, or `;
      })
      return removalString;
  }
  
  valPal(str);