(function() {
    "use strict";

    console.log("hello")

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

  let person = {};
        person.firstName = "Gerld";
        person.lastName = "Walker";

    console.log(person.firstName);
    console.log(person.lastName);

   console.log(`${person.firstName} ${person.lastName} is in class`)

    console.log(" ")
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " "+ person.lastName + "!")
    }

   person.sayHello()

console.log(" ")

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
            { name: `Cameron`,  amount: 180, },
            { name: `Ryan`,  amount: 250,},
            { name: `George`,  amount: 320,}
]
    console.log(shoppers[0].name + " spent " + shoppers[0].amount + " at the store.")
    console.log(shoppers[1].name + " spent " +   shoppers[1].amount + " at the store.")
    console.log(shoppers[2].name + " spent " + shoppers[2].amount + " at the store.")

//
//     var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
//     shapes.forEach(function(shape) {
//         console.log('Here is a lovely shape: ' + shape + '.');
//     });


    function priceAfterDiscount(amount) {
    if (amount > 200 ){
        return (" We can offer a 12% discount. Thier price after discount will be $" + ((amount - (amount*.12)).toFixed(2) + ".") )
    }
    else {
        return ("At this time, we can not offer them a discount. Thier total due is " + (amount).toFixed(2) + ".")
    }}

    console.log(" ")


    // for ( let i = 0; i <shoppers.length; i++){
    //     console.log("Since " + shoppers[i].name + " spent " + shoppers[i].amount + " at the store. " + priceAfterDiscount(shoppers[i].amount))
    // }

    console.log("")

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        { title: "Hunger Games",
          author: {
            firstName: "Suzanne",
            lastName: "Collins",},
            num: "1"
          , },
        { title: "Outsiders",
            author: {
                firstName: "S. E.",
                lastName: "Hinton",},
                num: "2",
             },
        { title: "Harry Potter and the Goblet of Fire",
            author: {
                firstName: "JK",
                lastName: "Rowling",},
                num: "3",
            },
        { title: "Will",
            author: {
                firstName: "Will",
                lastName: "Smith",},
                num: "4",
            },
        { title: "First",
            author: {
                firstName: "Rich",
                lastName: "Frowning",},
                num: "5",
            },]

    console.log(books)

    console.log(books[0].title)
    console.log(books[2].author.firstName)
    console.log(books[4].author.lastName)

    console.log("-----------------")

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for ( let i = 0; i <books.length; i++){
        (console.log("Book # " + books[i].num)),
        (console.log("Title: " + books[i].title)),
        (console.log("Author: " + books[i].author.firstName +" "+                books[i].author.lastName)),
        (console.log("---")) }


    console.log("~~~~~~~~~~~~~~~~~~")

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(bookTitle, authorFN, authorLN) {
        return {
            title
        }
    }

    // let books = [
    //     {title: "Hunger Games",
    //         author: {
    //             firstName: "Suzanne",
    //             lastName: "Collins"},
    //         num: "1",
    //     },
    //     {title: "Outsiders",
    //         author: {
    //             firstName: "S. E.",
    //             lastName: "Hinton"},
    //         num: "2",
    //     },
    //     { title: "Harry Potter and the Goblet of Fire",
    //         author: {
    //             firstName: "JK",
    //             lastName: "Rowling"},
    //         num: "3",
    //     },
    //     { title: "Will",
    //         author: {
    //             firstName: "Will",
    //             lastName: "Smith"},
    //         num: "4",
    //     },
    //     {title: "First",
    //         author: {
    //             firstName: "Rich",
    //             lastName: "Frowning"},
    //         num: "5",
    //     },
    // ]
    // function createBook (title,firstName) {
    //      return books["num"]
    // }

    // for ( let i = 0; i <createBook; i++){
    //     (console.log(books))}

    // console.log(createBook("Will", "Will"))

    // function showBookInfo (book) {
    //     return "tittle, author"
    // }

 })();