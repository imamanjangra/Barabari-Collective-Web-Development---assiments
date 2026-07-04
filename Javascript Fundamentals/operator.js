
// 1) Predict the Output

let a = 4,
  b = "6",
  c = 2;

console.log(a + b * c); // 16
console.log((a + b) * c); // 92
console.log(a++ + --c + b); // 56
console.log(a, b, c); // 5 "6" 1

/*
Explanation:

a + b * c
= 4 + ("6" * 2)
= 4 + 12
= 16

(a + b) * c
= (4 + "6") * 2
= "46" * 2
= 92

a++ + --c + b
a++ returns 4 and then a becomes 5
--c changes c from 2 to 1 and returns 1

4 + 1 + "6"
= 5 + "6"
= "56"

Final values:
a = 5
b = "6"
c = 1
*/


// 2) Predict the Output


// console.log("9" > "100"); // true
// console.log(9 > "100"); // false
// console.log("5" == 5 && "5" === 5); // false
// console.log(null == 0); // false
// console.log(undefined == null); // true

/*
Explanation:

"9" > "100"
String comparison happens character by character.
"9" comes after "1", so result is true.

9 > "100"
"100" becomes number 100.
9 > 100 => false

"5" == 5
true because == performs type conversion.

"5" === 5
false because types are different.

true && false
=> false

null == 0
false

undefined == null
true because == treats them as equal.
*/


// 3) Predict the Output


console.log(0 && "hello"); // 0
console.log("world" || 0); // world
console.log(null || undefined && "JS"); // undefined
console.log(" " && 55 && [] && "done"); // done

/*
Explanation:

0 is falsy, so AND returns 0.

"world" is truthy, so OR returns "world".

undefined && "JS"
returns undefined

null || undefined
returns undefined

All values in the last expression are truthy:
" " -> truthy
55 -> truthy
[] -> truthy

AND returns the last value:
"done"
*/


// 4) Rewrite using Assignment Operators

let x = 10;

x += 5;
x -= 3;
x *= 2;

console.log(x); // 24


// ==============================
// 5) Bitwise Operators
// ==============================

let p = 7;
let q = 12;
let r = 5;

p = p & r;
q = q | r;
r = r ^ p;

console.log(p, q, r); // 5 13 0

/*
Binary values:

p = 7  -> 0111
r = 5  -> 0101

p = p & r
0111
0101
----
0101 = 5

q = 12 -> 1100
r = 5  -> 0101

q = q | r
1100
0101
----
1101 = 13

r = 5 -> 0101
p = 5 -> 0101

r = r ^ p
0101
0101
----
0000 = 0

Final values:
p = 5
q = 13
r = 0
*/