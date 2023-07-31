"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyseColor(color) {
    let lowercaseColor = color.toLowerCase()

    if (lowercaseColor === "blue") {
        return "Blue is the color of the ocean.";
    } else if (lowercaseColor === "red") {
        return "Red is the color of burning flames.";
    } else if (lowercaseColor === "green") {
        return "Green is the color your grass should be.";
    } else if (lowercaseColor === "orange") {
        return "Orange is a fantastic color. Go Horns Go!";
    } else {
        ("")
        return "Sorry, I don't know what that color is."
    }

};

console.log(analyseColor("grEEN"))
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// console.log (analyseColor(randomColor));

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//
// function analyseColor(input) {
//
//     switch(input) {
//         case "red":
//             alert (input + " is the color of burning flames.")
//             break;
//         case "blue":
//             alert (input + " is the color of the ocean.")
//             break;
//         case "green":
//             alert (input + " is the color your grass should be.");
//             break;
//         case "orange":
//             alert (input + "  is a fantastic color. Go Horns Go!")
//             break;
//         default:
//             alert(input + " isn't one of my favorite colors.")
//     }
//     console.log("The color is " + input + ".")
// };
//
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// (analyseColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let input = prompt("What is your favorite color?")
// function analyseColor(input) {
//
//     switch(input) {
//         case "red":
//             alert (input + " is the color of burning flames.")
//             break;
//         case "blue":
//             alert (input + " is the color of the ocean.")
//             break;
//         case "green":
//             alert (input + " is the color your grass should be.");
//             break;
//         case "orange":
//             alert (input + " is a fantastic color. Go Horns Go!")
//             break;
//         default:
//             alert(input + " isn't one of my favorite colors.")
//     }
//     console.log("The color is " + input + ".")
// };
//
// (analyseColor(input));

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(lucky, price) {
//
//     if (lucky === 0) {
//         return "Your total after dicount is: $" + price;
//     else if
//         (lucky === 1) {
//         return "Your total after dicount is: $" + (price - (.10 * price));
//     else if
//         (input === 2) {
//         return "Your total after dicount is: $" + (price - (.25 * price));
//     else if
//         (input === "3") {
//         return "Your total after dicount is: $" + (price - (.35 * price));
//     else if
//         (input === "4") {
//         return "Your total after dicount is: $" + (price - (.50 * price));
//     else if
//         (input === "5") {
//        return "Your total after dicount is: $" + (price - (.10 * price));
//     }
// }
// console.log (calculateTotal(2, 33));

//
//     calculateTotal(input)
//  if (input === "blue") {
// //         console.log(input + (" is the color of the ocean."));
// //     } else if (input === "red") {
// //         console.log(input + " is the color of burning flames.");
// //     } else if (input === "green") {
// //         console.log(input + " is the color your grass should be.");
// //     } else if (input === "orange") {
// //         console.log(input + " is a fantastic color. Go Horns Go!");
// //     } else {
// //         ("")
// //         console.log("Sorry I don't know what that color is.")
// //     }
// //     console.log("The color is " + input + ".")
// // };
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */