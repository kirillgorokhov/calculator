let currentNumber = '';
let previousNumber = '';
let operator = '';

const displayNumber = document.querySelector('[data-current-number');
const operationButtons = document.querySelectorAll('[data-operation]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-all-clear]');

equalsButton.addEventListener('click', calculate);
clearButton.addEventListener('click', allClear);

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
})

function handleOperation(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
    displayNumber.textContent = '';
    console.log('Current number is ' + currentNumber)
    console.log('Previous number is ' + previousNumber)
    console.log('Operator is ' + operator)

};


function calculate () {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    if (operator === "÷") {
        displayNumber.textContent = previousNumber / currentNumber;
    }
    else if (operator === "+") {
        displayNumber.textContent = previousNumber + currentNumber;
    }
    else if (operator === "-") {
        displayNumber.textContent = previousNumber - currentNumber;
    }
    else if (operator === "*") {
        displayNumber.textContent = previousNumber * currentNumber;
    }
    console.log(currentNumber, previousNumber, operator)
}

function allClear() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    displayNumber.textContent = '';
}

  