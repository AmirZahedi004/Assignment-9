// Question 9
class Book {
    constructor (title , author){
        this.title = title;
        this.author = author;
    };
};
var english = new Book("English" , "Mr.John");
console.log(english.title + " " + english.author);