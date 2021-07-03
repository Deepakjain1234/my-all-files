const fs = require("fs");
let text=fs.readFile("doc","utf-8",(a,b)=>{
    console.log(a,b);
});
console.log("this is massage");