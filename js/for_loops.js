//#1-2

console.log("Hey");
//
function showMultiplicationTable(x) {

    for (let i = 1; i <= 10; i++) {
        let answer = (x * i);
        console.log(x + " x " + i + " = " + answer);
    }
}
showMultiplicationTable(7)

// #3


for (let i = 0; i < 10; i++) {
//get an int 20-200
        let num = getRandomInt(20,200)
//log the number and if its even
        console.log(`${num} is ${isEven(num)}`);
}

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
}
function isEven(num){
        if(num % 2 === 0){
                return 'even';
        }
        return 'odd';
}
// #4

function x(y){
for (let i = 1; i <= 9; i++) {
    a1 = (i*(i))
    a2 = (i+1)
    a3 = (i+2)
    a4 = (i+3)

    console.log(a1)
    console.log(a2,a2)
    console.log(a3,a3,a3)
    console.log(a4,a4,a4,a4)
 }}

for (let i = 100; i > 0; i -= 5){
        console.log(i)}


console.log("")
console.log("~~~~~~~~~~~~~~~~")
console.log("")
