// Question 15
const test1 = {
    name : "Amir",
    lastname : "Zahedi",
    GetInfo(){
        return this.name + " " + this.lastname;
    },
    Sum(a , b , c){
        return a + b + c;
    }
};
const test2 = {
    name : "Ahmad",
    lastname : "Mohammadi",
};
console.log(test1.GetInfo.call(test2));
console.log(test1.Sum.apply(test2 , [10 , 20 , 30]));