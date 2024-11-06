{
//
// ternary || optional  chaining || nullish coalescing

const age:number =18
if(age>=18){
    console.log('adult')
}else{
    console.log("not Adult")
}
 const isAdult = age>=18 ?  'adult' : 'not Adult'
console.log({isAdult})

// nullish coalescing operator
// null / undefined ---> decision making ---> nullish

const isAuthenticated = null
const result =  isAuthenticated ?? 'Guest'
console.log({result})


// optional  chaining
type User = {
    name: string,
    address:{
        city:string,
        road:string,
        presentAddress:string,
        permanentAddress?:string
    }
}
const  user:User = {
    name: 'Rahul',
    address:{
        city:'Kolkata',
        road:'Ballygunge',
        presentAddress:'Ballygunge',
    }
}

const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address'
console.log(permanentAddress)


//
}