let numberOne = 10, numberTwo = 10;

// Normal Concatenate
console.log(numberOne + "20");
console.log(typeof (numberOne + "20"));
// Template Literals Way
console.log(`${numberOne}20`);
console.log(`${typeof (numberOne + "20")}`);

// Normal Concatenate
console.log("20" + 
    "\n" + numberOne
);

// Template Literals Way
console.log(`20 
${numberOne}`)