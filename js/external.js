console.log("Hey - this is me in external js - you added me in with the src attribute.");

alert("Welcome to my Website!")

let userInput = prompt("What is your favorite color?");

alert("Awesome, mine is also " + userInput + "!")

// ..................................................

alert("Next lets figure out your check!")

let Google = prompt("How many hours did you work for Google last week?")

let GooglePayTotal = (Google *400)

alert("You can expect $" + GooglePayTotal + " from Google.")

let Amazon = prompt("How many hours did you work for Amazon last week?" )

let AmazonPayTotal = (Amazon *380)

alert("You can expect $" + AmazonPayTotal + " from Amazon.")

let Facebook = prompt("How many hours did you work for Facebook last week?")

let FacebookPayTotal = (Facebook *350)

alert("You can expect $" + FacebookPayTotal + " from Facebook.")

let totalCheck = (GooglePayTotal) + (AmazonPayTotal) + (FacebookPayTotal)

alert("Your weekly check will be $" + totalCheck + ".")

console.log("Google hours worked - " + Google)
console.log("Amazon hours worked - " + Amazon)
console.log("Facebook hours worked - " + Facebook)

console.log("Googles total pay " + GooglePayTotal)
console.log("Amazon Total Price " + AmazonPayTotal)
console.log("Facebook Days Rented " + FacebookPayTotal)

console.log("Total Check " + totalCheck)

// ................................................

alert("So you want to take classes this semester but you work right? Lets see what we can do.")

alert("From what you have told me, your classes can not conflict with your work schedule, and of course they needs to have seats available. ")

alert("Let's see what we got?")

let GoodForSchedule = confirm("Does Monday and Wednesday work for you schedule wise? If Yes, press OK. If No, press Cancel.")

console.log("They can make the class dates " + GoodForSchedule)

let ClassSize = confirm("Does the class have space? If Yes, press OK. If No, press Cancel.")

console.log("The class have space " + ClassSize + ".")

if
    (GoodForSchedule === true && ClassSize === true)
    alert("Perfect, your in this semester!")

else {
    alert("Sorry, try next semester.")
    console.log("They could not attend.")}

if
(GoodForSchedule === true && ClassSize === true)

console.log("They are in.")

else {}
// ................................................
alert("Nice pick with those shoes. Lets see if we can use this discount still.")

alert("So, for this deal, we have a few stipulations. One, is you need to buy at least 2 items. Two, the offer for the deal can not be expired.")

alert("However, if you are a premium member you do not need to buy 2 items.")

let howManyShoes = confirm ("Are you planning on buying more than 2 pairs of shoes? Select Ok, if you plan to buy more than 2 pairs of shoes. Select Cancel, if you plan on buying less that 3 pairs of shoes.")

console.log("They want to buy 3 or more pairs of shoes - " + howManyShoes)

let premiumMembership = confirm ("Are you a premium member at our store? Select Ok, if you are a Premium Member. Select Cancel, if you are not a Premium Member.")

console.log("They are a Premium Member - " + premiumMembership )

let offerValid =confirm ("Is the offer still available? Select Ok, if it is still available. Select Cancel, if it has expired and is no longer valid. ")

console.log("The offer is still available - " + offerValid)

if
( (howManyShoes === true || premiumMembership === true) && offerValid === true)
    alert("Great, we can get you the discount.")

else {( (howManyShoes === true || premiumMembership === true) && offerValid === false
)
    alert("Sorry, we can not get you the deal.")
console.log("We could not offer the discount.")}

if
( (howManyShoes === true || premiumMembership === true) && offerValid === true)
    console.log("We could offer the discount.")

else ( (howManyShoes === true && premiumMembership === true) && offerValid === false
)
















