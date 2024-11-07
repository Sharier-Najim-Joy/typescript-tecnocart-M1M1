{
//
// oop --> class
 class Animal {
    // name: string;
    // species: string;
    // sound: string;

// parameter properties

    constructor(public name:string,public species:string,public sound:string) {
        // this.name=name;
        // this.species= species;
        // this.sound=sound;
    }

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
 }
 const dog = new Animal('Buddy','Dog','Woof');
 const cat = new Animal('Whiskers','Cat','Meow'); 

 cat.makeSound()
 dog.makeSound()

//
}