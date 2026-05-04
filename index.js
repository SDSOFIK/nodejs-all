const  http = require('http')
const fs = require('fs')

const server = http.createServer ((req , res) =>{
if(req === "/"){
    fs.readFile('index.html', (error , data)=>{
        if(error) {
            res.writeHead (500 , {'Content-Type' :'text/plain'})
            res.end('lodinge HTML')
        }
        else{
            res.writeHead(500, {'Content-Type' : 'text/html'})
            res.end(date)
        }
    })
}

})

server.listen(5000 , ()=>{
console.log("server runnig ")
} )