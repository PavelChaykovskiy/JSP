// Map.js

const obj = {
    name: 'Pablo',
    age: 27,
    job: 'Front-End'
}

const entries = [
    ['name', 'Pablo'],
    ['age', 27],
    ['job', 'Front-End']
]



// console.table(Object.entries(obj));
// console.table(Object.fromEntries(entries));

const map = new Map(entries);

// console.log(map.get('job'));

map.set('newField', 42)
    .set(obj, 'Value of object')
console.log(map);