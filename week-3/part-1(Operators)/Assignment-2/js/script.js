let num = 3;

// ++num;
// num++;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(++num - +false + num); // 6

// Soultion Four
console.log(num * num - num); // 6

// Solution Five
console.log(num * +true + num); // 6

// Solution Six
console.log(num + --num + --num); // 6