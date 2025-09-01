let num = 123;
// let rev = 0;

// while(num > 0){
//     let numm = num % 10;
//     rev = rev * 10 + numm  
//     num = Math.floor(num / 10);
// }

// console.log(rev);

let rev = Number(num.toString().split("").reverse().join(""));

console.log(rev);