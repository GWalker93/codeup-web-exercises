console.log("~~~~~~~~~~~~~~~~")
console.log("")
console.log("Hi from breaks and continue loops")
console.log("")

'use strict';

let userNumber = prompt( "Hey there, can you give me a odd number bettwen 1 and 50? ")
console.log("Number to skip is: " + userNumber )

console.log("")

for (var i = 1; i < 50; i++) {


    if (i == userNumber)
        console.log("Yikes! Skipping number: " + userNumber)
    if (i % 2 !== 1 || i == userNumber) {
        continue;
    }
        console.log('Here is an odd number: ' + i);


}


console.log("")
console.log("~~~~~~~~~~~~~~~~")
console.log("")

