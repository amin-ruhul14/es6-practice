// It is a backup function 

function add(num1, num2 = 20) { //This is way is lazy developer ways ES6
    // if (num2 == undefined) { This is Old way to defined second peraMeter value 
    //     num2 = 0;
    // }
    // num2 = num2 || 0; and another Old way to define second peraMeter value
    return num1 + num2;
}
const total = add(15);
console.log(total);