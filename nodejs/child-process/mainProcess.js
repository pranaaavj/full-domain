import { fork } from 'child_process';

const child = fork('./childProcess.js');

child.send('Hello from main process');

child.on('message', (message) => {
  console.log(message);
  child.disconnect();
});
