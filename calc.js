const dotBtn = document.querySelector('[data-dot]');

dotBtn.addEventListener('click', function() { appendToScreen('.'); });

const result = document.querySelector('#calculator-screen');
const digits = document.querySelectorAll('[data-digit]');
const operations = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-clear]');

digits.forEach(digit => digit.addEventListener('click', function() { appendToScreen(digit.textContent); }));
operations.forEach(operation => operation.addEventListener('click', function() { appendToScreen(operation.textContent); }));
equalsBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clearScreen);

function appendToScreen(value) {
   result.textContent += value;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('calculator-screen').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('calculator-screen').value = '';
}