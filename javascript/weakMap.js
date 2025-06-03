let obj = {
  name: 'Pranav',
};

const map = new WeakMap();

map.set(obj, 'user');

obj = null;

console.log(map);
