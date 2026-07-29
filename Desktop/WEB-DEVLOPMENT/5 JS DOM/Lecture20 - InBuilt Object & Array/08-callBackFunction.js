// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'NaimShah'
    }
    ,
    {
        No : 2,
        Name : 'Prishi'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"NaimShah "})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "NaimShah");
console.log(obj);