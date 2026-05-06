const http = require("http")
const url = require("url")
const queryString = require("querystring")

const server = http.createServer((req, res )=>{
const persUrl = url.parse(req.url)
const query = queryString.parse(persUrl.query)
res.writeHead(200, {"content-type": "text/plain"})

res.write(`name : ${query.name || "not found"}\n`)
res.write(`age : ${query.age || "not found"}`)

res.end()

})

server.listen(5000, ()=>{
    console.log("server runnig........")
})