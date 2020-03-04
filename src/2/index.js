function helloWorld() {
  console.log("Привет мир!");
}

helloWorld();
helloWorld();
helloWorld();

const hello = function () {
  console.log("Привет мир!");
};
const hello1 = hello;
hello();
hello1();

function sum(a, b) {
  return a + b;
}

const s = sum(10, 5);
console.log(s);

function a1() {
  const a = 'a';
}

function a2() {
  const a = 'a';
}
