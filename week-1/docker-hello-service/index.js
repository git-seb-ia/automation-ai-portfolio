// index.js
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(process.env.MESSAGE);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
