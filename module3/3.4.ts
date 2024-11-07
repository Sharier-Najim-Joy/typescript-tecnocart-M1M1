{
//
// instanceof guard
class Animal{
    name:string;
    species:string
    constructor(name:string,species:string){
        this.name=name;
        this.species=species;
    }

    makeSound(){
        console.log("i am making sound")
    }
}

class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species);
    }

    makeBark(){
        console.log("i am barking")
    }
}

class Cat extends Animal{
    constructor(name:string,species:string){
        super(name,species);
    }

    makeMeow(){
        console.log("i am Meowing")
    }
}

// smart way te handle korar jono chaile amra funcation bebohar korte pari

const isDog =(animal:Animal):animal is Dog=>{
    return animal instanceof Dog
}
const isCat =(animal:Animal):animal is Cat=>{
    return animal instanceof Cat
}

const getAnimal = (animal:Animal)=>{
    // if(animal instanceof Dog){
    //     animal.makeBark()
    // }else if(animal instanceof Cat){
    //     animal.makeMeow()
    // }else{
    //     animal.makeSound()
    // }
    if(isDog(animal)){
        animal.makeBark()
    }else if(isCat(animal)){
        animal.makeMeow()
    }else{
        animal.makeSound()
    }
}

const dog= new Dog("Rex","Dog");
const cat = new Cat("Whiskers","Cat");

getAnimal(cat)

//
}