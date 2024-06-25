let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function appendNumber(number) {
    if (operator) {
        secondOperand += number;
    } else {
        firstOperand += number;
    }
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (firstOperand && !secondOperand) {
        operator = op;
        currentInput += ` ${op} `;
        display.textContent = currentInput;
    }
}

function calculateResult() {
    if (firstOperand && operator && secondOperand) {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                return;
        }
        display.textContent = result;
        currentInput = result;
        operator = '';
        firstOperand = result;
        secondOperand = '';
    }
}
