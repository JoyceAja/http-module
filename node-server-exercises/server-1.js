const http = require('http');

const port = 3000;

const server = http.createServer((resquest,response) => {
    response.statusCode = 200;
    response.writeHead(200,{"Content-Type": "text/plain"})
    response.end(`Hello World`)
})

server.listen(port, () => {
    console.log(`Server running at on http://localhost:${port}`)
})