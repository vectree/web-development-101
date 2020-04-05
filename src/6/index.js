const btn2 = document.querySelector('#btn-2');
btn2.onclick = helloWorld;

const btn3 = document.querySelector('#btn-3');
btn3.addEventListener('click', helloWorld)

btn3.addEventListener('click', function () {
  alert('Другой обработчик!');
})

function helloWorld(e) {
  alert('Привет, мир!');
  console.log(e);
  e.target.style.background = '#000';
  e.target.style.color = '#fff';
}

const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    console.log("Мультиобработчик");
  });
})
