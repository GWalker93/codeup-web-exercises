(function(){
    "use strict";

    console.log("Hi")

    console.log("------------")
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ["G", "Audrey", "Davis", "Twin"]


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names)

    console.log("------------")

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    console.log("------------")

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log('Their order at index ' + i + ' is '+ names[i]);
    }

    console.log("------------")

    for ( let theirName of names){
        console.log (`They liked to be called ` + theirName)
    }

    console.log("------------")

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (names) {
        console.log('Their names are: ' + names + '.')
        })

    console.log("------------")

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let num = ["hotdog", true, 3, 4, 76]

    console.log('return ' + num[0])
    console.log('return ' + num[1])
    console.log('return ' + num[4])

    for (let i = 0; i < num.length; i++) {
        console.log("here it is " + i + " is " + num[i])
    }

    num.forEach(function(num){
        console.log('here ya go: ' + num[0] + '.'
        )
    })
    console.log("---------------")

    // function first(num)
    //     let numb = [1,2,3,4,5]
    //     return numb[]
    // }
    // function second() {
    //     return []
    // }
    // function last() {
    //     return []
    // }

})();