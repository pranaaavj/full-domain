import { EventEmitter } from 'events';

const events = new EventEmitter();

events.on('run', (name) => {
  console.log(name + ' is running...');
});

events.emit('run', 'Pranav');
