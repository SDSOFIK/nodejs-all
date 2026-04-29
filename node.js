const http = require('http');
const math = require ("./math")

const server = http.createServer((req, res) => {
 let sum = math.sum(59, 66)
let sub = math.sub(59, 66)
console.log(sum)
console.log(sub)



  res.end(`Hello Node.js \n sum: ${sum} \n sub: ${sub}`  );
});

server.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});


