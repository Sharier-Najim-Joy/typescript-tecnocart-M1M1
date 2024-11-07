{
    //
    // getter and setter
    
    class BankAccount{
       public readonly id:number;
       public name:string;
       private _balance:number;
    //    protected _balance:number;
       
        
        constructor(id:number,name:string,balance:number){
            this.id=id;
            this.name=name;
            this._balance=balance;
        }

        // setter
        set deposit(amount:number){
            this._balance=this._balance+amount
        }
    
        // addDeposit(amount:number){
        //     this._balance= this._balance+amount
        // }
    

        // getter
        get Balance(){
          return this._balance
        }

        // getBalance(){
        //     return this._balance;
        // }
    }
    
    
    const goribManuserAccount = new BankAccount(155457,"Gorib Man",1000);
    // goribManuserAccount.addDeposit(300)  // use it function
    goribManuserAccount.deposit=200 // setter use it property

    // const myBalance = goribManuserAccount.getBalance() // use it function

    const myBalance = goribManuserAccount.Balance  // getter use it property 
    console.log(myBalance)
    
    
    
    
    //
    }