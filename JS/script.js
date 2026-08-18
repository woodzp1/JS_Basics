console.log("Welcome to Web 1 JavaScript\n ");

let names = prompt("Who are you");
let time = prompt("How long have you lived in Dunedin");

console.log(`Hi ${names} \n ${time}  years is long enough to get a feel for the place`);

let num1 = Number(prompt("Enter First number"));
let num2 = Number(prompt("Enter a second number"));

console.log(num1 + num2);

let tv = Number(prompt("How many hours a night do you watch tv"));

let week = tv * 7;
let month = tv * 30;
let year = week * 52; 

console.log(`you watch ${week} hours a week, You watch ${month} hours a month, You watch ${year} hours a year`);



let age = Number(prompt("How old are you?"));

let day = age * 365;
let hours = day * 24; 

console.log(`You are ${day} days old, You are ${hours} hours old`);

let speed = Number(prompt("Average speed"));
let total = Number(prompt("Total time"));
let stopped = Number(prompt("Stopped time"));


let dist  = speed * (total - stopped);

console.log(`${dist} kms traveled`);

let milk1 = Number(prompt("price 1"));
let milk2 = Number(prompt("price 2"));
let milk3 = Number(prompt("price 3"));

console.log(`average $${((milk1 + milk2 + milk3) / 3).toFixed(2)}`);





