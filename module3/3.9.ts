{
//
// abstraction  2 type --> *interface *abstract 

//interface
// idea
interface Vehicle1{
    startEngine():void;
    stopEngine():void;
    move():void;
}

// real implements
class Car1 implements Vehicle1{
    startEngine(): void {
        console.log("Car engine started");
    }
    stopEngine(): void {
        console.log("Car engine stopped");
    }
    move(): void {
        console.log("Moving the car")
    }
    test(){
        console.log("i am just test")
    }
}

const toyotaCar = new Car1();
toyotaCar.startEngine();


// abstract class 
// idea
abstract class Car2{
    abstract startEngine(): void 
    abstract stopEngine(): void 
    abstract move(): void 
    test(){
        console.log("i am just test")
    }
}

class toyotaCar2 extends Car2{
    startEngine(): void {
        console.log("Car engine started");
    }
    stopEngine(): void {
        console.log("Car engine stopped");
    }
    move(): void {
        console.log("Moving the car")
    }
}

// const hondaCar = new Car2();
// hondaCar.startEngine();
const hondaCar2 = new toyotaCar2();
hondaCar2.stopEngine();

//
}