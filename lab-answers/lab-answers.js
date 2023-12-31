//============Easy going=========

for (let i = 0; i <=20; i++){
    console.log(i);
}

//=============Get Even============

for (let i = 2; i <= 200; i+=2) {
    console.log(i);
}

//==============Fizz Buzz==============
for (let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

//=========Wild Wild Life =================
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001;
console.log(plantee[2]);

wolfy[3] = "Gotham City"
console.log(wolfy[3]);

dart.push("Hawkins");
console.log(dart[dart.length -1]);

wolfy.splice(0, 1 , "Gameboy");
console.log(wolfy[0]);

//=======Yell at the Ninjag Turtles===============
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase());
}

//===============Methods Revisited====================
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log the index of Titanic.
console.log(favMovies[8]);

//Use the .sort method
console.log(favMovies.sort());


//push "Guardians of the Galaxy".
favMovies.push("Guardians of the Galaxy");

//Use the method pop.
favMovies.pop();
console.log(favMovies);

//Reverse the array.
console.log(favMovies.reverse());

//Use the shift method.
favMovies.shift();
console.log(favMovies);

//unshift - what does it return?
favMovies.unshift("Toy Story");
console.log(favMovies);

//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).

favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");

console.log(favMovies);

//slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
let slicedArr = favMovies.slice(favMovies.length/2);
console.log(slicedArr);

//After running the above tasks, console.log the index of "Fast and Furious."
// console.log(favMovies.indexOf("Fast and Furious"));

//=================Where is Waldo======================
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];

//Remove Eggbert (hint look at the slice/splice methods).
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);

//Change "Neff" to "No One".
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

//Access and console.log "Waldo".
console.log(whereIsWaldo[2][1][1]);