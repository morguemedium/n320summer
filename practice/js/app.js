let oneDog = {
    name: "truffle",
    age: 6,
    height: 12,
    color: "grey",
    bark: function(){
        console.log("boof boof");
    }
};

oneDog.bark();

//'this' keyword refers to an object in the class it rresides in and grants access to other methods

let twoDog = {
    name: "indy",
    age: 6,
    height: 14,
    color: "black",
    bark: function(){
        console.log(this.name + " woofs");
    }
};

twoDog.bark();

//idea of dog is a class
//the actual dog is an object

class Dog {
    constructor(name,age,height,color){
        this.name = name;
       this.age = age;
        this.height = height;
        this.color = color;
    };
    bark(){
        console.log(this.name + " yells");
    }
}
//new keyword runs constructor

let threeDog = new Dog("marley", 3, 8, "brown");
threeDog.bark();

console.log(oneDog);
console.log(twoDog);
console.log(threeDog);

//classes extend capabilities via inheritance

class Animal{
    constructor(name,weight,color){
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
};

//extends: take all the capabilities of animal & add these
//super: invoke constructor that is extending

class Dog extends Animal {
    constructor(name,weight,color){
        super(name,weight,color);
        this.kind = "dog";
    }
    bark(){
        console.log(this.name + " snarls");
    }
};

let fourDog = new Dog("carmichael", 13, "white");
console.log(fourDog);
fourDog.bark();

let onePlush = {
    name = "Kenji",
    animal = "koala",
    height = 12,
};

class Plush{
    constructor(name,animal,height){
    this.name = name;
    this.animal = animal;
    this.height = height;
    }
    decorate(){
        console.log("Where should I put the " + this.animal + " plush named "
        + this.name + " that is " + this.height + " inches tall?");
    };
};

let twoPlush = new Plush("Karrie", "koala", 6);

twoPlush.decorate();
