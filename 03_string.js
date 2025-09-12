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

// let str = "hello world"
// let replace = "*"
// let vowel = new Set(['a', 'e', 'i', 'o', 'u']);
// let newStr = str.split("")
// // console.log(newStr);
// let output = newStr.map((curElem) => {
//     if (vowel.has(curElem)) {
//         curElem = replace
//         return replace;
//     } else {
//         return curElem
//     }

// })
// console.log(output.join(""));


//? Q7) Find all substrings of a string with length k.

//? 👉 Input: String = "abcd", k = 2 →  Output: "ab", "bc", "cd"

// let str = "abcd";
// let k = 2;

// for (let start = 0; start <= str.length - k; start++) {
//     let newStr = str.substring(start, start + k)
//     console.log(newStr);

// }


//? Q8) Check if a string contains unique characters.

//? 👉Input: "hello" -> Output: false → because "l" is repeatin

// let str = "hello"
// isUnique = true
// for (let i = 0; i <= str.length - 1; i++) {
//     for (let j = i + 1; j <= str.length - 1; j++)  //j = i+1 → har pair ek hi baar check hota
//         if (str[i] === str[j]) {
//             isUnique = false
//         }

// }
// console.log(isUnique);



//? Q9) Find the first non-repeating character in a string

//? 👉Input: "aabbccde" -> Output: "d"

// let str = "aabbccde"
// let result = {}

//!FOR...OF()

// for (let char of str) {
//     if (result[char]) {
//         result[char] += 1;
//     } else {
//         result[char] = 1
//     }
// }
// for (let char of str) {
//     if (result[char] === 1) {
//         console.log(char);
//         break;

//     }
// }
// console.log(result);


//!FOR LOOP()

// // Step 1: frequency count
// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (result[char]) {
//         result[char] += 1;
//     } else {
//         result[char] = 1;
//     }
// }

// // Step 2: find first non-repeating character
// let firstUnique = null;
// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (result[char] === 1) {
//         firstUnique = char;
//         break;
//     }
// }

// console.log(firstUnique);



//? Q10)  **Check if a string is a rotation of another string**

//? 👉Input: "abcde", "cdeab" -> Output: "true"

// let str1 = "abcde";
// let str2 = "cdeab";

// let isRotation = false;

// // Dono strings ki length same honi chahiye
// if (str1.length === str2.length) {
//     let n = str1.length;

//     // Har possible rotation try karo
//     for (let i = 0; i < n; i++) {
//         let rotated = "";

//         // Rotate string: start index i se n characters
//         for (let j = 0; j < n; j++) {
//             rotated += str1[(i + j) % n]; //!ye decide karta hai ki string ke end ke baad kaunse character ko pick karna hai:Agar hum (i + j) = 6
//             //!(6 % 5) = 1(Matlab index 6 ko wrap karke 1 bana diya)

//         }

//         // Agar match ho gaya, break karo
//         if (rotated === str2) {
//             isRotation = true;
//             break;
//         }
//     }
// }

// console.log(isRotation); // Output: true





h 