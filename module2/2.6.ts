{
//
// constraints

const addCourseToStudent =<T extends {id:number,name:string,email:string}>(student:T)=>{
    const course = "Next Level Web Development"
    return{
        ...student,course
    }
}

const student1 = addCourseToStudent({id:1235,name:"Mr.X",email:"x@gmail.com",devType:"NLWD"})
const student2 = addCourseToStudent({id:8789,name:"Mr.Y",email:"y@gmail.com",hasWatch:"Apple Watch"})
const student3 = addCourseToStudent({id:29348,name:"Mr.Z",email:"x@gmail.com",emni:"emni"})



//
}   