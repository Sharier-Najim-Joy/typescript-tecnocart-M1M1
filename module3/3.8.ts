{
//
// polymorphisam

class Person{
  getSleep(){
    console.log("I am sleeping for 8 hours per day")
  }  
}


class Students extends Person{
  getSleep(){
    console.log("I am sleeping for 7 hours per day")
  }  
}


class Developer extends Person{
  getSleep(){
    console.log("I am sleeping for 6 hours per day")
  }  
}

const getSleepingHours = (param:Person)=>{
    param.getSleep()
}

const person1 = new Person()
const person2 = new Students()
const person3 = new Developer()

getSleepingHours(person1)

////

class Shape{
    getArea():number{
        return 0
    }
}

// pi * r^2
class Circle extends Shape{

    radius:number;

    constructor(radius:number){
        super()
        this.radius=radius
    }

    getArea():number{
        return Math.PI * this.radius * this.radius
    }
}


// hight * width
class Rectangle extends Shape{

    hight:number;
    width:number;

    constructor(hight:number,width:number){
        super()
        this.hight=hight
        this.width=width
    }

    getArea():number{
        return this.hight*this.width
    }
}

const getShapeArea = (param:Shape)=>{
    console.log(param.getArea())
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(20,30)

getShapeArea(shape1)
getShapeArea(shape2)
getShapeArea(shape3)




//
}