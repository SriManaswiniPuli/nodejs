const os = require("os")

console.log(os.freemem()) //bytes

console.log(os.freemem()/1024/1024/1024)//kb mb gb
console.log(os.totalmem()/1024/1024/1024)

const a=os.freemem()/1024/1024/1024//kb mb gb
console.log(a.toFixed(2))//round to 2 digits

//percentage of used
b=os.totalmem()/1024/1024/1024
c=a*100/b
console.log(c.toFixed(2))

console.log(os.version())
console.log(os.cpus())

//sir codee                                                                      




