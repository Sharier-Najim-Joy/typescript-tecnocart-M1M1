{
//
// generic type

type GenericArray = Array<number>
// type GenericArray1<param> = Array<param>
type GenericArray1<T> = Array<T>

// const rollNumber:number[] = [2,3,4]
// const rollNumber:Array<number> = [2,3,4]
const rollNumber:GenericArray = [2,3,4]

// const mentors: string[] = ['Mr.x',"Mr.y","Mr.z"]
// const mentors: Array<string> = ['Mr.x',"Mr.y","Mr.z"]
const mentors: GenericArray1<string> = ['Mr.x',"Mr.y","Mr.z"]

// const boolArray : boolean[] = [true,false,true]
const boolArray : Array<boolean> = [true,false,true]

const user:GenericArray1<{name:string,age:number}> =[
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Jane',
        age: 30
    }
]

// generic tuple

type  GenericTuple<x,y> = [x, y]

const manush:GenericTuple<string,string> =["Mr.x",'Mr.y']

const userWithId : GenericTuple<number,{name:string,email:string}> = [1234,{name:"joy",email:"j@gmail.com"}]


//
}