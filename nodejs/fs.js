import fs from 'fs';

fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
  console.log(err);
  if (err) return;

  fs.writeFile('./new.txt', data, (err) => {
    if (err) return;
  });
});
