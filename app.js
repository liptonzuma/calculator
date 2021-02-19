//numbers keys
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const point = document.querySelector('.point')


//operational keys 
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const division = document.querySelector('.division')
const multiplication = document.querySelector('.multiplication')
const percent = document.querySelector('.percent')
const equal = document.querySelector('.equal')
const del = document.querySelector('.del')
const clear = document.querySelector('.clear')
const answer = document.querySelector('.answer')
const negate = document.querySelector('.negate')
let ans;
let watchman;
let param = []


const numbers = document.querySelectorAll('.numbers')


const screen = document.querySelector('.solve')
screen.innerHTML = ""
    //functions 
window.addEventListener('click', addNumber)

function addNumber(e) {
    if (screen.innerHTML.length > 20) {
        screen.innerHTML = ""
    }
    if (e.target === one) {
        screen.innerHTML += one.innerHTML
    }
    if (e.target === two) {
        screen.innerHTML += two.innerHTML
    }
    if (e.target === three) {
        screen.innerHTML += three.innerHTML
    }
    if (e.target === four) {
        screen.innerHTML += four.innerHTML
    }
    if (e.target === five) {
        screen.innerHTML += five.innerHTML
    }
    if (e.target === six) {
        screen.innerHTML += six.innerHTML
    }
    if (e.target === seven) {
        screen.innerHTML += seven.innerHTML
    }
    if (e.target === eight) {
        screen.innerHTML += eight.innerHTML
    }
    if (e.target === nine) {
        screen.innerHTML += nine.innerHTML
    }
    if (e.target === zero) {
        screen.innerHTML += zero.innerHTML
    }
    if (e.target === point) {
        screen.innerHTML += point.innerHTML
    }
}

negate.addEventListener('click', () => {
    if (screen.innerHTML === "") {
        screen.innerHTML = "-"
    } else if (screen.innerHTML !== "") {
        let arr = screen.innerHTML.split("")
        arr.unshift("-")
        let joined = arr.join("")
        screen.innerHTML = joined
    }
})

clear.addEventListener('click', () => {
    screen.innerHTML = " "
    param.length = 0
    answer.innerHTML = "0"
})

del.addEventListener('click', () => {
    let solve = screen.innerHTML
    let val = solve.split("")
    val.pop()
    let final = val.join("")
    screen.innerHTML = final

})
equal.addEventListener('click', () => {
    switch (watchman) {
        case "add":
            plus.click();
            break;
        case "subtract":
            minus.click();
            break;
        case "multiply":
            multiplication.click()
            break;
        case "divide":
            division.click()
            break;
        case "percent":
            percent.click()
            break;

        default:
            break;
    }
})


percent.addEventListener('click', () => {
    if (screen.innerHTML !== "") {
        answer.innerHTML = +screen.innerHTML / 100
        watchman = "percent"
        screen.innerHTML = answer.innerHTML

    }
})
plus.addEventListener('click', () => {
    equal.click()
    watchman = "add"
    param.push(+screen.innerHTML)
    screen.innerHTML = ""
    if (param.length > 1) {
        ans = param.reduce(add)
        answer.innerHTML = ans
        param.length = 0
        param.push(ans)
    }

    if (+screen.innerHTML === param[0]) {
        screen.innerHTML = ""
    } else {
        screen.innerHTML = ""

    }
})
minus.addEventListener('click', () => {
    equal.click()
    watchman = "subtract"
    param.push(+screen.innerHTML)
    screen.innerHTML = ""
    if (param.length > 1) {
        ans = param.reduce(subtract)
        answer.innerHTML = ans
        param.length = 0
        param.push(ans)

    }
    if (+screen.innerHTML === param[0]) {
        screen.innerHTML = ""
    } else {
        screen.innerHTML = ""


    }
})

multiplication.addEventListener('click', () => {
    equal.click()
    watchman = "multiply"
    if (+screen.innerHTML !== 0) {
        param.push(+screen.innerHTML)
        screen.innerHTML = ""
    }
    if (param.length > 1) {
        ans = param.reduce(multiply)
        answer.innerHTML = ans
        param.length = 0
        param.push(ans)
    }
    if (+screen.innerHTML === param[0]) {
        screen.innerHTML = ""
    } else {
        screen.innerHTML = ""

    }
})
division.addEventListener('click', () => {
    equal.click()
    watchman = "divide"
    if (+screen.innerHTML !== 0) {
        param.push(+screen.innerHTML)
        screen.innerHTML = ""
    }
    if (param.length > 1) {
        ans = param.reduce(divide)
        answer.innerHTML = ans
        param.length = 0
        param.push(ans)
    }
    if (+screen.innerHTML === param[0]) {
        screen.innerHTML = ""
    } else {
        screen.innerHTML = ""

    }
})



function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}