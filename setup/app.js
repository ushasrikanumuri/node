/*console.log("hi how are you")*/
const http=require("http")
http.createServer((req,res)=>{
res.write("good morning")
res.end()
}).listen(2003)