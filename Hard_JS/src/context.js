// Context!!! + proto practice

function hello() {
    console.log('hello', this)
}

const person = {
    name: 'Pavlo',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: `Elena`,
    age: 23
}


const fnLenaInfoLog = person.logInfo.bind(lena, 'Waitress', '0938258470')
fnLenaInfoLog()



const array = [1,2,3,4,5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }

Array.prototype.multBy = function(n) {
    console.log('multBy', this)
    return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(2));

Array.prototype.divide = function (number) {
    return this.map(function (i) {
        return i / number
    })
}

const newArr = [10, 20, 30, 40 ,50]

console.log(newArr.divide(2));



