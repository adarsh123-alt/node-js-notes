const http = require('http');
const fs= require('fs')
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    console.log("welcome")
    res.write("welcome to my country")
    res.end()
  }
})
const PORT=3333
server.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`)
})