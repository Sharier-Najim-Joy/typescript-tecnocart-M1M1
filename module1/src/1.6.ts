{
    // learning function
// normal function
// arrow function

function add (number1:number,number2:number=10):number{
    return number1 + number2;
}
add(2,2)

const addArrow =(num1:number,num2:number):number=>num1+num2

// object ---> function ---> method

const poorUser={
    name:"Sharier",
    balance:0,
    addBalance(balance:number):number{
       return this.balance+balance;
    }
}
const poorUser2={
    name:"Sharier",
    balance:0,
    addBalance(balance:number):string{
       return `this new balance is ${this.balance+balance}`;
    }
}


const arr:number[] =[1,2,3,4,5,6,7,8,9,10]

const newArr:number[] = arr.map((elem:number):number=>elem*elem)
}