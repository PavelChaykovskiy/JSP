// async, Event Loop, SetTimeout
console.log('start')
console.log('start2')

window.setTimeout(function () {
    console.log('inside timeout after 1000')
}, 0)

console.log('start3')

window.setTimeout(() => {

}, 2000)
