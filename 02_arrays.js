// Q1. Add an element "orange" at the end of this array:

// let fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits);

// Q2. Remove the first element from the array:

// let cities = ["Delhi", "Mumbai", "Pune"];
// cities.shift();
// console.log(cities);

// Q3. Double each number in this array using map():

// let numbers = [1, 2, 3, 4, 5];

// let double = numbers.map((curElem) => {
//     return curElem * 2;
// })
// console.log(double);

// Q4. Filter out only even numbers:

// let nums = [1, 2, 3, 4, 5, 6];
// let even = nums.filter((curElem) => {
//     return curElem % 2 === 0;
// })
// console.log(even);


// Q5. Return the first number greater than 10 using find():

// let arr = [3, 9, 12, 4, 7];
// let newarr = arr.find(arr => arr > 10)

// console.log(newarr);
// console.log(arr);

// Q6. Check if all elements are greater than 0 using every():

// let items = [5, 12, 18, 7];
// let arr = items.every(items => items > 0);
// console.log(arr);

// Q7. Check if any number is negative using some():

// let values = [4, -2, 0, 9];
// let arr = values.some(values => values < 0)
// console.log(arr);

// Q8. Convert array of strings to one string using join():

// let words = ["I", "love", "coding"];
// let joinarr = words.join(" ")
// console.log(joinarr);

// Q9. Sum all numbers using reduce():

// let points = [10, 20, 30];

// let sum = points.reduce((acc, curElem) => {
//     return acc + curElem;
// }, 0)
// console.log(sum);

// Q10. Remove "banana" from the array:

// let fruits = ["apple", "banana", "mango"];
// let newarr = fruits.splice(1, 1)
// console.log(fruits);

//  Q11. Return the square of all even numbers in an array

// let nums = [1, 2, 3, 4, 5, 6];
// let newarr = nums.map((curElem) => {
//     return curElem % 2 === 0 && curElem * curElem;
// })
// console.log(newarr);

// ✅ Solution — Use .filter() + .map() chaining:

// let newarr = nums.filter((curElem) => curElem % 2 === 0).map((curElem) => curElem * curElem)
// console.log(newarr);

// Q12. Check if all numbers in the array are greater than 10

// let nums = [12, 15, 20, 11];
// let newarr = nums.every(nums => nums > 10)
// console.log(newarr);

// Q13. Find the first string that starts with "A"

// let names = ["Raju", "Amit", "Ankit", "Ramesh"];
// let newarr = names.find(names => names.startsWith("A"))

// console.log(newarr);

// Q14. Create a new array with only the lengths of each word

// let words = ["apple", "banana", "kiwi"];
// let newarr = words.map((curElem) => {
//     return curElem.length;
// })
// console.log(newarr);

//  Q15. Sum all odd numbers using reduce()

// let nums = [1, 2, 3, 4, 5];
// Expected: 9 (1 + 3 + 5)

// let newarr = nums.reduce((acc, curElem) => {
//     if (curElem % 2 !== 0) {
//         return acc + curElem;

//     } else {
//         return acc;
//     }
// }, 0)
// console.log(newarr);

// Q16. Check if at least one number is divisible by 7

// let nums = [13, 21, 45, 70];
// Expected: true

// let newarr = nums.some(nums => nums % 7 === 0)
// console.log(newarr);


// Q17. Sort an array of strings by length (ascending)

// let arr = ["elephant", "dog", "cat", "hippopotamus"];
// Expected: ["dog", "cat", "elephant", "hippopotamus"]

// let newarr = arr.sort((a, b) => a.length - b.length);
// console.log(newarr);


// Q18. Remove all falsy values from array (filter)

// let arr = [0, "hello", false, null, 42, "", undefined];

// Expected: ["hello", 42]

// let newarr = arr.filter((curElem) => {
//     return curElem;
// })
// console.log(newarr);


// Q19. Count how many times each item appears

// let fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];
// Expected: { apple: 3, banana: 2, mango: 1 }
// let result = {};
// fruits.forEach((curElem) => {
//     if (result[curElem]) {
//         result[curElem] += 1;
//     }
//     else {
//         result[curElem] = 1
//     }

// })
// console.log(result);



// Q20. Capitalize the first letter of each word in a string.
// Input: "hello world" → Output: "Hello World"
// let arr = "hello world";
// let newarr = arr.split(" ");

// let str = newarr.map((curElem) => curElem[0].toUpperCase() + curElem.slice(1)).join(" ")
// console.log(str);


// Q21. Convert an array of key-value pair arrays into an object.
// Input: [["name", "Amrit"], ["age", 24]] → Output: { name: "Amrit", age: 24 }

// let arr = [["name", "Amrit"], ["age", 24]];
// let result = {};

// arr.forEach(([key, value]) =>
//     result[key] = value)
// console.log(result);

// Q22. Create a function that flattens a nested array.
// Input: [1, [2, [3, 4]], 5] → Output: [1, 2, 3, 4, 5]

// let arr = [1, [2, [3, 4]], 5];

// let newarr = arr.flat(Infinity)
// console.log(newarr);

// Q23. Count the number of vowels in a given string.
// Input: "Javascript"


//FOR OUTPUT => {a:2,i:1}
// let str = "Javascript";
// let newstr = str.split("")
// let result = {};
// const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
// newstr.forEach((curElme) => {
//     if (vowels.has(curElme)) {
//         if (result[curElme]) {
//             result[curElme] += 1;
//         }
//         else {
//             result[curElme] = 1
//         }
//     }
// })
// console.log(result);

//FOR → Output: 3

// let str = "Javascript";
// let newstr = str.split("")
// let Count = 0;
// let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
// newstr.forEach((CurElem) => {
//     if (vowels.has(CurElem)) {
//         Count += 1;
//     }
// })
// console.log(Count);

// Q24. Given a string with numbers, extract all digits and return as an array.
// Input: "a1b2c3" → Output: [1, 2, 3]

let str = "a1b2c3"
let newstr = str.split("");
newstr = newstr.filter((curElem) => !isNaN(curElem) && curElem !== " ")
newstr = newstr.map(Number)
console.log(newstr);






