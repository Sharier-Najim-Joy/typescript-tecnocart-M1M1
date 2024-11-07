{
//
// statics
class Counter{
  static count : number = 0;
   static increment(){
        return Counter.count = Counter.count+1
    }
    decrement(){
        return Counter.count = Counter.count-1
    }
}

// const increment1 = new Counter()
console.log(Counter.increment())  // 1 --> different memory

const increment2 = new Counter()
// console.log(increment2.increment())  // 1 --> different memory



//
}