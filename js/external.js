console.log("Hey - this is me in external js - you added me in with the src attribute.");

alert("Welcome to my Website!")

let userInput = prompt("What is your favorite color?");

alert("Awesome, mine is also " + userInput + "!")

let LittleMermaid = prompt("How many nights did you rent Little Mermaid?")

let LittleMermaidTotal = (LittleMermaid *3)

alert("Your Little Mermaid rental cost $" + LittleMermaidTotal + ".")

let BrotherBear = prompt("How many nights did you rent Brother Bear?" )

let BrotherBearTotal = (BrotherBear *3)

alert("Your Brother Bear rental cost $" + BrotherBearTotal + ".")

let Hercules = prompt("How many nights did you rent Hercules?")

let HerculesTotal = (Hercules *3)
alert("Your Hercules rental was $" + HerculesTotal + ".")

let totalPrice = (LittleMermaidTotal) + (BrotherBearTotal) + (HerculesTotal)

alert("The total price of the rentals will be $" + totalPrice)

console.log("LittleMermaid Days Rented " + LittleMermaid)
console.log("BrotherBear Days Rented " + BrotherBear)
console.log("Hercules Days Rented " + Hercules)

console.log("LittleMermaid Total Price " + LittleMermaidTotal)
console.log("BrotherBear Total Price " + BrotherBearTotal)
console.log("Hercules Days Rented " + HerculesTotal)

console.log("Total Rental Price " + totalPrice)