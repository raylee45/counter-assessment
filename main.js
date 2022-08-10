const countDisplay = document.getElementById('countdis');
const plusButton = document.getElementById('plus');
const inputNumber = document.getElementById('input');
const minusButton = document.getElementById('minus');

plusButton.addEventListener('click', (e) => {
    let countDisplayTotal = parseInt(countDisplay.innerText) + parseInt(inputNumber.value);
    countDisplay.innerText = countDisplayTotal;
    if (countDisplay.innerText < 0) {
        countDisplay.style.color = 'red'
    } else {
        countDisplay.style.color = 'black'
    }
    e.preventDefault();
});

minusButton.addEventListener('click', (e) => {
    let countDisplayTotal = parseInt(countDisplay.innerText) - parseInt(inputNumber.value);
    countDisplay.innerText = countDisplayTotal;
    if (countDisplay.innerText < 0) {
        countDisplay.style.color = 'red'
    } else {
        countDisplay.style.color = 'black'
    }
    e.preventDefault();
});