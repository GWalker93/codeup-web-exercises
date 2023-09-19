"use strict";

console.log("Hello")


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let atleast3Langues = users.filter((lan)  => {
    return lan.languages.length > 2;
});
console.log(atleast3Langues);

//     Use .map to create an array of strings where each element is a user's email address

let emails = users.map((x) => {
    return lan
})

// let catsHumanAge = catsOnlyArray.map((cat) => {
//     return `${cat.name} is ${(cat.age * 7)} years old`;
// })
//
// console.log(catsHumanAge);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

//     Use .reduce to get the longest email from the list of users.

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

