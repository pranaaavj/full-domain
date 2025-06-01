function greetName(cb) {
  const name = 'Pranav';
  cb(name);
}

greetName(consoleName);

function consoleName(name) {
  console.log(name);
}
