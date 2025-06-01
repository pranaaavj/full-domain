import http from 'http';

http
  .createServer((req, res) => {
    res.end('hello there bitch!');
  })
  .listen(300, () => console.log('server started'));
