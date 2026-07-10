const fs=require('fs')
const requestHandler = ((req, res) => {
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
        res.write("<h1> Error show kar raha hai");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (
    req.url.toLocaleLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.text", "Adarsh pandey");
    res.statusCode = 302;
    res.setHeader('Location','/')
    res.end()
  } else {
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});
module.exports = requestHandler;