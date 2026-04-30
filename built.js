const { error } = require('console')

//file 
const fs = require ('fs')
// path
const path = require('path')

// url 
const url = require ('url')
const os = require('os');
/* 

// যদি কন ফাইল বানিয়তে চাই তাহলে  weiteFile দিয়ে (ফাইল এর নামে , ফাইল ভিতর যা রাখতে চাই ) দুই ভাবে ফাইলে বানান যায় async and sync ভাবে 

// আমরা sync and asyne কি তা জানি আগে 

/synchronous  হল একটা পর একটা কোড run হবে সিরিয়াল ভাবে একটা কাজ সেস করে পর কাজ করবে কাজ ছোট হক বা বড় হক আগেরটা শেষ না হয়া পজান্ত অপেখা করতে হয় 

Asynchronous  অ্যাসিনক্রোনাস হলো এমন একটি প্রক্রিয়া যেখানে একটি কাজ শেষ হওয়ার জন্য অন্য কাজকে অপেক্ষা করতে হয় না। কম্পিউটার প্রোগ্রামিং বা ডেটা ট্রান্সমিশনে মূল কাজ বা প্রোগ্রাম চলমান রেখেই দীর্ঘস্থায়ী কাজগুলো (যেমন ফাইল লোড, এপিআই কল) ব্যাকগ্রাউন্ডে সম্পন্ন করা যায়  

/

// file crate 

//যদি sync করে নিতে চাই তাহলে writeFileSync দিব  ১ম এ ফাইল এর নাম দিব ডট দিয়ে ফাইল এর ফরমেট দিব 


fs.writeFileSync("test.html", "hello txt file " )

//  asynce 
fs.writeFile('text.html', 'html:5', (err )=>{
    if (err) throw err;
  console.log("File created");
}) 

// file read বা পরা ফাইল এর ভিতর কি আছে তা পরতে পারি  aitay দুইটি aynce synce fs. readFileSync ("file name", utf8)  readFile(filename , utf8 , callBackFunction (err, date))

let data =fs.readFileSync("test.html", "utf8" )
console.log(data)
//  asynce 
fs.readFile('text.html', 'utf8', (err, data )=>{
    if (err) throw err;
  console.log(data);


})

// file update টেক্সট গুলা নতুন করে যোগ করা এবং ফাইল তা এদিতে করে  appendFile (file name , new content )



fs.appendFileSync("test.html",  "\n new line add  " )

//  asynce 
fs.appendFile('text.html', '\nhtml:5 good html ', (err )=>{
    if (err) throw err;
  console.log("File update");
}) 

// file delete 
fs.unlinkSync("test.html",  )

//  asynce 
fs.unlink('text.html',  (err )=>{
    if (err) throw err;
  console.log("File update");
}) 

// ফাইল rename করা
fs.rename('test.txt', 'newTest.txt', (err) => {
  if (err) throw err;
  console.log("File renamed");
});

*/


// path 

console.log(__dirname) // কোন folder এ এখন আছি ওইটা দেখায় 
console.log(__filename) // কোন folder and  ফাইল এ এখন আছি ওইটা দেখায় 

// নতুন পাথ বানানো
let filePath = path.join(__dirname, 'files', 'data.txt');
console.log(filePath);




const myUrl = new URL("https://example.com:8080/blog/post?id=10&name=sd#top");

console.log(myUrl.href);      // full URL
console.log(myUrl.protocol);  // https:
console.log(myUrl.hostname);  // example.com
console.log(myUrl.port);      // 8080
console.log(myUrl.pathname);  // /blog/post
console.log(myUrl.search);    // ?id=10&name=sd
console.log(myUrl.hash);      // #top



console.log(os.platform());
console.log(os.totalmem());
console.log(os.uptime());