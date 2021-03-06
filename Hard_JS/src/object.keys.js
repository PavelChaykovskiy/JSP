const person = Object.create({
    calculateAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    }
}, {
    name: {
        value: 'Pavlo',
        enumerable: true, //показати ключі
        writable: true,  // позволяє перезаписувати значення валуе
        configurable: true, //позволяє удаляти ключ 
    },
    birthYear: {
        value: '1993',
        enumerable: true
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear   // задає валуе хелло
        },
        set(value) {
            console.log('Set age', value);
        }
    }
})


person.name = 'Max'
delete person.name

person.age = 100


// check if person has only own keys
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key]);
    }

}

const cat = Object.create({}, {
    name: {
        value: 'Murka',
    },
    age: {
        get() {
            return this.name + 'was a nice cat'
        },
        set() {
            document.body.style.background = 'blue'
        }
    }
})


cat.age = 'some'
console.log(cat.age); 
