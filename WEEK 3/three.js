// This is my third array (string) method which is a filter array

const people = [
    {
        name: 'Michael',
        age: 16
    },
    {
        name: 'Jim',
        age: 33
    },
    {
        name: 'Dwight', 
        age: 22
    }

];

const adults = people.filter(person =>person.age >= 18);

console.log(adults);















