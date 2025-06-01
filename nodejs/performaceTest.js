const tock = performance.now();

for (let i = 0; i < 100000000; i++) {}

const tick = performance.now();

console.log('Took this much time', tick - tock);
