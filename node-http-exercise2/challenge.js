const url = require('url')
const http = require('http')
const port = 3000


const server = http.createServer((req,res)=>{
    if(url.parse(req.url).pathname === `/api/parsetime`){
        var date = url.parse(req.url).query
        var que = date.substring(date.indexOf("=")+1)
        res.end(que)
    }
})

server.listen(port, ()=>{
    console.log(`Server running on localhost${port}`)
})