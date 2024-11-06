{
//
// types alias

    type Student ={
        name: string;
    age:number;
    gender:string;
    contactNo:string;
    address:string
    }

const student1:{
    name: string;
    age:number;
    gender:string;
    contactNo:string;
    address:string
}={
    name:"John",
    age:30,
    gender:"Male",
    contactNo:"1234567890",
    address:"New York"
}

const  student2:Student={
    name:"Jane",
    age:25,
    gender:"Female",
    contactNo:"9876543210",
    address:"London"
}

type UserName = string
type IsAdmin = boolean
const userName : UserName= 'Sharier' 
const isAdmin:IsAdmin = true

type Add =  (a: number, b: number) => number

const add : Add = (a, b) => a+b


//
}