// Question 17
class Person {
    constructor(name , lastname){
        this.name = name;
        this.lastname = lastname;
    };
    newname (newname){
        this.name = newname;
    };
    newlastname (lastname){
        this.lastname = lastname;
    };
    getname(){
        console.log(this.name);
    };
    getlastname(){
        console.log(this.lastname);
    }
};
var amir = new Person("amir" , "zahedi");
amir.newname("New Amir")
amir.getname();