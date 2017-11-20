const http = require('http');

const port = 3000;

const server = http.createServer((request,response) =>{
    response.writeHead(200,{"Content-Type": "text/html"})
    response.write("<h1>Welcome to my site</h1>")
    response.write("<p>Content coming soon ...</p>")
    response.end()
})

server.listen(port, ()=> {
    console.log(`Server is running on localhost${port}`)
})