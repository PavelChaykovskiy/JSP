const people = [
    { name: 'Pavlo', age: 25, budget: 40000 },
    { name: 'Piotr', age: 17, budget: 3400 },
    { name: 'Max', age: 49, budget: 50000 },
    { name: 'Ola', age: 15, budget: 1800 },
    { name: 'Jenia', age: 24, budget: 25000 },
    { name: 'Igor', age: 38, budget: 2300 }
]


// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let person of people) {
//     console.log(person);
// }



// ForEach 
// people.forEach(function (person, index, peopleArr) {
//     console.log(person);
//     console.log(index);
//     console.log(peopleArr);
// })

// people.forEach(el => console.log(el))


// Map 
// const newPeople = people.map(person => `${person.name} (${person.age * 3})`);
// console.log(newPeople);

// Filter

// const adults = [];
// for (let i = 0; i < people.length; i++) {
//     let personAge = people[i].age;
//     if (personAge >= 21) {
//         adults.push(people[i])
//     }
// }
// console.log(adults);


// const adults = people.filter(person => person.age >= 21)
// console.log(adults);

// Reduce 

// const personBudget = people.reduce

// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget;
// }

// console.log(amount);


// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount);


// Find 

// const igor = people.find(person => person.name == 'Igor')
// const igorIndex = people.findIndex(person => person.name == 'Igor')
// console.log(igorIndex);



// =======================================================================


