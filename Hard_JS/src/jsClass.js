// // const animal = {
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // } 

// class Animal {
//     static type = 'ANIMAL'
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log('I am animal');
//     }
// }

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // }) 

// class Cat extends Animal {

//     constructor(options) {
//         super(options) // підтягуємо конструктор з класу Анімал що позволить додавати нові конкретно для Кет
//         this.color = options.color
//     }
//     voice() {
//         super.voice()
//         console.log('I am Cat');
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'

// })



// $ - зазвичай через долар називаються ті змінні які мають в собі Дом Ноду
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.color = options.color
        this.$el.style.background = options.background
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red',
    background: 'blue'
})


const box2 = new Box({
    selector: '#box2',
    size: 200,
    color: 'red',
    background: 'lightblue'
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    background: 'green'
})


let time;
function timer() {
    time = '9:00';
}
timer();
console.log(time);



// HOME WORK -> MAKE this timer with Classes !!!

// Clock pobiera template
function Clock({ template }) {
    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

}
let clock = new Clock({ template: 'h:m:s' });
clock.start();



//////////////////////////////////////////
// 1. побрати дату
// 2. з тої дати взяти годину + хвилину + секунду
// 3. сформатувати в потрібний нам формат
// 4. вивести на екран(запустити функцію)
// 5. повторити в інтервалі 1секунди; 



class Clock {
    constructor(template) {

    }
    start() {
        render();
        timer = setInterval(render, 1000)
    }
    stop() {
        clearInterval(timer);
    }
}

class Timer extends Clock {
    constructor(something) {
        super(something.template)

    }
}

class Converting {
    constructor(convert) {
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins
    }
}

const data = new Timer({
    hours: date.getHours(),
    mins: date.getMinutes(),
    secs: date.getSeconds()
})

converter(el) {
    if (el < 10) el = '0' + el;
}






