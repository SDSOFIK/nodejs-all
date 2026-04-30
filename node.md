node js all important.... this file 

what is a node js node js হল একটি JavaScript runtime environment 
মানে — আগে JavaScript শুধু browser (Chrome, Firefox) এ চলত,
এখন Node.js দিয়ে তুমি server (backend)-এ JavaScript চালাতে পারো।

২০০৯ সালে Ryan Dahl node js তৈরি করেন এইটি Google Chrome-এর engine  দিয়ে তৈরি করা হয়েছ

node js দিয়ে কিকি তৈরি করা যায় 

১। সার্ভার তৈরি করা (যেমন: ওয়েব সার্ভার)
২। API তৈরি করা
৩। ফাইল তৈরি, লেখা, পড়া, মোছা
৪। রিয়েল-টাইম অ্যাপ (যেমন: চ্যাট অ্যাপ, মেসেজিং অ্যাপ)
৫। CLI টুলস (Command Line Interface Tools)
৬। ডেটাবেসের সাথে সংযোগ (যেমন: MongoDB)




Node.js একটাই thread ব্যবহার করে কিন্তু async ভাবে কাজ করে Non-blocking I/O 
লাইটওয়েট এবং ফাস্ট – V8 ইঞ্জিন ব্যবহার করে বলেই দ্রুত কাজ করে।
জাভাস্ক্রিপ্ট দিয়ে ব্যাকএন্ড – একই ভাষা দিয়ে ফ্রন্টএন্ড আর ব্যাকএন্ড করা যায়।


node.js run করার আগে আমদের জানে হবে node.js and npm install আছে কি না যদি থাকে তাহলে ভাল না থাকলে করে নিব chacck করার proses হল terminal a npm -v দিয়ে দেখতে পারব আছে কি না , server a run করার জন্য terminal a npn init --y diye pakec,jason on kore nibo package.json file akta asbe 






======================== global Object ======================================

// golabal object এ এমন একটা জিনিস যেটা তুমি সব জায়গায় (any module) কোনো require বা import ছাড়াই ব্যবহার করতে পারো।
/*__dirname
__filename
console
setTimeout()
setInterval()
process  */

// __dirname  হল এখন কোন ফোল্ডারের ভিতর আছি  তা দেখায় 
console.log(__dirname)

// __fillename হল যে কোন ফাইল এ আছে সেইটার নাম দেখাবে 
console.log(__filename)

//console ও হল একটা গ্লোবাল object যা দিতে প্রিন্ট বা ডিবাগ করা যায়  

console.log()
console.count("hello " )
console.error("hello " )
console.warn("good boy ")

// setTimeout() একটা নির্দিষ্ট সময় পর functon টা এক বের call  করবে 

setTimeout(() => {
  console.log("2 secc lete ")
}, 2000);

// setInterval কটা নির্দিষ্ট সময় পর functon টা বার বার call করতেই থাকে 
setInterval(() => {
  console.log(new Date())
}, 1000);

// process	বর্তমানে রান হওয়া নোড প্রসেস সম্পর্কে তথ্য দেয় (যেমন: Environment variables)।
console.log(process)

// global আমরা যদি custom গ্লোবাল বানাতে চাই তাহলে আমদের global ta দিয়ে করতে হবে 

global.myName = "SD Sofik"

//  এখন আমরা যেইখানেই এই নাম টাঁকে লগ করি না কেন আমরা ওর ভালু দেখতে পারব 
console.log(myName)


================================== coustum module =========================

আমরা ইচ্ছা মত ছোট ছোট অংশে module ভাগ করে নিয়ে কাজ করে থাকি মনে করি আমরা একটা যোগ এর function বানাব ওইটা সব জায়গায় বেহবার করব 

Custom Module মানে তুমি নিজে একটা file বানিয়ে সেখানে code লিখবা, তারপর অন্য file থেকে সেটা use করবা।

যেই module a আমরা custom code করব সেইখানে export করতে হয় 

module.exports = { functin name 1, function name 2  };

যেই module এ use করব সেইখানে সেই খানে 
cosne Varible name = (require('./fille Adrrres ');)

তারপর আমরা ওই function গুলা যে কন জায়গায় use করতে পারব ইচ্ছা মত 

custom module কন use করে জেখন অনেক বড় একটা project নিয়ে কাজ করি তখন ছোট ছোট module vag kore kaj kori code ke reuse korte 



=====================================  built-in module =================================

built-in Module হল যে NPM install  ছাড়া directly use করা যায় এই একটা একটা করে দেখব 

fs
http
path
URL
os
crypto
events
stream
zlib


fs হল কন ফাইল CRUD operation kore  

C -- Crate 
R----  Read 
U --- Update 
D ---- Delete 


HTTP সার্ভার তৈরি করার জন্য ব্যবহার হয়। আমরা এইটা node.js file করে run korci 



path হল কোন ফাইল কোন পাথ এ আছে ফাইল এর নামে host name
ফাইলের path ঠিক করা
folder/file নাম আলাদা করা
cross-platform path support



// URL  হল একটা URL এর ভিতর কি কি আছে কোন টা host name category name and products name all 

os hole operating system info নেওয়ার জন্য। CPU mamory ram er info paoya jay 
