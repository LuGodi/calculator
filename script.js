const numbersContainer=document.querySelector(".numbers-container")
const display = document.querySelector(".display span")
const clearButton = document.querySelector(".clear-button")
const equalOperator = document.querySelector(".equal-operator")
const operators = document.querySelectorAll(".operator")
let resultOnDisplay = false


let currentValue
let currentOperator = ""

operators.forEach(element=>element.addEventListener("click", getNum1))


function getNum1(event) {
    if (currentOperator) {
        currentValue = +display.textContent
        let result = operate(lastValue,currentValue,currentOperator)
        lastValue = result
        currentValue = ""
        currentOperator = event.target.textContent
        clearDisplay()
        displayNumbers(result)
        resultOnDisplay = true
        return
    }
    lastValue = +display.textContent
    currentOperator = event.target.textContent
    clearDisplay()
    
}

clearButton.addEventListener('click', clearAll)
equalOperator.addEventListener('click', (event)=>{
                                      if (currentOperator){
                                        result = operate(lastValue,display.textContent,currentOperator)
                                        clearDisplay()
                                        currentOperator=""
                                        displayNumbers(result)
                                      }
                                                    })



function clearDisplay(event) {
    display.textContent = ""
}

function clearAll() {
    lastValue = ""
    currentOperator = ""
    currentValue = ""
    resultOnDisplay = false
    clearDisplay()
}
function getPressedNumbers(event) {
    if (resultOnDisplay) {
        clearDisplay()
        resultOnDisplay = false
    }
    const pressedNumber = event.target.textContent
    displayNumbers(pressedNumber)
}
function displayNumbers(number) {
    display.textContent += number
}



function renderCalculator() {
    const numbers=[]
    for (let i = 0; i<10; i++) {
        const newDiv = document.createElement("div")
        newDiv.textContent = i
        newDiv.classList.add("number")
        newDiv.addEventListener("click", getPressedNumbers)
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
    if (number2 === 0) return "cant divide by 0"
    return number1/number2
}


function operate(number1,number2,operator) {
   number2 = +number2
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