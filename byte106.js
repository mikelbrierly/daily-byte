// Given two strings representing sentences, 
// return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). 
// You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

// Ex: given the following strings...

// const sentence1 = "the quick"; const sentence2 = "brown fox"; // return ["the", "quick", "brown", "fox"]
const sentence1 = "the tortoise beat the haire"; const sentence2 = "the tortoise lost to the haire"; // return ["beat", "to", "lost"]
// const sentence1 = "copper coffee pot"; const sentence2 = "hot coffee pot"; // return ["copper", "hot"]


const uncommonWords = (sentence1, sentence2) => {
    const compound = [...[...new Set(sentence1.split(' '))], ...[...new Set(sentence2.split(' '))]];
    return compound.filter((item, index, arr) => {
        if(arr.indexOf(item) === index && [...arr].reverse().indexOf(item) === ((arr.length -1) - arr.indexOf(item))) return item;
    });
}

uncommonWords(sentence1, sentence2);