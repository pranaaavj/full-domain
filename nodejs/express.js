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

app.use((req, res, next) => {
  if (!Object.entries(req.query).length)
    return res.json({ message: 'Please pass query params' });
  next();
});

app.get('/new/:num1', (req, res) => {
  const { num1 } = req.params;
  const { num2 } = req.query;

  const answer = Number(num1) + Number(num2);
  res.json({
    answer,
  });
});

app.listen(PORT, (err) => {
  console.log('server started');
});
