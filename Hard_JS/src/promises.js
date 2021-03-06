// Что такое промисы?
// предназдначен что бы упростить работу с асинхронными операциями
// Promise - это класс в конструкцию которого ми должни передать колбек (ф-ю )
// console.log('request data..')
//
// setTimeout(() => {
//     console.log('Prepering data')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 3000)


// создали промис (такой клас) и внутри задали ф-ї резолв и реджект
// и внутри калл бека задаем асинхронную ф-ю
// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Prepering data')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// // в зен не обовязково повертати різолв
// p.then(data => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// }).then(clientData => {
//     console.log('Data recieved', clientData)
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {
//     console.log(data);
//     console.log('checkpointCharlie')
// }).catch(err => {
//     console.error('An Error', err)
// }).finally(() => console.log('Finally'));

// =====================================================

// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))


// Promise.all([sleep(2000), sleep(3000)])
//     .then(() => {
//         console.log('All promises');
//     })

// Promise.race([sleep(2000), sleep(3000)])
//     .then(() => {
//         console.log('Race Promises');
//     })

// func2()

// // Function Expression
// let func1 = function () { console.log('func1'); }

// // Function Declaration
// function func2() { console.log('func2'); }
// func2()

// console.log(func2);


// funciton declaration 
// funciton expression 
// function anonim
// function autorun
// function arrow



// (function () {
//     console.log('Bitch');
// })()


// let ask = function (question, yes, no) {
//     (question) ? yes() : no()
// }

// true ? console.log('true') : console.log('false')

// ask(true, function () { console.log('yes') }, function () { console.log('no') })


// let sum = (a, b) => a + b
// let min = (q, w) => q - w
// console.log(sum(2, 3));
// console.log(min(2, 3));


// let timer = setInterval(() => {
//     let ask = (question, yes, no) => (question) ? yes() : no()
//     ask(prompt('False or True?', ''), () => console.log('Accept'), () => console.log('Cancel'))
// }, 5000)

// setTimeout(() => {
//     clearInterval(timer)
// }, 15000)

// setTimeout(function run() {
//     let ask = (question, yes, no) => (question) ? yes() : no()
//     ask(prompt('False or True?', ''), () => console.log('Accept'), () => console.log('Cancel'))
//     console.log(run);
//     setTimeout(run, 2000)
// }, 2000)

// let sec = 2000


// let cat = {};
// let prom = new Promise(function (resolve, reject) {
//     cat.name = 'Murka'
//     cat.years = '3'
//     resolve(cat)
// })
// prom.then(cat => {
//     console.log(cat);
//     cat.friend = 'Pavlo'
//     console.log(cat);
// })


// =========================

// function loadScript(src) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve(script)
//         script.onerror = () => reject(new Error(`Ojojoj ${src} nie zaladowałsie`))

//         document.head.append(script);
//     })
// }

// let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');

// promise.then(
//     script => alert(`script ${script.src} loaded`),
//     error => alert(`Problemo Sir, our script ${script.src} didnot load`)
// )

// promise.them(script => alert(`Następny then`))

// =============================
// function loadScript(src) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve(script)
//         script.onerror = () => reject(new Error(`Ojojoj ${src} nie zaladowałsie`))

//         document.head.append(script);
//     })
// }

// let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js1');

// promise.then(
//     script => alert(`script ${script.src} loaded`),
//     error => alert(`Problemo Sir, our script ${error.message}`)
// )

// promise.then(script => alert(`Następny then`))


// let promise = new Promise(function (resolve, reject) {
//     resolve(1);

//     setTimeout(() => {
//         resolve(2);
//     }, 1000);
// })

// promise.then(alert)


// function loadScript(src) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve(script)
//         script.onerror = () => reject(new Error(`Ojojoj ${src} nie zaladowałsie`))

//         document.head.append(script);
//     })
// }

// let loadash = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');

// loadash.then(
//     script => {
//         alert(`script ${script.src} loaded`) 
//         let jquery = loadScript('https://code.jquery.com/jquery-3.5.1.min.js');
//         jquery.then(script => alert(`script ${script.src} loaded`))
//     },
//     error => alert(`Problemo Sir, our script ${error.message}`)
// )



// try {
//     function delay(ms) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(() => {
//                 resolve();
//             }, ms);
//         })
//     }

//     delay(3000).then(() => alert(`text after 3sec`))

// } catch (err) {
//     alert(`Problemo Sir!!! err name: ${err.name}, err message: ${err.message}, err stack: ${err.stack},`)
// }


