// Question 19

        // PERSON Object

const Person1 = {
    id : 1000,
    name : "Ahamd",
    favoriteBooks : [
        {id : 1, name : "JavaSctipt", pages : 456},
        {id : 2, name : "Java", pages : 412}
    ],
    address : {country : "Afghanistan" , province : "Herat" , district : "Ghurian"},
    friends : [
        {
            id : 1098, 
            name : "Karim", 
            favoriteBooks : [
                {id : 1, name : "CSS with Jone", pages : 654},
                {id : 2, name : "React.js", pages : 954},
            ],
            address : {
                country : "Afghanistan",
                province : "Herat",
                district : "Kerokh"
            },
        },
        {
            id : 1092, 
            name : "Mohamad", 
            favoriteBooks : [
                {id : 1, name : "Nodejs", pages : 924},
                {id : 2, name : "React.js", pages : 649},
            ],
            address : {
                country : "Afghanistan",
                province : "Herat",
                district : "Qozera"
            },
        },
    ],
};

for(var x in Person1.friends){
    console.log(Person1.friends[x].favoriteBooks[0].name);
    console.log(Person1.friends[x].favoriteBooks[1].name);
}
