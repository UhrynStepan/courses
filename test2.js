// 1. Створіть обєкт та масив
// * Використовуйте обєкт і масив створені в першому заданні у всіх наступних завданнях
let arr = [1,2,3,4];
let object = {
    first_name: 'stepan',
    last_name: 'uhryn',
    age: 22,
    location: 'Ukraine'
}
// 2. Додайте до обєкту ключ "birthdate" типу Date
object.date = new Date();
//console.log(object);

// 3. Додайте новий елемент в кінець масиву
arr.push(123);
//console.log(arr);

// 4. Видаліть з обєкту доданий ключ у завданні 3
delete object.date;
//console.log(object);

// 5. Видаліть елемент з масиву доданий у завданні 4
delete arr[arr.length -1];
//console.log(arr);

// 6. Додайте до обєкту метод який буде виводити ваше імя і прізвище.
object.getName =  () => `${object.first_name} ${object.last_name}`
//console.log( object.getName() );

// 7. Створіть конструктор який буде відтворювати функціонал який є наявний в обєкті

function GetFullName(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.getName = () => `${this.first_name} ${this.last_name}`;
}
const newName = new GetFullName('Andrii', 'Uhryn')
//console.log(newName.getName());

// 8. Створіть новий конструктор який буде унаслідувати функціонал конструктору з попереднього звдання і буде мати додатковий метод для виводу дати народження.

    class myDate extends GetFullName {
        constructor() {
          super();
        }
        getDate() {
            console.log(this.date = new Date('07-12-1996'));
        }
    }
   // console.log(new myDate());

// 9. Створіть новий eлемент за допомогою конструктору з попереднього завдання і виведіть імя та прізвище або дату народження.
let newUser = new myDate('stepan', 'uhryn', '07-12-1996');
console.log(newUser.getDate());
