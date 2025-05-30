setTimeout(() => {
  console.log('SetTimeout');
});

// Promise runs first because it's pushed to macro task queue.
Promise.resolve().then(() => console.log('Promise'));
