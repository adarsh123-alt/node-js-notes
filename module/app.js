const http = require("http");
const userRequestHandler = require('./user');
const server = http.createServer(userRequestHandler)

const PORT = 3044;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});