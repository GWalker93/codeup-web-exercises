(function(){
    "use strict";

    console.log("Hi");

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log("");

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    console.log("")

    planets.unshift("The Sun")
    console.log("Changes:" + planets);

    console.log("")

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    console.log("")

    planets.push("Pluto")
    console.log("Changes:" + planets);

    console.log("")

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    console.log("")

    planets.shift("The Sun")
    console.log("Changes:" + planets);

    console.log("")

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    console.log("")

    planets.pop("Pluto")
    console.log("Changes:" + planets);

    console.log("")

    console.log('Finding and logging the index of "Earth" in the planets array.');

    let index = planets.indexOf("Earth")
    console.log(index)

    console.log("")

    console.log("Reversing the order of the planets array.");
    console.log(planets);

    console.log("")

    planets.reverse()
    console.log("Changes:" + planets);

    console.log("")

    console.log("Sorting the planets array.");
    console.log(planets);

    console.log("")

    planets.sort()
    console.log("Changes:" + planets);

})();
