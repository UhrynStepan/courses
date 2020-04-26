// 1) Оголосіть три різні змінні за допомогою "let", "const", "var"

let a = 'cat';
const b = 123;
var c = true;
// 2) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення
let canChange = 'person';
const canNotChange = 123;

// 3) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

//one line comment
 
 /* 1
  2
  3
  4 */

// 4) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу String.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
    const someString = 'some string';
    console.log('String', typeof someString);
    
// 5) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Number.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
    const someNumber = 123;
    console.log('Number',  typeof someNumber);
    
// 6) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Boolean.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
    const someBool = true;
    console.log('Bool', typeof someBool);
    
// 7) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Object яке буде містити хоча б 3 ключі.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
    const someObject = {
        key1: 'qwe',
        key2: 123,
        key3: true
    }
    console.log('Object', typeof someObject);
    
// 8) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Array яке буде містити хоча б 3 значення.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
    const someArr = [
        'cat',
        true,
        33
    ]
    console.log('Array', typeof someArr);
    
// 9) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Function.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
    someFunc = () =>{
        return 123
    }
    console.log('Аunction',typeof someFunc);
    
// 10) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Undefined.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
  let qwerty; 
  console.log('Undefined', qwerty);
// 11) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Null.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
    const undefinedVal = null;
    console.log('Undefined', typeof undefinedVal);
    
// 12) Оголосіть змінну user типу Object і опишіть своє: ім'я, фамілію, дату народження,
// місце проживання, стать і можете добавити ще додаткові параметри використовуючи різні типи даних.
    const user = {
        age: 24,
        gender: 'male',
        lastName: 'Uhryn',
        firstName: 'Stepan',
        dateBirth: '07.12.1996',
    }
    console.log('user', user);
    

