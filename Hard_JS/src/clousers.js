// // Closures -> function inside another function
//
// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }
//
// const result = createCalcFunction(2)
//
// console.log(result());

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
//
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
//
// console.log(addOne(10))
// console.log(addTen(41))

// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
// console.log(comUrl('google'))
// console.log(comUrl('netflix'))
// console.log(ruUrl('vk'))
// console.log(ruUrl('yandex'))

 function logPerson() {
     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
 }

const person1 = { name: 'Misha', age: 22, job: 'Front-End' }
const person2 = { name: 'Elena', age: 20, job: 'Full-Stuck' }


console.log(logPerson.bind(person2)());



