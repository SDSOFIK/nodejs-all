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