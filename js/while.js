let num = 1

while(num < 65536){

    num*=2
    console.log(num);
}

console.log("")
console.log("~~~~~~~~~~~~~~~~")
console.log("")

let totalCones = getRandomInt(50,100);
//create another variable to hold how many cones a customer will buy
let wantToBuy;


do{

    wantToBuy = getRandomInt(1,5);

    if(wantToBuy <= totalCones){
        console.log(`A customer wants to buy ${wantToBuy}. You now have ${totalCones}`)
        totalCones -= wantToBuy;
    } else{

        console.log(`A customer tries to buy ${wantToBuy} cones but you only have ${totalCones} left`)
    }

    console.log(`You have ${totalCones} remaining`)

    if (totalCones === 0){
        console.log("You have sold all the cones!")
    }
}while(totalCones > 0)



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}