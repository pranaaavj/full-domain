import fs from 'fs';

fs.readFile('./test.txt', (err, data) => {
  console.log(data);
  console.log(err);
  if (err) return;

  fs.writeFile('./new.txt', data, (err) => {
    if (err) return;
  });
});

// fs.unlink('new.txt', (err) => {
//   if (err)
//     return console.log(
//       'There was a problem while removing the file',
//       err.message
//     );

//   console.log('file removed successfully');
// });
