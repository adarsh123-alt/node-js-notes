const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    fs.readFile('home.html', (err, data) => {
      if (err) {
        res.write("<h1>Error the Home Page</h1>");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === '/calcul') {
    fs.readFile('calcul.html', (err, data) => {
      if (err) {
        res.write("<h1>Error calculator page</h1>");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url.toLowerCase() === '/submit-form' && req.method === 'POST') {
    const body = [];
    req.on("data", (chunk) => {
      console.log("Chunk:", chunk.toString());
      body.push(chunk);
    });
    req.on("end", () => {
      const storeBuffer = Buffer.concat(body).toString();
      console.log("Raw Body:", storeBuffer);

      const paresData = new URLSearchParams(storeBuffer);
      let  storeData = {};
     // for (const [key, value] of paresData.entries()) {
      //  storeData[key] = value;
     // }
      storeData = Object.fromEntries(paresData);
      const result=Number(storeData.num1) + Number(storeData.num2)
      console.log(result)
      console.log("Parsed Data:", storeData);
      res.write(`${result}`);
      res.end();
    });
  } else {
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
