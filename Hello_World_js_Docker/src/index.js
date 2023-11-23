const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const method = req.method.toUpperCase();
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200, 'request is good');
  if (method === 'POST') {
    const response = JSON.stringify({ message: 'Hello World!' });
    res.end(response);
  } else {
    const response = JSON.stringify({ message: 'Welcome Automation' });
    res.end(response);
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});