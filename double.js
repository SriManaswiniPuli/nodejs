const sum=(a,b)=>a+b;
const [, , a, b]=process.argv;
console.log(sum(a,b))//it will be string


const summ=(c,d)=>+c + +d;
const [, , c, d]=process.argv;
console.log(summ(c,d))//to get in number -explicit cohersion

