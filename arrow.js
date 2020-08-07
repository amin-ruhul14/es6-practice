//  It is a normal function
function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(7);
console.log(result);

// It's called function Expression 
const doubleIt2 = function myFunction(num) {
    return num * 3;
}
const total = doubleIt2(7);
console.log(total);

// it's called arrow function
const doubleIt3 = num => num * 4;
const equal = doubleIt3(3.5);
console.log(equal);

// when i need double peraMeter in arrow function 
const add = (x, y) => x + y;
const result = add(50, 70);
console.log(result);

// another way arrow function 
const give5 = () => 5;
const result2 = give5();
console.log(result2);

// multiLine arrow function

const mathematic = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = mathematic(7, 5);
console.log(result3);