const http = require('http');

//import korci 
const math = require ("./math")
// একটা server এ দুইটা অপশন থাকে requst and red 
const server = http.createServer((req, res) => {
 let sum = math.sum(59, 66)
let sub = math.sub(59, 66)
console.log(sum)
console.log(sub)



  res.end(`Hello Node.js \n sum: ${sum} \n sub: ${sub}`  );
});
// kon server a run করব 
server.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});


