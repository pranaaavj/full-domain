process.on('message', (msg) => {
  console.log(msg);

  process.send('Message from child ');
});
