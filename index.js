const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

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

    else {
        res.end("No page found");
    }

});

server.listen(3000, () => {
    console.log("Server running...");
});