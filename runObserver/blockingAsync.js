const fs= require('fs')
console.log("1 ,start of script");

// synchronous blocking operation 
console.log(" 2 reading file synchronously")
const dataSync = fs.readFileSync('user-data.txt','utf8');
console.log('3 synchronous read complete');

// asynchronous (non blocking ) oprations

console.log('4 reading file asynchronously')
fs.readFile('user-detail.txt','utf8',(err,data)=>{
  if(err) throw err;
  console.log('6 asynchronous read complate')
});
console.log('5 end complate')
// 1 2 3 4 5 6

console.log('1 start of script')
//  microtask queue (ppromise)

Promise.resolve().then(()=>console.log('2 micro'))

// timer queue 
setTimeout(()=>{
  console.log('3 timer')
},0)
// i/o 
const fs=require(fs)
fs.readFile('user-data.txt',()=>{
  console.log('4 input output')
})

// check queue
setImmediate(()=>{
  console.log('5 immediate')
})
// close queue
process.on("exit",(code)=>{
  console.log(' 6 EXITE EVENT')
})
console.log('7 end')
// 1 7 2 3 5 4 6