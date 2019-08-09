const http = require('http');
const Coffee = require('../models/coffee');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( async(req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/onecoffee') {
    const oneCoffee = await Coffee.getById(3);
    const oneCoffeeJson = JSON.stringify(oneCoffee);
    res.end(oneCoffeeJson);
  } else {
    res.end(`{
      message: "Thank you for your patronage. Please send bitcoin!"
    }`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}${port}`);
});