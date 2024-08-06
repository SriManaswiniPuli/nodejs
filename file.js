// const fs=require("fs")
// const quote="Stay hungry,Saty foolish"

// fs.writeFile("names.txt",quote,(err)=>{
//     console.log("completed writing")
// })

//err is callback function



//hardcodingg
//to create a folder,need to get same in 10files
// const fs = require("fs");
// const quotee = "Stay hungry, Stay foolish";
// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(folderName, quotee, (err) => {
//         console.log(`Completed writing `);
//     });
// }





// const fss = require("fs");
// const quotee= "Stay hungry , Stay Foolish";
// for (let i = 0; i < 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quotee, (err) => {
//     console.log("Completed successfully");
//   });

// }


//task2
// const fs=require("fss")
// const quote1= "Stay hungry , Stay Foolish";
// const createfiles=(num)=>{
//   const max_no_of_files=100;
//   if(num>max_no_of_files){
//     console.log("limit exceeded")
//     return ;
//   }

// for (let i = 1; i < num; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote1, (err) => {
//     console.log("Completed successfully");
//   });

// }
// }
// const[ , , nooffiles]=process.argv;
// createfiles(nooffiles);//pass value in terminal

// const fs=require("fs")
// fs.readFile("./fun.html","utf-8",(err,data)=>{

//   if(err){
//     console.log("Oops",err)
//   }
//   else {
//     console.log(data);
//   }
 
// })



// fs.appendFile("./fun.html", "\nStay calm", (err) => {
//   if (err) 
//   console.log("oops",err);

// }); 


//taskk
const fs=require("fs")
fs.readFile("./fun.html","utf-8",(err,data)=>{

  if(err){
    console.log("Oops",err)
  }
  else {
    console.log(data);
  }
 
})



fs.writeFile("./fun2.html","cooll",(err)=>{
  console.log("done successfully")
})




