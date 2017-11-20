const fs = require('fs')
const http = require('http')
const url = require('url')
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", "utf-8", (err, data) => {
            res.end(data)
        })
    } else if (req.url === "/page-2") {
        fs.readFile("page2.html", "utf-8", (err, data) => {
            res.end(data)
        })
    } else if (req.url === "/page-3") {
        fs.readFile("page3.html", "utf-8", (err, data) => {
            res.end(data)
        })
    } else if (req.url === "/page-4") {
        fs.readFile("page4.html", "utf-8", (err, data) => {
            res.end(data)
        })
    } else {
        res.end('file does not exist')
    }
})

server.listen(port, () => {
    console.log(`Server is running on localhost${port}`)
})