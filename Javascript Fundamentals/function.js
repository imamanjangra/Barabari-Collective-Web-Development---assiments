
// Function to calculate area of rectangle

function rectangleArea(length, breadth) {
    return length * breadth;
}

// console.log("Area of Rectangle:", rectangleArea(10, 5));


// Function to check business profitability

function checkProfit(revenue, expenses) {

    if (revenue > expenses) {
        return "Business is profitable";
    }
    else {
        return "Business is not profitable";
    }

}

// console.log(checkProfit(50000, 30000));


// Function to check character type

function checkCharacter(char) {

    if (char >= 'A' && char <= 'Z') {
        return "Capital letter";
    }
    else if (char >= 'a' && char <= 'z') {
        return "Small letter";
    }
    else {
        return "Not a letter";
    }

}

// console.log(checkCharacter("A"));


// Function to check value is number or string

function checkValue(value) {

    if (typeof value === "number") {
        return "Value is a number";
    }
    else if (typeof value === "string") {
        return "Value is a string";
    }
    else {
        return "Other type";
    }

}

// console.log(checkValue(100));


// Function to check prime number

function checkPrime(number) {

    if (number <= 1) {
        return "Not a prime number";
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return "Not a prime number";
        }

    }

    return "Prime number";

}

// console.log(checkPrime(7));


// Function to return data type

function getType(value) {
    return typeof value;
}

console.log(getType("Hello"));


// Function to calculate triangle area

function triangleArea(base, height) {

    return (base * height) / 2;

}

console.log("Area of Triangle:", triangleArea(10, 5));


// Function to find greater number

function greaterNumber(a, b) {

    if (a > b) {
        return `${a} is greater`;
    }
    else if (b > a) {
        return `${b} is greater`;
    }
    else {
        return "Both numbers are equal";
    }

}

console.log(greaterNumber(20, 15));


// Function that prints its own name

function printFunctionName() {
    console.log("printFunctionName");
}

printFunctionName();



// Task 1: Arrow Function


const greetUser = (name = "Guest") => {
    return `Hello, ${name}!`;
};

console.log(greetUser("Aman"));
console.log(greetUser());




// Task 2: Convert function to arrow function


const isEven = (num) => {
    return num % 2 === 0;
};

console.log(isEven(10));




// Task 3: Callback Functions


function performOperation(a, b, operation) {

    return operation(a, b);

}


const add = (a, b) => {
    return a + b;
};


const subtract = (a, b) => {
    return a - b;
};


const multiply = (a, b) => {
    return a * b;
};



console.log(performOperation(5, 3, add));       // 8
console.log(performOperation(5, 3, subtract));  // 2
console.log(performOperation(5, 3, multiply));  // 15