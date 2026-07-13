// FizzBuzz (1 to 100)

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


// Find GCD using for loop

function findGCD(num1, num2) {

    let gcd = 1;

    for (let i = 1; i <= num1 && i <= num2; i++) {

        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }

    }

    console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);
}




// findGCD(12, 18);


// Sum of multiples of 3 and 5 below 1000

let sum = 0;

for (let i = 1; i < 1000; i++) {

    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }

}


console.log(`The sum of all multiples of 3 and 5 below 1000 is ${sum}`);


// Pattern 1

for (let i = 5; i >= 1; i--) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

// Pattern 2

let num = 1;

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {

        pattern += num + " ";
        num++;

    }

    console.log(pattern);
}

// Pattern 3

let count = 1;

for (let i = 5; i >= 1; i--) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {

        pattern += count + " ";
        count++;

    }

    console.log(pattern);
}

// Pattern 4


let value = 1;

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {

        pattern += value + " ";
        value++;

    }

    console.log(pattern);
}

// pattern 5

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let space = 5; space > i; space--) {
        pattern += " ";
    }

    for (let star = 1; star <= (2 * i - 1); star++) {
        pattern += "*";
    }

    console.log(pattern);
}


// Pattern 6

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    // left numbers
    for (let j = 5; j > i; j--) {
        pattern += "1";
    }


    // stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        pattern += "*";
    }


    // right numbers
    for (let j = 5; j > i; j--) {
        pattern += "1";
    }


    console.log(pattern);
}



// FooFizzBuzzBar (1 to 1000)

for (let i = 1; i <= 1000; i++) {

    let result = "";

    if (i % 2 === 0) {
        result += "Foo";
    }

    if (i % 3 === 0) {
        result += "Fizz";
    }

    if (i % 5 === 0) {
        result += "Buzz";
    }

    if (i % 7 === 0) {
        result += "Bar";
    }


    if (result === "") {
        console.log(i);
    }
    else {
        console.log(result);
    }

}


