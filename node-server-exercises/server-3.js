const fs = require("fs")
const http = require("http")
const port = 3000

fs.readFile("index.html","utf-8",(err,data)=>{
    if(err){
        throw err
    }
    var file = data
    const server = http.createServer((req,res)=>{
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end(file)
    })
    server.listen(port, ()=> {
        console.log(`Server is running on localhost${port}`)
    })
})