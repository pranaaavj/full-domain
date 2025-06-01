process.on('message', (message) => {
  if (message.message == 'start') {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) sum += i;
    process.send(`Sum: ${sum}`);
  }
});
