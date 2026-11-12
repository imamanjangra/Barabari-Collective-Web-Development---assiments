
// Task 1: Basic Call Stack Execution

function greet() {
  console.log('Hi');
  sayBye();
}

function sayBye() {
  console.log('Bye');
}

greet();
console.log('Done');


// Hi
// Bye
// Done


// Task 2: setTimeout & Event Loop


setTimeout(() => console.log('One'), 3000);
setTimeout(() => console.log('Two'), 1000);
setTimeout(() => console.log('Three'), 2000);


// Two
// Three
// One



// Task 3: var vs let with setTimeout


for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// 4
// 4
// 4


// Using let instead of var

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}


// 1
// 2
// 3




// Task 4: Closures & Counter

function makeCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = makeCounter();

counter1();
counter1();

const counter2 = makeCounter();

counter2();


// 1
// 2
// 1




// Task 5: Closure with setTimeout


function logLater(id) {
  setTimeout(() => {
    console.log('ID is', id);
  }, 1000);
}

logLater(1);
logLater(2);
logLater(3);



// ID is 1
// ID is 2
// ID is 3
