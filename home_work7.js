// 1. Створіть функцію за допомогою "function expression".
function function_expression () {}
// 2. Створіть функцію за допомогою "new Function".
let sum = new Function('a', 'b', 'return a + b');
// 3. Створіть функцію за допомогою "arrow function".
const arrowFunc = (arg1) => {
    return arg1
}
// 4. Створіть функцію яка приймає два аргументи, перший це обєкт другий це колбек.
const newFunc = ({}, cb) => {};
// 5. Створіть рекурсивну функцію.
const recurFunc = (arg1) => {
    for(let element in arg1 ){
            if (typeof arg1[element] === 'object'){
                for(let subElement in arg1[element]){
                    console.log(subElement);
                }
            }
    }
}
// 6. Створіть самовикликаючусь функцію.
(function () {
    var x = "Hello!!";  // I will invoke myself
  })();
// 7. Створіть функцію і виведіть в консоль всі аргументи які були їй передані.
function function_expression (arg1,arg2) {
    console.log(arguments);
}
console.log(function_expression(1,2));
