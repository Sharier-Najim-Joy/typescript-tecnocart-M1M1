{
// spread operator
// rest operator // cousin of  spread operator
// destructing 1.8.ts

// learn spread operator
const bros1:string[]=['joy','nahid','hridoy']
const bros2:string[]=['tiger','khalid','rifat']
bros1.push(...bros2)

const mentors1={
      typescript:'joy',
      redux:'hridoy',
      dbms:'nahid'
}
const mentors2={
      prisma:'tiger',
      next:'khalid',
      cloud:'rifat'
}
const mentorsList={
    ...mentors1,...mentors2
}

// learn rest operator
const greetFriends = (...friends:string[])=>{
    // console.log(`hi${friend1} ${friend2}${friend3}`)
    friends.forEach((friend:string)=>console.log(console.log(`hi${friend} }`)))
}
greetFriends("abul",'babul','kabul','ulbul','labul')

}