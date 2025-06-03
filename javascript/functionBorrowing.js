const obj = {
  name: 'Pranav',
};

function getName(greet) {
  console.log(greet + this.name);
}

getName.apply(obj, ['Hello ']);

getName.call(obj, 'Hello ');

const callPranav = getName.bind(obj, ['Hello ']);

callPranav();
