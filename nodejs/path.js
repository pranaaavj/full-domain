import path from 'path';

const joinedPath = path.join('/user', 'name', 'worker');
const absolutePath = path.resolve('user/name');
const baseName = path.basename(import.meta.filename);

console.log(baseName);
