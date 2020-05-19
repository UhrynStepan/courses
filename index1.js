// 1. Створіть index.html file and index.js file. Підключіть джс до html.

// 2. Виведіть в консоль body
console.log(document.body);

// 3. Виведіть в консоль довільний eлемент викoристовуючи getElementById
console.log(document.getElementById('someID'));

// 4. Виведіть в консоль довільний eлемент викoристовуючи getElementsByClassName
console.log(document.getElementsByClassName('someID'));

// 5. Виведіть в консоль довільний eлемент викoристовуючи getElementsByTagName
console.log(document.getElementsByTagName('p'));

// 6. Створіть елементи для взяємодії з користувачем (button and input)

// 7. Напишіть функцію яка буде взяємодіяти з button і буде виводити alert користувачу з довільним текстом 
const handleAlert = () => {
    alert('some alert')
}
// 8. Напишіть функцію яка буде взяємодіяти з input і буде виводити в консоль значення яке ввів користувач
const showInputText = (e) => {
    console.log(e.target.value);
}