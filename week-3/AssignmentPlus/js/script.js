/* Challenge-1 */
let a = 10;
let b = "20";
let c = 80;


console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a + +b++ - +b * a + --a - +true);

/* Solution Challenge-1 */

/*
    [++a] [+] [+] [b++] [+] [+] [c++] [-] [+] [a++]

    [++a]
    - Value: 11
    - Explain: pre Increament
    [+]
    - Explain: Add Operator
    [+]
    - Explain: Unary plus Operator
    [b++]
    - Value: 20
    - Explain: post Increament
    [+]
    - Explain: Add Operator
    [+]
    - Explain: Unary Plus Operator
    [c++]
    - Value: 80
    - Explain: post Increament
    [-]
    - Explain: Negitive Operator
    [+]
    - Explain: Unary Plus Operator
    [a++]
    - Value: 10
    - Explain: post Increament
*/

/*
    [++a] [+] [-b] [+] [+] [c++] [-] [-] [a++] [+] [+a]
    
    [++a]
    - Value: 11
    - Explain: pre Increament
    [+]
    - Explain: Add Operator
    [+]
    - Explain: Add Operator
    [-b]
    - Value: -20
    - Explain: Unary Negitive Operator
    [+]
    - Explain: Add Operator
    [+]
    - Explain: Unary Plus Operator
    [c++]
    - Value: 80
    - Explain: post Increament
    [-]
    - Explain: Subtract Operator
    [-]
    - Explain: Unary Negitive Operator
    [a++]
    - Value: 10
    - Explain: post Increament
    [+]
    - Explain: Add Operator
    [+a]
    - Value: 10
    - Explain: Unary Plus Operator
*/

/* 
    [--c] [+] [+] [b] [+] [--a] [+] [+] [b++] [-] [+] [b] [*] [a] [+] [--a] [-] [+] [true]

    [--c]
    - Value: 79
    - Explain: pre Decreament
    [+]
    - Explain: Add Operator
    [+]
    - Explain: Unary Plus Operator
    [b]
    - Value: 20
    [+]
    - Explain: Add operator
    [--a]
    - Value: 9
    - Explain: pre Decreament
    [+]
    - Explain: Add Operator
    [+]
    - Explain: Unary Plus Operator
    [b++]
    - Value: 20
    - Explain: post Increament
    [-]
    - Explain: Subtract Operator
    [+]
    - Explain: Unary Plus Operator
    [b]
    - Value: 20
    [*]
    - Explain: Multiplication Operator
    [a]
    - Explain: 10
    [+]
    - Explain: Add operator
    [--a]
    - Value: 9
    - Explain: pre Decreament
    [-]
    - Explain: subtract Operator
    [+]
    - Explain: Unary Plus
    [true]
    - Value: 1
    - Explain: Boolean Value After change it by use [Unary Plus].
*/

/* Solution Challenge-2 */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log("------------------------------------------")
console.log(-d * + +e);
console.log(++g * ++e + -d + ++f);

