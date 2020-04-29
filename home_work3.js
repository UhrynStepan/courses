// 1) Використовуючи оператор "Рівності (==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("1");

console.log( true == false);
console.log( true == true);

// 2) Використовуючи оператор "Нерівності (!=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("2");

console.log( true != true);
console.log( true != false);
// 3) Використовуючи оператор "Строгої рівності (===)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("3");

console.log( true === false);
console.log( true === true);
// 4) Використовуючи оператор "Строгої нерівності (!==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("4");

console.log( true !== true);
console.log( true !== false);

// 5) Використовуючи оператор "Більше ніж (>)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("5");

console.log( 2 > 4);
console.log( 2 > 1);

// 6) Використовуючи оператор "Більше чи дорівнює (>=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("6");

console.log( 5 >= 6);
console.log( 5 >= 5);


// 7) Використовуючи оператор "Менше ніж (<)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("7");

console.log( 5 < 3);
console.log( 5 < 7);

// 8) Використовуючи оператор "Менше чи дорівнює (<=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("8");

console.log( 5 <= 4 );
console.log( 6 <= 6 );


// 9) Використовуючи оператор "Логічне І (&&)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("9");

console.log( 2 === 4 && 4 === 4 );
console.log( 2 === 2 && 4 === 4 );

// 10) Використовуючи оператор "Логічне АБО (||)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("10");

console.log( 3 === 2 || 4 === 2 );
console.log( 10 === 'qwe' || 1 === 1 );


// 11) Використовуючи оператор "Логічне НЕ (!)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
console.log("11");

console.log( 2 !== 2);
console.log( 2 !== "some text");

// 12) Використовуючи оператор "Рядкове додавання (+)" додайте два значення типу "string".
// * Виведіть результат в консоль за допомогою "console.log"
console.log("12");
let my = "My name is ";
let name = "Stepan"

console.log("my name is " + "Stepan");
console.log(`${my}${name}`);
console.log(my + name);


// 13) За допомогою тернарного оператору присвойте значення у змінну "type" використовуючи змінну "color". Якщо колір дорівнює "червоний", тоді значення змінної має бути "пожежна" інакше "медична".
// * Виведіть "type" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "пожежна" в іншому "медична"
console.log("13");

let color = "red";
let type;

color === "red" ? type = "пожежна" : type = "медична";
console.log(type);
color = "blue";
color === "red" ? type = "пожежна" : type = "медична";
console.log(type);


// 14) Створіть об'єкт з довільними ключами і видаліть довільний ключ за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"
console.log("14");

let obj = {
    name: 'Stepan',
    age: 24,
    laptop: 'mac'
};

delete obj.laptop;
console.log(obj);

// 15) Створіть масив з довільними значеннями і видаліть довільне значення за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"
console.log("15");

let someArr = ['My', 'name', 'is', 'Stepan'];
delete someArr[2];
console.log(someArr);

let newArr = ['My', 'name', 'is', 'Stepan'];
newArr.filter( item => item !== 'is');
console.log(newArr);


// 16) Створіть об'єкт з довільними ключами і за допомогою оператору "in" визначіть наявність ключів у об'єкті. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"
console.log("16");

let newObj = {
    dog: "Name",
    car: 'Niva',
    driving_licence: false
}

console.log('car' in newObj);
console.log('qwer' in newObj);

// 17) Створіть масив з довільними значеннями і за допомогою оператору "in" визначіть наявність значення у масиві. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"
console.log('17');

let newArr2 = ['My', 'name', 'is', 'Stepan', color];

console.log(0 in newArr2);
console.log(7 in newArr2);


console.log(newArr2.includes(color));
console.log(newArr2.includes('color'));
