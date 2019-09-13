    const users=[
    {
      "balance": "$3,946.45",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "name": "Bird Ramsey",
      "gender": "male",
      "company": "NIMON",
      "email": "birdramsey@nimon.com"
    },
    {
      "balance": "$2,499.49",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Lillian Burgess",
      "gender": "female",
      "company": "LUXURIA",
      "email": "lillianburgess@luxuria.com"
    },
    {
      "balance": "$2,820.18",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Kristie Cole",
      "gender": "female",
      "company": "QUADEEBO",
      "email": "kristiecole@quadeebo.com"
    },
    {
      "balance": "$3,277.32",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": "Leonor Cross",
      "gender": "female",
      "company": "GRONK",
      "email": "leonorcross@gronk.com"
    },
    {
      "balance": "$1,972.47",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Marsh Mccall",
      "gender": "male",
      "company": "ULTRIMAX",
      "email": "marshmccall@ultrimax.com"
    }
  ]

  //console.log("users",users)
  

  users.forEach((user,index) => {
      return users[index].age = user.age * 2
  })
console.log(users)

users.forEach( (user) => {
    console.log(user.name)    
  })

// users.map(user=> console.log(user.name))
let  double =users.map((user) =>{
    tmpObj = {}
    tmpObj ={...user}
    tmpObj.age = user.age*2
    return tmpObj
})  

console.log("double",double)

let kids = users.filter((user)=>{
    let tmpobj1 ={}
    tmpobj1 ={...user}
    return tmpobj1.age < 55
})

console.log("kids",kids)

let totalAge = users.reduce((acc,obj)=>{
   return acc + obj.age
},0)

console.log ("totalAge",totalAge)