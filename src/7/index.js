const tank = {
  x: 10,
  y: 10,
  speed: 10,
  damage: 5,
  hp: 5,
  true: 3,
  'Shoot at Vasya': true,
  moveForwardX: function() {
    this.x = this.x + 10;
  }
};
console.log(tank.x);
console.log(tank.y);
tank.isAlly = true;
console.log(tank.isAlly);
delete tank.isAlly;
console.log(tank.isAlly);
console.log(tank['damage']);
console.log(tank['Shoot at Vasya']);
console.log(tank.x);
tank.moveForwardX();
console.log('Измененный x:');
console.log(tank.x);
const keyName = 'check';
const obj = {
  [keyName]: true,
};
console.log(obj.check);
const name = 'Влад';
const surname = 'Иванов';
const person = {
  name,
  surname,
};
console.log(person.name);
console.log(person.surname);
const n = "Проверка";
const b = n;
const a = {
  name: 'Влад',
};
const a1 = {
  name: 'Влад',
};
const c = a;
c.name = 'Олег';
console.log(c.name);
console.log(a.name);
console.log(a1 === a);
console.log(a === c);
