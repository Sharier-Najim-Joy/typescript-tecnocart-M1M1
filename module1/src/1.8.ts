{
    // destructing

     // object destructing
    const user={
        id:234,
        name:{
            firstName:"Sharier",
    middleName:"Najim",
    lastName:"Joy",
        },
        contactNo:1243284738,
        address:'Cumilla'
    }
const {contactNo,name:{middleName}} = user;

 // Array destructing
 const myFriends=['tiger','khalid','rifat','nahid','hridoy']
 const [,,bestFriend,...rest] = myFriends

}