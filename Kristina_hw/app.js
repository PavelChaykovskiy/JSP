// create array result for showing the result numbers
let result = []

// varriable for start counting
let startNumber = 100

//varriable for take number we have to minus from our startNumber
let minusNumber = 0

// varriable for showing every number after operation
let resultItem

// Loop for counting
for (let i = 0; minusNumber < startNumber; i++ ) {
    minusNumber = i + minusNumber
    // console.log('minusNumber:', minusNumber)
    resultItem = startNumber - minusNumber
    if (resultItem >= 0 ){
    // console.log(resultItem)
    result.push(resultItem)
    }
}

// Show the result in array
console.log(result);


// Description of logic
// minusNumber = 0 + 0
// minusNumber = 1 + 0
// minusNumber = 2 + 1
// minusNumber = 3 + 3
// minusNumber = 4 + 6
// minusNumber = 5 + 10
// minusNumber = 6 + 15
// ...

// 2. Numbers we minus from our numberStart
// 1
// 3
// 6
// 10
// 15
// 21
// ...

// 1. Result we need get
// 100
// 99
// 97
// 94
// 90
// 85
// 79