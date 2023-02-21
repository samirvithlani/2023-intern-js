var users = ["Tom", "Bob", "Sam", "Bill", "John"];

function removeUser(name){

    //Sam

    //Tom
    users  = users.filter((x)=>{
        // Tom != Sam True
        // Bob != Sam True
        // Sam != Sam False
        // Bill != Sam True
        // John != Sam True
        return x != name
    })

    console.log(users)

}

removeUser("Sam")
