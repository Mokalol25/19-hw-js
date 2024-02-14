const counterValue = document.getElementById('value');
let currentValue = 0

function addValue() {
    currentValue += 1;
    counterValue.textContent = currentValue;
}


function loseValue() {
    currentValue -= 1;
    counterValue.textContent = currentValue;
}
document.querySelector('[data-action="decrement"]').addEventListener('click', loseValue);
document.querySelector('[data-action="increment"]').addEventListener('click', addValue);