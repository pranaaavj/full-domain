import express from 'express';
import fs from 'fs';

const app = express();

app.get('/', (req, res) => {
  fs.stat('./test.md', (err, stats) => {
    if (err) return res.json({ message: 'Error occurred' });

    res.json({ stats });
  });
});

app.listen(3000, () => {
  console.log('Server has started');
});
