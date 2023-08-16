"Hello Gang"

// function logUser(name) {
//     {
//         if (typeof name !== "string")
//             return false
//     }
//         return `${name} has logged in for the day.`
//     }
//
// console.log(logUser("G"))
// console.log(logUser(4))
// console.log(logUser("Jake"))
// console.log(logUser(true))

 let userObject = {

     userName : "Gerald",
     email: "gerwal93@yahoo.com",
     // userObject.roles ["admin", "moderator", "buyer"]
 };

// console.log(userObject.userName + " with email " + userObject.email + " has logged in for the day.")

function logUser(object) {
    {
        if (typeof object.userName !== "string" || typeof userObject !== "string")
            return false
    }
        return `${object.userName} with email ${object.email} has logged in for the day.`
    }

    console.log(logUser(userObject))






