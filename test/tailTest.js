const assertEqual = require('../assertEqual');
const tail = require('../tail');

//tests
const words = ["That's what", "she", "said"];
tail(words);
assertEqual(words.length, 3); // => T (OG array not modified);
assertEqual(words[0], "That's what"); // => T (OG array not modified);
assertEqual(words[2], "said"); // => T (OG array not modified);

const words2 = ["Yo Yo"];
console.log(tail(words2));
let testWords2 = tail(words2);
assertEqual(testWords2[0], "Yo Yo"); // => F (empty array will return undefined in assertEqual check)

const words3 = [];
console.log(tail(words3)); // => returns empty array

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"



