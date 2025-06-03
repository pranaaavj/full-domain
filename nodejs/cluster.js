import express from 'express';
import cluster from 'cluster';
import os from 'os';

if (cluster.isPrimary) {
  const osLength = os.cpus().length;

  for (let i = 0; i < osLength; i++) {
    cluster.fork();
  }

  cluster.on('exit', () => {
    console.log('A worker just died.');
    cluster.fork();
  });
} else {
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello brother from another mother.');
  });

  app.listen(6000, () => {
    console.log('Server started.');
  });
}
