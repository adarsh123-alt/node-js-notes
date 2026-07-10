console.log("welcome to the index.js file!");
let l=[0,1,2,3,4,5,6,7,8,9];
l.forEach((item,value)=>{
  console.log(item,value);
})

let x=l.map((item)=>{
  return item*2;
})

console.log(x);

let y=x.filter((item)=>{
  return item % 2 != 0;
})
console.log(y);
console.log("hello world");
module.exports = {l,x,y};