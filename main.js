let currentNumber = '';
let previousNumber = '';
let operator = '';

const displayNumber = document.querySelector('[data-current-number');
const operationButtons = document.querySelectorAll('[data-operation]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-all-clear]');
const deleteNumber = document.querySelector('[data-delete]');
const pointButton = document.querySelector('[data-point]');

equalsButton.addEventListener('click', calculate);
clearButton.addEventListener('click', allClear);
deleteNumber.addEventListener('click', deleteNum);
pointButton.addEventListener('click', appendPoint);

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    currentNumber += number;
    displayNumber.textContent = currentNumber;
    console.log('Current number is ' + currentNumber)
    console.log('Previous number is ' + previousNumber)
};

operationButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperation(e.target.textContent);
    });
});

function handleOperation(op) {
    if (operator !== "" && previousNumber !== "") {
        calculate()
    }
    if (displayNumber.textContent !== "")
    {
        currentNumber = displayNumber.textContent
    }
        operator = op;
        previousNumber = currentNumber;
        currentNumber = '';
}

function calculate () {
    if (currentNumber !=='')
    {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    if (operator === "÷") {
        currentNumber = previousNumber / currentNumber;
    }
    else if (operator === "+") {
        currentNumber += previousNumber;
    }
    else if (operator === "-") {
        currentNumber = previousNumber - currentNumber;
    }
    else if (operator === "*") {
        currentNumber *= previousNumber;
    }
    displayNumber.textContent = roundResult(currentNumber);
    previousNumber = '';
    currentNumber = '';
    operator = '';
    console.log('Current number is ' + currentNumber)
    console.log('Previous number is ' + previousNumber)
}
else {
    return
}
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function allClear() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    displayNumber.textContent = '';
}

function deleteNum() {
    currentNumber = currentNumber.slice(0, -1);
    displayNumber.textContent = currentNumber;
}
  
function appendPoint() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        displayNumber.textContent = currentNumber;
        }
    }