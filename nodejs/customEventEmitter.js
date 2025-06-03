class CustomEvents {
  constructor() {
    this.events = {};
  }

  on(event, cb) {
    (this.events[event] ||= []).push(cb);
  }

  emit(event, ...args) {
    this.events[event].forEach((cb) => cb(...args));
  }
}

const events = new CustomEvents();

events.on('greet', (name) => console.log('Hello there !', name));

events.emit('greet', 'Pranav');
events.emit('greet', 'Hari');
