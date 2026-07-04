                                                // SECTION 1 — VARIABLES


    // 1) Profile Builder

let fullName = "Aman jangra";
let age = 19;
let currentSemester = 3;
let hasLaptop = true;
let attendancePercentage = 87.5;

console.log(
  fullName + " is " + age + " years old and currently in semester " +
  currentSemester + ". She has a laptop: " + hasLaptop +
  " and her average attendance is " + attendancePercentage + "%."
);

    // 2) Fix the errors

let city = "Delhi";
let graduationYear = 2027;
let isHosteller = true;
let cgpa = 8.5;
let student = {
  course: "BCA",
  collegeName: "IB (P.G) college , panipat"
};

console.log(city);
console.log(graduationYear);
console.log(isHosteller);
console.log(cgpa);
console.log(student);


// explanation

// Value Types:
// city → String
// graduationYear → Number
// isHosteller → Boolean
// cgpa → Number
// student → Object


    // 3) Swap the values

let firstName = "Aman";
let lastName = "jangra";

let temp = firstName;
firstName = lastName;
lastName = temp;

console.log("First Name:", firstName);
console.log("Last Name:", lastName);

    // 4) Valid or Invalid

// invalid
// let 123name = "Ravi";
let name123 = "Ravi"; 

// vaild
let $amount = 2000;

// Invalid
// let var = "keyword";
let variableName = "keyword";

// Invalid
// let is-Eligible = true;
let isEligible = true;

// Valid
let homeTown = "Chennai";




                                                // SECTION 2 — type converstion 

    // 1) Predict the Output

console.log("20" - "5" + 3); // 18
console.log(4 + "6" - 2);    // 44
console.log("8" * 2 + "2");  // 162
console.log("7" + 2 * 3);    // 76

    // 2) Implicit vs Explicit Conversion

//  Part A — Implicit Conversion Examples

//  string concatenation
console.log("10" + 5); // "105"

//  numeric conversion
console.log("10" * 5); // 50


// Part B — Explicit Conversion

console.log(String(10) + String(5)); // "105"

console.log(Number("10") * Number("5")); // 50

    // 3) Mix Data Types

let a = "5";
let b = 2;
let c = true;

console.log(a + b + c);           // "52true"
console.log(Number(a) + b + c);   // 8
console.log(a - c);               // 4
console.log(a * (b + c));         // 15