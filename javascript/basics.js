async function getOrder() {
  try {
    const response = await fetch('https://dummyjson.com/test');
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

console.log('Hi');
getOrder();
console.log('Bye');
