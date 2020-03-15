for (let i = 1; i <= 100; i++) {
  console.log("Была совершена поставка №: " + i);
}

const classroom = ['Паша', 'Саша', 'Коля', 'Денис', 'Коля'];
let counter = 0;
for (let i = 0; i < classroom.length; i++) {
  if (classroom[i] !== 'Коля') {
    continue;
  }
  counter++;
}
console.log(counter);

let counter1 = 0;

while(counter1 < 101) {
  console.log(counter1);
  counter1++;
}

counter1 = 101;

do {
  console.log(counter1);
  counter1++;
} while(counter1 < 101);
