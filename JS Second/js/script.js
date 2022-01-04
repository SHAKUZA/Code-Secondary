// Таймер поля
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const newButton = document.querySelector('.new')
// BUTTON all
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () =>{
    clearInterval(interval)
    clearFields()
    disabledBtn()
})
 
newButton.addEventListener('click', () => {
    clearInterval(interval)
    counter++
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.classList.add('results_info')
    // block.innerText = ('Result: ${hour}:${minute}:${second}:{millisecond}')
    results.append(block)
    clearFields()
    clearInterval(interval)
    interval = setInterval(startTimer, 10)

})
// Vis
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0,
    disabled = true


function startTimer() {
    millisecond++
    if (millisecond < 9) {
        millisecondElement.innerText = "0" + millisecond
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond
    }
    if (millisecond > 59) {
        second++
        secondElement.innerText = "0" + second
        millisecond = 0
        millisecondElement.innerText = "0" + millisecond
    }
}

    

    if (second < 9) {
        secondElement.innerText = "0" + second
    }
    if (second > 9) {
        secondElement.innerText = second
    }
    if (second > 59) {
        minute++
        minuteElement.innerText = "0" + minute
        second = 0
        secondElement.innerText = "0" + second
    }

    // Minute
    if (minute < 9) {
        minuteElement.innerText = "0" + minute
    }
    if (minute > 9) {
        minuteElement.innerText = minute
    }
    if (minute > 60) {
        hour++
    }
    // Hour
    if (hour > 9) {
        hourElement.innerText = hour
    }
    newButton.disabled = false

    function disabledBtn() {
        if (disabled) {
            newButton.disabled = true
        }
        DisabledBtn()
    }

function clearFields() {
    hour = 00
    minute = 00
    second = 00
    millisecond = 00
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    millisecondElement.textContent = "00"
}