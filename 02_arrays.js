// ?Q1. Add an element "orange" at the end of this array:

// let fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits);

// ?Q2. Remove the first element from the array:

// let cities = ["Delhi", "Mumbai", "Pune"];
// cities.shift();
// console.log(cities);

// ?Q3. Double each number in this array using map():

// let numbers = [1, 2, 3, 4, 5];

// let double = numbers.map((curElem) => {
//     return curElem * 2;
// })
// console.log(double);

// ?Q4. Filter out only even numbers:

// let nums = [1, 2, 3, 4, 5, 6];
// let even = nums.filter((curElem) => {
//     return curElem % 2 === 0;
// })
// console.log(even);


// ?Q5. Return the first number greater than 10 using find():

// let arr = [3, 9, 12, 4, 7];
// let newarr = arr.find(arr => arr > 10)

// console.log(newarr);
// console.log(arr);

// ?Q6. Check if all elements are greater than 0 using every():

// let items = [5, 12, 18, 7];
// let arr = items.every(items => items > 0);
// console.log(arr);

// ?Q7. Check if any number is negative using some():

// let values = [4, -2, 0, 9];
// let arr = values.some(values => values < 0)
// console.log(arr);

// ?Q8. Convert array of strings to one string using join():

// let words = ["I", "love", "coding"];
// let joinarr = words.join(" ")
// console.log(joinarr);

// ?Q9. Sum all numbers using reduce():

// let points = [10, 20, 30];

// let sum = points.reduce((acc, curElem) => {
//     return acc + curElem;
// }, 0)
// console.log(sum);

// ?Q10. Remove "banana" from the array:

// let fruits = ["apple", "banana", "mango"];
// let newarr = fruits.splice(1, 1)
// console.log(fruits);

//  ?Q11. Return the square of all even numbers in an array

// let nums = [1, 2, 3, 4, 5, 6];
// let newarr = nums.map((curElem) => {
//     return curElem % 2 === 0 && curElem * curElem;
// })
// console.log(newarr);

// ✅ Solution — Use .filter() + .map() chaining:

// let newarr = nums.filter((curElem) => curElem % 2 === 0).map((curElem) => curElem * curElem)
// console.log(newarr);

// ?Q12. Check if all numbers in the array are greater than 10

// let nums = [12, 15, 20, 11];
// let newarr = nums.every(nums => nums > 10)
// console.log(newarr);

// ?Q13. Find the first string that starts with "A"

// let names = ["Raju", "Amit", "Ankit", "Ramesh"];
// let newarr = names.find(names => names.startsWith("A"))

// console.log(newarr);

// ?Q14. Create a new array with only the lengths of each word

// let words = ["apple", "banana", "kiwi"];
// let newarr = words.map((curElem) => {
//     return curElem.length;
// })
// console.log(newarr);

//  ?Q15. Sum all odd numbers using reduce()

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

// ?Q16. Check if at least one number is divisible by 7

// let nums = [13, 21, 45, 70];
// Expected: true

// let newarr = nums.some(nums => nums % 7 === 0)
// console.log(newarr);


// ?Q17. Sort an array of strings by length (ascending)

// let arr = ["elephant", "dog", "cat", "hippopotamus"];
// Expected: ["dog", "cat", "elephant", "hippopotamus"]

// let newarr = arr.sort((a, b) => a.length - b.length);
// console.log(newarr);


// ?Q18. Remove all falsy values from array (filter)

// let arr = [0, "hello", false, null, 42, "", undefined];

// Expected: ["hello", 42]

// let newarr = arr.filter((curElem) => {
//     return curElem;
// })
// console.log(newarr);


// ?Q19. Count how many times each item appears

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



// ?Q20. Capitalize the first letter of each word in a string.
// Input: "hello world" → Output: "Hello World"
// let arr = "hello world";
// let newarr = arr.split(" ");

// let str = newarr.map((curElem) => curElem[0].toUpperCase() + curElem.slice(1)).join(" ")
// console.log(str);


// ?Q21. Convert an array of key-value pair arrays into an object.
// Input: [["name", "Amrit"], ["age", 24]] → Output: { name: "Amrit", age: 24 }

// let arr = [["name", "Amrit"], ["age", 24]];
// let result = {};

// arr.forEach(([key, value]) =>
//     result[key] = value)
// console.log(result);

// ?Q22. Create a function that flattens a nested array.
// Input: [1, [2, [3, 4]], 5] → Output: [1, 2, 3, 4, 5]

// let arr = [1, [2, [3, 4]], 5];

// let newarr = arr.flat(Infinity)
// console.log(newarr);

// ?Q23. Count the number of vowels in a given string.
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

