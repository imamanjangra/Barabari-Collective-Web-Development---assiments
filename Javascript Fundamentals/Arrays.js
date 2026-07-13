
//  Array access and length


let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);

console.log("Array length:", fruits.length);

fruits[2] = "Watermelon";

console.log("Updated fruits:", fruits);




// Task 2: Array Methods


let numbers = [12, 15, 20, 25, 30];

numbers.push(35);

console.log("After push:", numbers);

numbers.pop();

console.log("After pop:", numbers);

console.log("Index of 20:", numbers.indexOf(20));




// Task 3: Array Reference and Slice


let arr1 = [10, 20, 30, 40];


// Part 1

let arr2 = arr1;

arr2[1] = 99;

console.log("arr1:", arr1);
console.log("arr2:", arr2);


// Explanation:
// arr1 and arr2 point to the same array in memory.
// Changing arr2 also changes arr1.



// Part 2

let arr3 = arr1.slice();

arr3[3] = 88;

console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3);


// Explanation:
// slice creates a shallow copy.
// Changes in arr3 do not affect arr1 or arr2.




// Task 4: Flatten Nested Array


let arr = [1, [2, 3], [4, [5, 6]]];

let flatArray = [];

for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {

        for (let j = 0; j < arr[i].length; j++) {

            if (Array.isArray(arr[i][j])) {

                for (let k = 0; k < arr[i][j].length; k++) {
                    flatArray.push(arr[i][j][k]);
                }

            }
            else {
                flatArray.push(arr[i][j]);
            }

        }

    }
    else {
        flatArray.push(arr[i]);
    }

}

console.log(flatArray);




// Task 5: Extract Middle Three Colors


let colors = ["red", "blue", "green", "yellow", "purple", "black"];

let middleColors = colors.slice(2, 5);

console.log(middleColors);


// Explanation:
// slice creates a new array and does not modify original array.



// Task 6: Remove and Insert Items



let items = ["pen", "pencil", "eraser", "scale", "sharpener"];

items.splice(2, 2, "marker", "ruler");

console.log(items);




// Task 7: Replace Values


let scores = [12, 25, 37, 48, 59, 63, 77];


// Replace last three values with 0

scores.splice(4, 3, 0, 0, 0);

console.log(scores);


// Overwrite entire array

scores.fill("N/A");

console.log(scores);




// Task 8: Filter Numbers


let nums = [11, 22, 35, 42, 59, 60, 73, 88];


// Numbers greater than or equal to 50

let greaterNumbers = nums.filter((num) => num >= 50);

console.log(">= 50:", greaterNumbers);


// Function to check even number

function isEven(num) {
    return num % 2 === 0;
}


let evenNumbers = nums.filter(isEven);

console.log("Even numbers:", evenNumbers);




// Task 9: Loop Nested Array


let cube = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];


for (let i = 0; i < cube.length; i++) {

    for (let j = 0; j < cube[i].length; j++) {

        for (let k = 0; k < cube[i][j].length; k++) {

            console.log(cube[i][j][k]);

        }

    }

}