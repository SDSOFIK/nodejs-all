
const fs = require("fs");
const http = require("http");
const path = require("path")

const server = http.createServer((req, res) => {
   // html file user read 
    if (req.url === "/") {

        fs.readFile("index.html", (error, data) => {

            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("HTML file loading error");
            }

            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }

        });

    }
// json file user read 
    else if(req.url ==="/api"){
        let student={
            name : "sofik",
            age : 22,
            dep : "CSE"
        };
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(student))
    }
 // image user read 
    else if (req.url ==="/image") {
        let img = path.join(__dirname , "Image.png")
        fs.readFile(img, (err, data)=>{
            if(err){
                res.writeHead(404)
                res.end("not found image ")
            }
            else{
                res.writeHead(200, {"content-type": "image/jpeg"})
                res.end(data)
            }
        })
    }

    else {
        res.end("No page found");
    }

});

server.listen(3000, () => {
    console.log("Server running...");
});
