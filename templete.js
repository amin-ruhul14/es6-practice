const firstName = "Amin";
const lastName = "Ruhul";
const fullName = firstName + " " + lastName; //Space er jonno empty string use kora lage this is old way
const fullName2 = `${firstName} ${lastName} is a good boy.`; //This way is ES6 it's call templete
console.log(fullName2);


// For multiLine This is Old way 
const multiLine = "I love you\n"
    + "I miss you\n"
    + "i need you"
console.log(multiLine);

// ES6 templete for MultiLene

const multiLine2 = `I love you 
I miss you
no, I don't need you`
console.log(multiLine2);