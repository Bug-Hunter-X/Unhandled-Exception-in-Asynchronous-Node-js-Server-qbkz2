const http = require('http');

const server = http.createServer((req, res) => {
  const doSomethingAsync = () => {
    setTimeout(() => {
      try {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          throw new Error('Something went wrong!');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('OK');
        }
      } catch (error) {
        console.error('Caught error:', error);  // Log the error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error'); // Send an error response
      }
    }, 100);
  };

  doSomethingAsync();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});