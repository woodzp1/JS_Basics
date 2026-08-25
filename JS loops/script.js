const c1 = prompt("Enter char")[0];
const c2 = prompt("Enter char")[0];
let s = "";
for (let i = c1.charCodeAt(0); i <= c2.charCodeAt(0);i++){
    s += String.fromCharCode(i);
    s += " ";
    
}
console.log(s);


const num = Number(prompt("enter num"));
for (let i = 0; i <=12; i ++){
    console.log(`${num} * ${i} = ${num * i}`);
}

let count = 0;
for (let i = 0; i <= 1000; i++){
    count += Math.round(Math.random());
}
console.log(`Heads ${count} Tails ${1000 - count}`);

let dice = [0,0,0,0,0,0];
for (let i = 0; i <= 6000; i++){
    let r = Math.floor(Math.random() * 6);
    dice[r]++;
}

console.log("1,\t,2,\t3,\t4,\t5,\t6");
console.log(`${dice[0]} \t ${dice[1]} \t ${dice[2]} \t ${dice[3]} \t${dice[4]} \t${dice[5]} \t `);

let u = Number(prompt("enter a number"));
let c = 0;
while (u != 0){
    c += u;
    console.log(c);
    u = Number(prompt("enter a number"));
    
}