import Person from './Person';
const person = new Person(process.argv[2]);
console.log(person.greet());
