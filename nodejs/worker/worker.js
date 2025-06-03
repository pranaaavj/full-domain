import { parentPort } from 'worker_threads';

parentPort.on('message', (message) => {
  console.log('Message from main: ', message);
  parentPort.close();
});

parentPort.postMessage('Hello from worker');
