// Question 12
class Shape {
    constructor(color){
        this.color = color;
    };
    calculate(a , b){
        return a * b;
    };
};
class Circle extends Shape{
    constructor(rad){
        this.rad = rad;
    };
}