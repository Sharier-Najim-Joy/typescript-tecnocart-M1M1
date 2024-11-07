{
//
// generic interface
interface Developer<T,X=null>{
    name:string,
    computer:{
        brand:string,
        model:string,
        releaseYear:number
    }
    smartWatch:T,
    bike?:X
}

type EmilabWatch  = {
    brand:string,
    model:string,
    display:string
}


const poorDeveloper: Developer<EmilabWatch>={
    name:"joy",
    computer:{
        brand:"Hp",
        model:"hp2223",
        releaseYear:2020
    },
    smartWatch:{
        brand:"Emilab",
        model:"kw66",
        display:"OLED"
    }
}

interface AppleWatch{
    brand: string,
    model: string,
    heartTrack:boolean,
    sleepTrack:boolean
}

interface YamahaBike{
    model:string,
    enginCapacity:string
}

const richDeveloper: Developer<AppleWatch,YamahaBike>={
    name:"Sharier",
    computer:{
        brand:"Apple",
        model:"Mac Book",
        releaseYear:2020
    },
    smartWatch:{
        brand:"Apple",
        model:"Apple Watch",
        heartTrack:true,
        sleepTrack:true
    },
    bike:{
        model:"Yamaha",
        enginCapacity:"100c"
    }
}



//
}