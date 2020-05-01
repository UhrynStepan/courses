// 1. Виведіть користувачу попап використовуючи функцію "alert" який містить довільне повідомлення.
alert('hello')
// 2. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let hello = prompt('are u human?');
console.log(hello);

// 3. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і має дефолтнe значення "13". Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let hello = prompt('are u human?', '13');
console.log(hello);

// 4. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let onDuti = confirm("Who is on duti tooday?");
console.log(onDuti);

// 5. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if" виведіть в консоль "1" якщо відповідь на питання була позитивна
let onDuti = confirm("Who is on duti tooday?");
console.log(onDuti);
if ( onDuti) {
    console.log('1');
}
// 6. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2"
let onDuti = prompt("Who is on duti tooday?");
console.log(onDuti);
if (onDuti) {
    console.log('1');
} else {
    console.log('2');
}
// 7. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2" або "3"
let onDuti = prompt("Who is on duti tooday?");
console.log(onDuti);
if (onDuti) {
    console.log('1');
} else if(onDuti === '123') {
    console.log('2');
} else {
    console.log('3');
    
}
// 8. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" якщо відповідь на питання була позитивна
let onDuti = confirm("Who is on duti tooday?");
console.log(onDuti);
switch(onDuti) {
    case 'value1':  // if (onDuti === 'value1')
      console.log('1');
      break
}
// 9. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2"
let onDuti = prompt("Who is on duti tooday?");
console.log(onDuti);
switch(onDuti) {
    case 'value1':  // if (onDuti === 'value1')
        console.log('1');
        break;
    case 'value2':
        console.log('2');
        break;    
}
// 10. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3"
let onDuti = prompt("Who is on duti tooday?");
console.log(onDuti);
switch(onDuti) {
    case 'value1':  // if (onDuti === 'value1')
        console.log('1');
        break;
    case 'value2':
        console.log('2');
        break; 
    case 'value3':
        console.log('3');
        break;       
}
// 11. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3", виконайте те саме за допомогою "if else";
// *Зробіть два різні приклади
let onDuti = prompt("Who is on duti tooday?");
console.log(onDuti);
switch(onDuti) {
    case 'value1':  // if (onDuti === 'value1')
        console.log('1');
        break;
    case 'value2':
        console.log('2');
        break; 
    case 'value3':
        console.log('3');
        break;       
}


let someCase = prompt('how old are you?');
if (someCase === '18'){
    console.log('1');
} else if (someCase === '20'){
    console.log('2');
} else {
    console.log('3');
}