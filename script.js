const numbersContainer=document.querySelector(".numbers-container")
const display = document.querySelector(".display span")
const clearButton = document.querySelector(".clear-button")
let displayValue = ""

clearButton.addEventListener('click', clearDisplay)

function clearDisplay(event) {
    display.textContent = ""
}

function displayNumbers(event) {

    const pressedNumber = event.target.textContent
    displayValue += pressedNumber
    display.textContent += pressedNumber
    console.log(pressedNumber)
    console.log({displayValue})
}



function renderCalculator() {
    const numbers=[]
    for (let i = 1; i<10; i++) {
        const newDiv = document.createElement("div")
        newDiv.textContent = i
        newDiv.classList.add("number")
        newDiv.addEventListener("click", displayNumbers)
        numbers.push(newDiv)
    }
    numbersContainer.append(...numbers)
}

function add(number1,number2) {
    return number1+number2
}

function multiply(number1,number2) {
    return number1*number2
}

function subtract(number1,number2) {
    return number1-number2
}

function divide (number1,number2) {
    return number1/number2
}


function operate(number1,number2,operator) {
    switch (operator) {
        case "+":
            return add(number1,number2)
            break;
        case "/":
            return divide(number1,number2)
            break;
        case "-":
            return subtract(number1,number2)
            break;
        case "*":
            return multiply(number1,number2)
            break;
        default:
            console.log("missing operator");


    }
}

renderCalculator()