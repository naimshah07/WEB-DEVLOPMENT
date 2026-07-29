// Data Types 

// Primitive Data Types 
// #1 - String
let firstName = "Naim";
let lastName = 'shah';
let fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);

// #2 - Number 
let num = 10.6;
console.log(num);

num = 10;
console.log(num);

// #3 - Boolean
let bool = true;
bool ? console.log("True") : console.log("False");

// #4 - Undefined
let x;
console.log(x);

// #5 - Null
let y = null;
console.log(y);

// Non - Primitive 
// #1 - Arary 

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr = ['my','name','is','NaimShah'];
console.log(arr);
console.log(arr[0]);

// #2 - Object 

let obj = {
    "Name" : 'NaimShah',
    "Age" : 20
};

console.log(obj["Name"]);