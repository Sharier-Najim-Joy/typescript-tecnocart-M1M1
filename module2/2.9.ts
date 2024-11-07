{
//
// conditional type
type a1 = number
type  a2 = undefined

type x = a1 extends null ? true : false  // conditional type

type y = a1 extends null ? true : a2 extends undefined ? undefined:null 


type Sheikh ={
    bike:string,
    car: string,
    house: string
}

//  'bike' | 'car' | 'house' ase kina
type CheckVehicle<T> = T extends keyof Sheikh ? true:false

type HasAny = CheckVehicle<"car">

//
}