// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let someNumber = 24;
String(someNumber);
console.log('string', typeof String(someNumber));

// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let oneMoreNumber = 22;
Boolean(oneMoreNumber);
console.log('bool', typeof Boolean(oneMoreNumber));

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let age = 25;
age = null;
console.log('null', typeof age);

//console.log(typeof Null(age));

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let someString = 'qwe';
Number(someString);
console.log('number', typeof Number(someString));

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let oneMoreString = 'asd';
Boolean(oneMoreString);
console.log('bool',typeof Boolean(oneMoreString));

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let name = 'stepan';
name = null;
console.log('null',typeof name);

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let someBool = true;
String(someBool);
console.log('string',typeof String(someBool));

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let oneMoreBool = false;
Number(oneMoreBool);
console.log('number',typeof Number(oneMoreBool));

// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let game = true;
game = null;
console.log('null',typeof game);

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let someNull = null;
String(someNull);
console.log('string', typeof String(someNull));

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let oneMoreNull = null;
Number(oneMoreNull);
console.log('number', typeof Number(oneMoreNull));

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let abc = null;
Boolean(abc);
console.log('bool', typeof Boolean(abc));

// 13) Напишіть всі способи створення функції.
firstFunc = () => { return 'qwe'};
const secondFunc = function () {};

// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію

nothingToReturn = () =>{ }

// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію
returnName = () => { return  'Stepan'};
console.log('my name' , returnName());

// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
let firstNumber = 10;
let secondNumber = 20;
let thirdNumber = 30;

returnOneArg = (a) => { return a };

returnOneArg(firstNumber);
returnOneArg(10);
console.log('oneArg', returnOneArg(firstNumber));

// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
sum = (first, second) => { return first + second};

sum(firstNumber,secondNumber);
sum(5,10)
console.log('sum', sum(firstNumber,secondNumber));

// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
sumTreeArg = (a,b,c) => { return a + b + c };

sumTreeArg(firstNumber,secondNumber, thirdNumber);
sumTreeArg(5, 2, 4)
console.log('tree arg', sumTreeArg(firstNumber,secondNumber, thirdNumber));
