

//  program to find maximum between three distinct numbers.


let a = 10;
let b = 25;
let c = 15;

if (a > b && a > c) {
    console.log(a + " is maximum");
} 
else if (b > a && b > c) {
    console.log(b + " is maximum");
} 
else {
    console.log(c + " is maximum");
}


// Check whether a year is leap year or not

let year = 2024;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " is a leap year");
} 
else {
    console.log(year + " is not a leap year");
}


// Check whether a number is even or odd

let number = 7;

if (number % 2 === 0) {
    console.log(number + " is even");
} 
else {
    console.log(number + " is odd");
}


// Check whether a character is alphabet, digit or special character


let ch = "@";

if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
    console.log(ch + " is an alphabet");
}
else if (ch >= '0' && ch <= '9') {
    console.log(ch + " is a digit");
}
else {
    console.log(ch + " is a special character");
}

// Check whether three angles make a triangle


let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

if (angle1 + angle2 + angle3 === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
    console.log("angles can make a triangle");
}
else {
    console.log("angles cannot make a triangle");
}

