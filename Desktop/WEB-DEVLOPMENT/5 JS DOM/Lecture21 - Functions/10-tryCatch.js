let person = {
    firstName : "Naim",
    lastName : "Shah",

    // Getter
    get fullName()
    {
        return person.firstName + " " + person.lastName;
    },

    // Setter
    set fullName(value)
    {
        if(typeof value !== 'string')
        {
            throw "You must pass a string";
        }
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

console.log(person.fullName);
person.fullName = "Naim Shah";
console.log(person.fullName);

try{
    person.fullName = true;
}
catch(e){
    // console.log(e);
    alert(e);
}