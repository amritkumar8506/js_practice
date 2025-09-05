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

let str = "Hello World"
// let newStr = str.split(" ")
let count = 0;
// console.log(newStr);
str.forEach(() => {

    count += 1;
})
console.log(count);







