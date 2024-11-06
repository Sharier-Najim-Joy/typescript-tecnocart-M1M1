{
//

// union type

type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"
type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper"

type  Developer = FrontendDeveloper | FullStackDeveloper


const newDeveloper : FrontendDeveloper = "juniorDeveloper"

type User ={
    name: string,
    email?:string,
    gender:'male'|'female',
    bloodGroup:"O+"|"A+"|"AB+"
}

const user1:User={
    name:"John",
    gender:'male',
    bloodGroup:"O+"
}

type NewFrontendDeveloper = {
    skills:string[],
    designation1:'Frontend Developer'
}
type BackendDeveloper = {
    skills:string[],
    designation2:'Backend Developer'
}

type NewFullstackDeveloper = NewFrontendDeveloper & BackendDeveloper

const newFullStackDeveloper : NewFullstackDeveloper={
    skills:["javascript","react",'express'],
    designation1:'Frontend Developer',
    designation2:'Backend Developer',
    
}



//
}