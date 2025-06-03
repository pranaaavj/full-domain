import { Worker } from 'worker_threads';

const worker = new Worker('./worker.js', { workerData: 10 });

worker.on('message', (msg) => {
  console.log('Message from worker: ', msg);
});

worker.postMessage('Hello from main');
