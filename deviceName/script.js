const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/myEndpoint') {
    const clientIp = req.socket.remoteAddress;

    const userAgent = req.headers['user-agent'];

    const response = {
      ip: clientIp,
      userAgent: userAgent
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
