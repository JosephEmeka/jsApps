
const result = document.querySelector('display');
const digits = document.querySelectorAll('[data-digit]');
const operations = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-clear]');

digits.forEach(digit => digit.addEventListener('click', function() { appendToScreen(digit.textContent); }));
operations.forEach(operation => operation.addEventListener('click', function() { appendToScreen(operation.textContent); }));
equalsBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clearScreen);
dotBtn.addEventListener('click', function() { appendToScreen('.'); });

function appendToScreen(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearScreen() {
    document.getElementById('display').value = '';
}