var users = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Mary",
        age: 28,
    },
    {
        name: "Peter",
        age: 40,
    }
]


// users.map((user)=>{
//     console.log(user.name.toUpperCase(), " ", user.age)
// })

var filterduser = users.filter((u)=>{

    return u.age>30
}).forEach((x)=>{
    console.log(x.name , " ", x.age)
})

// filterduser.forEach((x)=>{
//     console.log(x.name , " ", x.age)
// })


// for(let i=0;i<users.length;i++){


//     console.log(users[i].name , " ",)


// }