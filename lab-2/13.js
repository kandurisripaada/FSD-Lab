const data = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];

const [firstPerson, secondPerson] = data;

const { name: firstName, age: firstAge } = firstPerson;
const { name: secondName, age: secondAge } = secondPerson;

console.log(firstName, firstAge); 
console.log(secondName, secondAge); 
