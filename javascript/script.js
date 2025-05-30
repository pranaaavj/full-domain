const rootEl = document.querySelector('#root');
const listEl = document.createElement('ul');

const options = ['Hari', 'Pranav', 'Mithra'];

options.forEach((option) => {
  const optionEl = document.createElement('li');
  optionEl.textContent = option;
  listEl.appendChild(optionEl);
});

rootEl.appendChild(list);

const button = document.createElement('button');
const colors = ['red', 'blue', 'green'];

button.addEventListener('click', (e) => {
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * 3)];
});

button.textContent = 'Click me';

rootEl.appendChild(button);
