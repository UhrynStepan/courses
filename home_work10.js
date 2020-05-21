//1 Створіть об'єкт Person який буде містити імя, прізвище і метод для виводу повного імені і просто імені за допомогою трьох різних варіантів
const person = {
    first_name: 'stepan',
    last_name: 'uhryn',
    getName: () => first_name,
    getFullName: () => `${first_name} ${last_name}`
}
//2 Просто функції

const showName = (first_name, last_name) => {
    const person = {};
    person.first_name = first_name;
    person.getName = () => first_name;
    person.getFullName = () => `${first_name} ${last_name}`;

    return person
}
const stepan = showName('stewepan', 'uhryn');

console.log(stepan.getFullName());

//3 Функції конструктору

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.getName = () => this.first_name;
    this.getFullName = () => `${this.first_name} ${this.last_name}`;
}

const qwe = new Person('stepan', 'uhryn')
console.log(qwe.getFullName());

//4 Класу
class Person1 {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    getName() {
        console.log(this.first_name);
    };
    getFullName() {
        console.log(`${this.first_name} ${this.last_name}`);
    }
}

let newUser = new Person1('stepan', 'uhryn');
