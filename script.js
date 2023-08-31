const numbersContainer=document.querySelector(".numbers-container")
const display = document.querySelector(".display span")
const clearButton = document.querySelector(".clear-button")
const equalOperator = document.querySelector(".equal-operator")
const operators = document.querySelectorAll(".operator")


let lastValue
let currentOperator


//i can get the whole string with the operation
//use regex and split to get the two numbers, make sure those are numbers
//apply those to the function according to the operator

//approach2 <- current one right now
//upon pressing an operator, store the first value and upon pressing equal, getting the second value
//wiring the function according to the operator

//can also use array
operators.forEach(element=>element.addEventListener("click", getNum1))
//TODO Add ability to operate when theres already a last value on memory
function getNum1(event) {
    lastValue = +display.textContent
    currentOperator = event.target.textContent
    clearDisplay()
    console.log(lastValue)
    console.log(currentOperator)
    //add condition to check if theres a num1 value to operate on without having to press equal
}

clearButton.addEventListener('click', clearAll)
equalOperator.addEventListener('click', (event)=>{
                                        result = operate(lastValue,display.textContent,currentOperator)
                                        clearDisplay()
                                        displayNumbers(result)
                                                    })



function clearDisplay(event) {
    display.textContent = ""
}

function clearAll() {
    lastValue = ""
    currentOperator = ""
    clearDisplay()
}
function getPressedNumbers(event) {
    const pressedNumber = event.target.textContent
    displayNumbers(pressedNumber)
}
function displayNumbers(number) {

  
    // lastValue += pressedNumber
    display.textContent += number
    
    console.log({lastValue})
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