"Hello Gang"

function logUser(name) {
    {
        if (typeof name !== "string")
            return false
    }
        return `${name} has logged in for the day.`
    }

console.log(logUser("G"))
console.log(logUser(4))
console.log(logUser("Jake"))
console.log(logUser(true))
