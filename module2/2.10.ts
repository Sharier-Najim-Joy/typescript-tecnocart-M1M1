{
//
// mapped types

const arrOfNumber: number[] = [1,2,3,4,5]

const  arrOfString: string[] = arrOfNumber.map(number=> number.toString())
console.log(arrOfString)

type AreaNumber={
    height:number,
    width:number
}

type Height = AreaNumber["height"] // look up type 
type  AreaString={
    [key in keyof AreaNumber]:string
}


type AreaString1<T>={
    [key in keyof T]:T[key]
}

const area1: AreaString1<{height:string,width:number}>={height:"100",width:50}




//
}