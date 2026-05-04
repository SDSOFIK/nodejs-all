const http = require('http');

//import korci 
const math = require ("./math")
// একটা server এ দুইটা অপশন থাকে requst and red 
const server = http.createServer((req, res) => {

  //যেখন url a request করবে ওই request টা let url a আসে জমা হবে  
let url = req.url

// url যদি কেন requst na kore thle 
if (url === "/"){
  // 

res.write("Home Page ")
  res.end();
}

else if (url === "/about"){

res.write("about Page ")
  res.end();
}
else if (url === "/Service "){

res.write("Service Page ")
  res.end();
}
else{
  res.end("Error File bro ")
}


});
// kon server a run করব 
server.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});


