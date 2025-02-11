const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const doSomethingAsync = () => {
    setTimeout(() => {
      // Simulate an unexpected error
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        throw new Error('Something went wrong!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
      }
    }, 100);
  };

  doSomethingAsync();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});