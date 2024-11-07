{
//
// generic constraints using ket of 

type Vehicle ={
    bike:string,
    car: string,
    ship:string
}

type Owner = "bike"|"car"|"ship"  // manually

type Owner2 = keyof Vehicle

const person1:Owner="bike"
const person2:Owner2="ship"


const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{
    return obj[key]
}

const user={
    name:"John",
    age:30,
    occupation:"Developer"
}

const result1 = getPropertyValue(user,"name")


//
}