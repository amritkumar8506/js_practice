//?Q1) Reverse a string without using split, reverse, or join.

//? 👉 Input: "hello" → Output: "olleh"

// let str = "hello";
// let reverse = "";
// let end = str.length - 1;
// for (let i = end; i >= 0; i--) {
//     reverse += str[i]

// }
// console.log(reverse);


//? Q2) Reverse each word in a string without changing word order.

//?     👉 Input: `"Hello World"` → Output: `"olleH dlroW"`

// let str = "Hello World";
// let reverse = ""
// let newStr = str.split(" ")
// // console.log(newStr);
// let end = newStr.length - 1;
// for (let i = 0; i <= end; i++) {
//     let word = newStr[i];
//     // inner loop to reverse each word
//     for (let j = word.length - 1; j >= 0; j--) {
//         reverse += word[j];
//     }
//     if (i !== newStr.length - 1) {
//         reverse += " "
//     }


// }
// console.log(reverse);


//? Q3)Count the number of words in a sentence.

//?👉 Input: `"Hello World"` → Output: `2 Words`

// let str = "Hello World"
// // let newStr = str.split(" ")
// let count = 0;
// // console.log(newStr);
// str.forEach(() => {

//     count += 1;
// })
// console.log(count);


// ?Q4)Find the most frequent character in a string.

//?👉 Input: `"Hello World"` → Output: "l" (becoz "l" appears 3 times (HIGHEST))


// let str = "Hello World"
// let result = {};
// let maxCount = 0
// let mostFrequentChar = "";

// for (let i = 0; i < str.length; i++) {
//     let char = str[i]
//     if (char === " ") continue;

//     if (result[char]) {
//         result[char] += 1;
//     } else {
//         result[char] = 1;
//     }

//     if (result[char] > maxCount) {
//         maxCount = result[char]
//         mostFrequentChar = char
//     }

// }

// console.log(`${mostFrequentChar} - ${maxCount} Times`);


//? Q5) Convert a sentence to Title Case.

//?👉 Input: "hello world" → Output: "Hello World"

// let str = "hello world from javascript"
// let newStr = str.split(" ")
// // console.log(newStr);
// let titleCase = newStr.map((curElem) => curElem[0].toUpperCase() + curElem.slice(1)).join(" ")
// console.log(titleCase);


//? Q6)Replace all vowels in a string with a specific character.

//? 👉 Input: "hello world",replace vowels with * →  Output: "h*ll* w*rld"

let str = "hello world"
let replace = "*"
let vowel = new Set(['a', 'e', 'i', 'o', 'u']);
let newStr = str.split("")
// console.log(newStr);
let output = newStr.map((curElem) => {
    if (vowel.has(curElem)) {
        curElem = replace
        return replace;
    } else {
        return curElem
    }

})
console.log(output.join(""));












