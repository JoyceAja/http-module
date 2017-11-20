const url = require('url')
const http = require('http')
const port = 3000
var text = `<!doctype>
<head>
    <title>Greeter</title>
    <script src="greeting2.js" defer="defer"></script>
</head>
<body>
    <h1> Hello ! </h1>
</body>
</html>`

const server = http.createServer((req,res)=>{
    var newUrl = url.parse(req.url).query
    if(newUrl){
        res.writeHead(200,{"Content-Type":"text/html"})
        var name = newUrl.substring(newUrl.indexOf("=")+1)
        var newText = text.replace(/Hello !/, `Hello ${name}!`)
        res.end(newText.toString())
    }
    res.end(`Please provide a name`)
})
server.listen(port, ()=>{
    console.log(`Server running on localhost${port}`)
})