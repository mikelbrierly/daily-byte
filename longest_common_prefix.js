// Given an array of strings, return the longest common prefix that is shared amongst all strings.

// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"

const shortest = strings => {
  let currentLength = strings[0].length;
  strings.forEach((item, index) => {
      if (item.length < currentLength) currentLength = item.length;
  });
  return currentLength;
}

const commonString = words => {
  let common = '';
  for(i = 0; i < shortest(words); i++) {
      let acc = '';
      const letterCheck = words.map((word) => {
          return word[i];
      });
      letterCheck.forEach((item, index) => {
          if (letterCheck[index + 1] && item !== letterCheck[index + 1]) return acc = '';
          acc += item;
          if (acc.length === (letterCheck.length) && words[0][0]  ) common += acc[0];
      });
  }
  return common;
}

commonString(["spot", "spotty", "spotted"]);