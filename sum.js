console.log(" Hiee Manuuu🤗")

const double=(num)=>num*2;
console.log(double(5));

//console.log(document)❌
//console.log(window)❌

//setTimeout and setInterval are prsent in node but not in window

//console.log(globalThis) - only in node js

console.log(process.argv);//will get the output in an array
const doublee=(num)=>num*2;
const[, , num]=process.argv
console.log(doublee(5));


