import express from 'express';
import fs from 'fs';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  fs.readFile('./test.js', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      fs.writeFile('./test.js', 'Hello there', (err) => {
        return res.json({ message: 'Test.js file was created' });
      });
      return;
    }
    res.json({ message: data });
  });
});

app.listen(PORT, (err) => {
  console.log('server started');
});
