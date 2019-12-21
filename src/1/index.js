let z;
console.log(z);
let g = null;
console.log(g);
const str1 = "Привет мир!";
const str2 = 'Привет мир 2!';
console.log(str1, str2);
const str3 = `Привет ${str1}, ${str2}`;
console.log(str3);
const str4 = `Привет
Привет 2
Привет 3`;
console.log(str4);
console.log('Привет\nМир!');
const l = str1.length;
console.log(l);
const l1 = str1.slice(1, 3); // Привет мир! => ри
const l2 = str1.slice(-4, -1); // Привет мир! => мир
const l3 = str1.substring(1, 3); // Привет мир! => ри
const l4 = str1.substr(1, 2); // Привет мир! => ри
console.log(l1, l2, l3, l4);

const i = 5;
console.log(i > 5 && i < 10); // false
console.log(i > 4 && i < 6); // true
console.log(i > 5 || i < 10); // true
console.log(i > 5 || i > 10); // false
console.log(!(i > 5)); // true
console.log(!true); // false

let isBoxOpen = false; // Закрыта
let isKeyTaken = true; // Ключ взят

if (!isKeyTaken) {
  console.log('Ищем ключ');
} else if (!isBoxOpen) {
  console.log('Открыть коробку, ключ уже есть');
  isBoxOpen = true;
} else {
  console.log('Коробка уже открыта и ключ взят');
}

if (isBoxOpen) {
  console.log('Взять из коробки вещи');
} else {
  console.log('Мы не можем взять вещи. Коробка закрыта.')
}

