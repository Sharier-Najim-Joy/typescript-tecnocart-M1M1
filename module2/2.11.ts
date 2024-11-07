{
//
// utility type

// pick type

type Person ={
    name: string;
    age: number,
    email?:string,
    contactNo:string
}
 type NameAge = Pick<Person,"name"| "age">

 // omit type
 type ContactInfo = Omit<Person,"name"|"age">

 // required type
 type PersonRequired=Required<Person>

 // partial
 type PersonPartial = Partial<Person>

 // Readonly

 type PersonReadOnly= Readonly<Person>

 const person1:PersonReadOnly={
    name:"John",
    age:30,
    contactNo:"21345325",
 }
 person1.name="Sina"


 // record type

//  type MyObj={
//     a:string,
//     b:string
//  }

type MyObj=Record<string,string>

const emptyObj: Record<string,unknown>={}

 const obj1 : MyObj={
    a:"aa",
    b:"bb",
    c:'cc',
 }


//
}