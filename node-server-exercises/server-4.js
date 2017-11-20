const ops = require("./template.js")
const http = require("http")
const port = 3000

const str = ops.str()

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.end(str.toString())
})

server.listen(port, () => {
    console.log(`Server running on localhost${port}`)
})