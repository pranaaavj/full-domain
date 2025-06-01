import { EventEmitter } from 'events';

const event = new EventEmitter();

event.on('walk', (...rest) => {
  const [greet, name, age] = rest;
  console.log(greet + ' ' + name + ' ' + age);
  console.log('Walking...');
});

event.emit('walk', ...['Hey there', 'Pranav', 'of age 22']);
