const container = document.querySelector('#container');

console.dir(container.firstElementChild);

const controls = document.querySelector('.controls');

console.dir(controls.previousElementSibling);

const divs = document.querySelectorAll('div');

console.dir(divs);

const div = document.createElement('div');

container.appendChild(div);

const old = container.removeChild(div);

container.style.background = 'black';
container.style.height = '100px';
container.style.width = '100px';

container.style.cssText = 'background: yellow; width: 100px; height: 100px;';

container.setAttribute('style', 'background: red; width: 200px; height: 100px;');

container.style.textAlign = 'center';
container.style.backgroundColor = 'aliceblue';

const div1 = document.createElement('div');
div1.setAttribute('id', 'test');
container.appendChild(div1);
const id = div1.getAttribute('id');
console.log(id);
div1.removeAttribute('id');

controls.classList.add('blue');
controls.classList.remove('blue');
controls.classList.toggle('blue');
controls.classList.toggle('blue');

container.textContent = 'Привет, мир!';
container.innerHTML = '<b>Привет, мир!</b>';
