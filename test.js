// 1) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення
let canChange = 'hello';
const canNotChange = 123;
// 2) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

// one line
/*
line 1
line2
*/
// 3) Створіть "масив" який буде містити 5 довільних значень.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з масиву перше і останнє значення.
// * Виведіть змінну в консоль за допомогою "console.log"
let arr = [2,3,4,true,'hello']
console.log(arr);// якшо ти мав наувазі вивести весь масивж

delete arr[0];
delete arr[4];
console.log(arr);


// 4) Створіть "об'єкт" який буде містити 5 довільних ключів із довільними значеннями.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з об'єкту перший і останній ключ
// * Виведіть змінну в консоль за допомогою "console.log"

let obj = {
    val1: true,
    val2: 'hello',
    val3: 2,
    val4: null,
    val5: [2,4,5,'hello'],
}

console.log(obj);
delete obj.val1;
delete obj.val5;
console.log(obj);

// 5) Напишіть всі способи створення функції.
someFunc = () =>{  };
const anotherFunc = function () {};
// 6) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

let val11 = 2;
let val22 = 10;
let val33 = 22;


const sum = function (val1,val2,val3) {
    return val1 + val2 + val3;

}

console.log(sum(1,2,3));
console.log(sum(val11,val22,val33));

// 7) За допомогою тернарного оператору присвойте значення у змінну "salary" використовуючи змінну "workType". Якщо workType дорівнює "fulltime", тоді значення змінної має бути "1000" інакше "500".
// * Виведіть "salary" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "1000" в іншому "500"

let workType = 'fulltime';
let salary = workType === 'fulltime' ? '1000': '500';
console.log(salary);

workType = 'part'
salary = workType === 'fulltime' ? '1000': '500';
console.log(salary);


// 8) Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Використовуючи "switch" виведіть в консоль "a" або "b" або "c", виконайте те саме за допомогою "if else";
// * Зробіть два різні приклади

let hello = prompt("how old are you?");
console.log(hello);
switch(hello) {
    case 'firstValue':  
        console.log('a');
        break;
    case 'secondValue':
        console.log('b');
        break; 
    case 'thirdValue':
        console.log('c');
        break;       
}


