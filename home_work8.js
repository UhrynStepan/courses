// 1. Створіть дві змінні типу стрінг і виведіть їх в консоль разом, використовуючи конкатинацію стрiнги.
let string1 = 'hello';
let string2 = 'world';
console.log(`${string1} ${string2}`);

// 2. Створіть змінну типу стрінг і виведіть в консоль її довжину.
let string3 = 'hey';
console.log(string3.length);

// 3. Створіть змінну типу стрінг і виведіть в консоль перший символ стрінги.
let string4 = 'hello moto';
console.log(string4[0]);

// 4. Створіть змінну типу стрінг і виведіть в консоль останній символ, довільної стрінги.
let string5 = 'Stepan';
let last = string5.length -1;
console.log(string5[last]);

// 5. Створіть змінну типу стрінг і приведіть змінну до верхнього регістру.
console.log(string5.toUpperCase());

// 6. Створіть змінну типу стрінг і приведіть змінну до нижнього регістру.
console.log(string5.toLowerCase());

// 7. Створіть змінну і присвойте в неї дату вашого народження.
let birthDay = new Date(1996, 11, 07);
console.log(birthDay);

// 8. Виведіть рік вашого народження (Використовуючи змінну з 7 завдання).
console.log(birthDay.getFullYear());

// 9. Виведіть місяць вашого народження (Використовуючи змінну з 7 завдання).
console.log(birthDay.getMonth());

// 10. Виведіть день вашого народження (Використовуючи змінну з 7 завдання).
console.log(birthDay.getDay());

// 11. Виведіть в консоль рік місяць день вашого народження через тире (-) (Використовуючи змінну з 7 завдання).
console.log(`${birthDay.getMonth()}-${birthDay.getDay()}`);

// 12. Створіть нову дату яка має 14 годину і 23 хвилини.
let birthday = new Date('December 17, 1996 14:23:00');
console.log(birthday);

// 13. Порівняйте дві дати між собою і результат виведіть в консоль.
console.log(birthday > birthDay);
