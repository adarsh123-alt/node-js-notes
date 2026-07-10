// streams and chunks and buffers ky hota hai

// strams countious one direction mein data flow karta hai koi bhi ek ke karke trasfer hota hai internet mein data stream mein travel karta hai

// socket server ke pass jaoge localhost deta hai wo address hai
// duplex stream dono direction mein work hone

// duplex stram ka use karte hai do connection ke sath input and output ek sath dono side se communication

// chunk is smallest part to trasnfer data to server and internet data transefer stream mein hota hai per stram mein jo data hai sbse chota data wo chunk ke from mein hai

// Buffer jis order mein data send ke hai us order mein data pauche jarui nahi hai buffer jo data aayega uske pass number hoga jb khuch data aajega ab unko process ke liye behejega warna usko hold karega

// event drvin

// reuest and response
// routing redirect
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("👉 Request Headers:", req.url, req.method);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    fs.readFile("home.html", (err, data) => {
      if (err) {
        res.write("<h1>Error loading home page</h1>");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        res.write("<h1>Error loading about page</h1>");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/enquire") {
    fs.readFile("enquire.html", (err, data) => {
      if (err) {
        res.write("<h1> Error show kar raha hai </h1>");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (
    req.url.toLocaleLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const paresBody = Buffer.concat(body).toString();
      console.log(paresBody);
      const paramsn = new URLSearchParams(paresBody);
      const bodyObject = {};
      for (const [key, value] of paramsn.entries()) {
        bodyObject[key] = value;
      }
      fs.writeFile("userData.txt", JSON.stringify(bodyObject),(err)=>{
        if(err){
          console.error("error",err);
        }
      console.log(bodyObject);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
    });
  } else {
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});
const PORT = 3050;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
