const obj = {
  name: 'Pranav',
};

const proxyObj = new Proxy(obj, {
  get: (target, key) => {
    if (key in target) {
      return target[key];
    }

    return console.log(`${key} not in obj`);
  },
});
