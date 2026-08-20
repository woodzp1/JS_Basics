let account = Number(prompt("Enter balance"));

if (account > 0){
    account *= 1.03;
}
else{
    account -= 20;
    console.log("Overdraft");

}
console.log(account);

account = Number(prompt("Enter balance"));

if (account > 0){
    account *= 1.03;
}
else{

    console.log("Overdraft");

}
console.log(account);

let nums = []
for(let i = 0; i <3; i++){
    nums.push(Number(prompt("Enter a number")));
}
nums = nums.sort(n => n);

console.log(nums);

nums = [];
let odd = 0;
for (let i = 0; i < 3; i++) {
  const num = Number(prompt("Enter a number"));
  nums.push(num);
  if (num % 2 == 1) {
    odd += 1;
  }
}
console.log(odd);

console.log(odd == 3 ? "all Odd" : "not all odd");

let team1 = Math.floor(Math.random() * 10);

let team2 = Math.floor(Math.random() * 10);

console.log(team1 < team2 ? "team 2 won" : team1 === team2 ? "Draw" : "team 1 Won");

nums = [];
for (let i = 0; i < 3; i++) {
  nums.push(Number(prompt("Enter a number")));
}
nums = nums.sort((n) => n);
let avg = 0;
for (const num of nums) {
  avg += num;
}
if (avg / 3 > 95) console.log("Merit");
else {
  if (nums[0] <= 80) {
    console.log("pass");

  }
  else{
    console.log("Fail");

  }

}

let num = Number(prompt("Enter a number"));

console.log(num % 4 ===0 ? "Multiple of 4" : num % 2 === 0 ? "Even but not a multiple of 4" : "Odd");

let city = prompt("Enter city");

switch (city) {
  case "Wgtn":
  case "wgtn":
  case "WLG":
  case "Wellington":
    console.log("City is Wellington");
    break;
  default:
    console.log("Some other city");
}
