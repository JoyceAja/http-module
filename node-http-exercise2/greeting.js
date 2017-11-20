const url = require('url')
const http = require('http')
const port = 3000

console.log(url)

const server = http.createServer((req,res)=>{
    var newUrl = url.parse(req.url).query
    if(newUrl){
        res.writeHead(200,{"Content-Type" : "text/html"})
        res.end(`Hello ${newUrl.substring(newUrl.indexOf("=")+1)}`)
    }
    res.end(`Please provide a name`)
})
server.listen(port, ()=>{
    console.log(`Server running on localhost${port}`)
})