// ?Q24. Given a string with numbers, extract all digits and return as an array.
// Input: "a1b2c3" → Output: [1, 2, 3]

// let str = "a1b2c3"
// let newstr = str.split("");
// newstr = newstr.filter((curElem) => !isNaN(curElem) && curElem !== " ")
// newstr = newstr.map(Number)
// console.log(newstr);

// "a" → isNaN("a") = true → !true = false → skip

// "1" → isNaN("1") = false → !false = true → keep

// ?Q25. Write a function that checks whether two strings are anagrams.
// Input: "listen" and "silent" → Output: true

// let input = "listen,silent";
// let newinput = input.split(",");


// let newstr = newinput.map((curElem) => {
//     return curElem.split("").sort().join("")
// });
// if (newstr[0] === newstr[1]) {
//     console.log("Yes it's anagram");

// } else {
//     console.log("No it's not anagram");

// }


// ?Q26. Create an object from two arrays: one for keys and one for values.
// Input: ["name", "age"] and ["John", 30] → Output: { name: "John", age: 30 }

// let key = ["name", "age"]
// let value = ["John", 30]
// let obj = Object.fromEntries(key.map((key, index) => [key, value[index]]))
// console.log(obj);


// ?Q27. Write a function that removes duplicate values from an array and returns the result.
// Input: [1, 2, 2, 3, 4, 4, 5] → Output: [1, 2, 3, 4, 5]

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let newarr = [...new Set(arr)]
// console.log(newarr);

// ?Q28. You’re given an array of user objects. Extract all unique user roles.
// let users = [
//     { name: "Alice", role: "admin" },
//     { name: "Bob", role: "editor" },
//     { name: "Eve", role: "admin" },
// ];
// Expected Output: ["admin", "editor"]

// let roles = users.map((users) => users.role)
// uniqueroles = [...new Set(roles)]
// console.log(uniqueroles);

// ?Q29)Remove all duplicates from an array without using Set.

// Input: [1, 2, 2, 3, 4, 4, 5] → Output: [1, 2, 3, 4, 5]
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let newarr = arr.filter((curElem, index) => arr.indexOf(curElem) == index)
// console.log(newarr);


// ?Q30) Find the second largest number in an array.

// let arr = [10, 50, 60, 30, 80]
// let largest = Math.max(...arr)
// let secondLargest = Math.max(...arr.filter((curElem) => curElem !== largest))
// console.log(secondLargest);

// ?Q31) Find the 3rd largest number in an array.

// DIIFERENT WAY->

// (a - b) → ascending (chhota → bada)

// (b - a) → descending (bada → chhota)

// let arr = [10, 50, 60, 60, 30, 80]
// let newarr = [...new Set(arr)].sort((a, b) => b - a)
// let thirdLargest = newarr[2]
// console.log(thirdLargest);


// ?Q32)Rotate an array by k positions.

// (Right Rotation):

// arr = [1,2,3,4,5], k = 2
// 2 step right rotate karne ke baad →
// [4,5,1,2,3]


// let arr = [1, 2, 3, 4, 5]
// let k = 2;
// let lastPart = arr.slice(-k);
// let firstPart = arr.slice(0, arr.length - k)
// let rotated = lastPart.concat(firstPart)
// console.log(rotated);

//---------------------------------------------------------------------------

// (Left Rotation):

// arr = [1,2,3,4,5], k = 2
// 2 step left rotate karne ke baad →
// [3,4,5,1,2]


// let arr = [1, 2, 3, 4, 5]
// let k = 2;
// let firstPart = arr.slice(0, k)
// let lastPart = arr.slice(k, arr.length)
// let rotated = lastPart.concat(firstPart)
// console.log(rotated);


// ?Q33)Merge two sorted arrays into a single sorted array.

// let arr1 = [1, 3, 10, 5]
// let arr2 = [2, 4, 6, 17]

// Result → [1, 2, 3, 4, 5, 6]
// let newarr = arr1.concat(arr2)
// let result = newarr.sort((a, b) => (a - b));
// console.log(result);


// ?Q34)Count the frequency of each element in an array.

// OUTPUT->
// 1 → 1 time
// 2 → 2 times
// 3 → 3 times



// let arr = [1, 2, 2, 3, 3, 3, 3, 3]
// let result = {};
// let newarr = arr.forEach((curElem) => {
//     if (result[curElem]) {
//         result[curElem] += 1
//     }
//     else {
//         result[curElem] = 1
//     }
// })
// console.log(result);//->OUTPUT={ '1': 1, '2': 2, '3': 5 }

// for (let key in result) {
//     let timesText = result[key] === 1 ? "time" : "times";
//     console.log(`${key} → ${result[key]} ${timesText}`);
// }



