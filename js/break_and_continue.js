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
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration


        // prompt("Please try again with an odd number.")
        continue;
    }
        console.log('Here is an odd number: ' + i);


}


//
// let userNumber = prompt( "Hey there, can you give me a odd number bettwen 1 and 50? ")
// console.log("Number to skip is: " + userNumber )
//
// for (var i = 1; i < 20; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (userNumber % 2 !==1 ) {
//         prompt("please try again")
//         // use the break keyword to exit from the while loop
//         break;
//
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
//  }


