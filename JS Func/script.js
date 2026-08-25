const Double = (num) => num * 2; 
const Half = (num) => num * 0.5; 
const Square = (num) => num * num; 
const Cube = (num) => num * num *num; 


console.log(Double(3));
console.log(Half(3));
console.log(Square(3));
console.log(Cube(3));


function MaxNum(){
    let nums = [];
    for (let i =0; i < 3; i++){
        nums.push(Number(prompt("Enter a number")));
    }
    return nums.toSorted((a,b) => b - a)[0];
}

// console.log(MaxNum());

function Pow(base, exponent){
    return Math.pow(base,exponent);
}

console.log(Pow(2.5,4));

function Divis(num1, num2){
    return num2 % num1 == 0;
}
console.log(Divis(4,16) ? "It Divides Evenly" : "It doesn't divide evenly");
console.log(Divis(3,16) ? "It Divides Evenly" : "It doesn't divide evenly");

const Words = ["Codebase","Divides","Evenly","exponent","Number","Double","Half","Enter","Agent","Generate"];

function Rand_Word(){
    let index = Math.floor(Math.random() * Words.length);
    return Words[index].toLowerCase();
}
function Jumble(word){
    let jumbled = "";
    let length = word.length;
    let arr = Array.from(word);
    for (let i = 0; i < length; i++){
        let index = Math.floor(Math.random() * (arr.length -1));
        jumbled += arr[index];
        arr = arr.filter((e,n) => n != index);
        
    }
    return jumbled;


}
console.log(Jumble(Rand_Word()));



