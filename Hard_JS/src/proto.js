// Prototypes open acces to all Objects

const person = new Object({
    name: 'Pavlo',
    age: 25,
    greet: function () {
        console.log('Greettee')
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello!')
}

const lena = Object.create(person)
const pavlo = Object.create(lena)
lena.name = "LEnon"


console.log(pavlo);

console.log('kurwa mac')

const str = 'I am string'

console.log(str.length);

