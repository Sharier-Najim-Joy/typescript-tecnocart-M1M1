{
    // 3.5 or 3.6
    // access modifier
    
    // encapsulation

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
    
        addDeposit(amount:number){
            this._balance= this._balance+amount
        }
    
        getBalance(){
            return this._balance;
        }
    }
    
    // class StudentAccount extends BankAccount{
    //     test(){
    //         this.
    //     }
    // }
    
    const goribManuserAccount = new BankAccount(155457,"Gorib Man",1000);
    goribManuserAccount.addDeposit(300)
    const myBalance = goribManuserAccount.getBalance()
    console.log(myBalance)
    
    goribManuserAccount
    
    
    //
    }