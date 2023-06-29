// //============Easy going=========

// for (let i = 0; i <=20; i++){
//     console.log(i);
// }

// //=============Get Even============

// for (let i = 2; i <= 200; i+=2) {
//     console.log(i);
// }

// //==============Fizz Buzz==============
// for (let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 ===0){
//         console.log("FizzBuzz");
//     }else if(i % 3 === 0){
//         console.log("Fizz");
//     }else if(i % 5 === 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }

// //=========Wild Wild Life =================
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant",  5000 , "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// plantee[2] = 5001;
// console.log(plantee[2]);

// wolfy[3] = "Gotham City"
// console.log(wolfy[3]);

// dart.push("Hawkins");
// console.log(dart[dart.length -1]);

// wolfy.splice(0, 1 , "Gameboy");
// console.log(wolfy[0]);

//=======Yell at the Ninjag Turtles===============
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase());
}