// ?Q35) TWO SUM -leedCode

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// let nums = [2, 7, 11, 15]
// let target = 9;


// nums.forEach((curELem, index) => {
//     let need = target - curELem;
//     if (nums.includes(need)) {
//         console.log(index, nums.indexOf(need));


//     }

// })



// ?Q36 Move all zeros to the end of the array.


// arr=[0, 1, 9, 8, 4, 0, 0, 2, 7, 0] -> OUTPUT=[1, 9, 8, 4, 2, 7, 0, 0, 0, 0]

// let arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0]
// let nonZero = arr.filter((curElem) => curElem !== 0)
// let zeroarr = arr.filter((curElem) => curElem === 0)

// let result = nonZero.concat(zeroarr)
// console.log(result);


// ?Q37)Find all pairs in an array whose sum equals a target number.

// let arr = [2, 7, 11, 15]
// let target = 9
// let newarr = arr.forEach((curElem, index) => {
//     let need = target - curElem;
//     if (arr.includes(need)) {
//         console.log(index, arr.indexOf(need));

//     }
// })

// ?Q38)Check if an array is a subset of another array.


// let arr1 = [1, 3, 4, 6]
// let arr2 = [1, 2, 3, 4, 5]
// let isSubset = true;

// let newarrr = arr1.forEach((curElem) => {
//     if (!arr2.includes(curElem)) {
//         isSubset = false;

//     }
// })
// if (isSubset) {
//     console.log("arr1 is a subset of arr2");
// } else {
//     console.log("arr1 is NOT a subset of arr2");
// }


// ?Q39)Find the intersection of two arrays.

// arr1 = [1, 2, 3, 4]
// arr2 = [3, 4, 5, 6]
// Common elements = [3, 4]

// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// let result = [];
// let newarr = arr1.forEach((curElem) => {
//     if (arr2.includes(curElem))
//         result.push(curElem)
// })
// console.log(result);


// ?Q40) Flatten a deeply nested array without using flat().

//  Input: [1, [2, [3, 4]], 5] → Output: [1, 2, 3, 4, 5]

// let arr = [1, [2, [3, 4]], 5];
// let result = [];

// function flattenArray(array) {
//     array.forEach((curElem) => {
// if (Array.isArray(curElem)) {
// Agar element array hai → recursion call
// flattenArray(curElem);
// } else {
// Agar element non-array → result me push
//             result.push(curElem);
//         }
//     })
// }

// Function call
// flattenArray(arr);

// console.log(result);
// Output: [1, 2, 3, 4, 5]


// ?Q41) Find the union of two arrays (unique elements only).
// 👉 Input: [1,2,3], [2,3,4] → Output: [1,2,3,4]

// let arr1 = [1, 2, 3]
// let arr2 = [2, 3, 4]
// let result = []
// // arr1 ke elements add karo
// arr1.forEach((curElem) => {
//     if (!result.includes(curElem)) {
//         result.push(curElem);
//     }
// });

// // arr2 ke elements add karo
// arr2.forEach((curElem) => {
//     if (!result.includes(curElem)) {
//         result.push(curElem);
//     }
// });

// console.log("Union is", result);

// //If you have more than two arrays and don't want to apply forEach on each array separately, just put all the arrays in a single array (let allArr = [arr1, arr2, arr3]). Then, first run a forEach loop on the outer array (allArr), and inside it, run another forEach loop on the inner array (curElem) to access each element.


// ?Q42 Find the longest consecutive sequence in an array.
// 👉 Input: [100,4,200,1,3,2] → Output: 4 (bcoz 1,2,3,4 is longest sequence)

// let arr = [100, 4, 200, 1, 3, 2];
// let maxLength = 0;
// let num = new Set(arr)

// num.forEach((curElem) => {
//     // Check if curElem is sequence start
//     if (!num.has(curElem - 1)) {
//         let Count = 1;
//         let next = curElem + 1;

//         // Count consecutive numbers
//         while (num.has(next)) {
//             Count++;
//             next++
//         }
//         // Update max length
//         if (Count > maxLength) {
//             maxLength = Count;
//         }
//     }


// })
// console.log("Longest consecutive sequence length is", maxLength);

//Set me daalo → sequence start identify → aage consecutive count → max track


//?Q43 Rearrange array in max-min form.
// 👉 Input: [1,2,3,4,5,6] → Output: [6,1,5,2,4,3]

let arr = [1, 2, 3, 4, 5, 6, 7];
let result = [];
let start = 0;
let end = arr.length - 1
while (start <= end) {
    //For Odd length array middle element
    if (start === end) {
        result.push(arr[start])
    } else {
        result.push(arr[end], arr[start])
    }


    start++;
    end--;
}

console.log(result);