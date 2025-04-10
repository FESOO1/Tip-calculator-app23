// INPUT
const inputForm = document.querySelector('.main-calculator-input');
const billInput = document.querySelector('#billInput');
const numberOfPeopleInput = document.querySelector('#numberOfPeopleInput');
const tipButtons = document.querySelectorAll('.main-calculator-input-tip-container-button');
const customTipInput = document.querySelector('#customTipInput');
const billErrorMessage = document.querySelector('#billErrorMessage');
const tipErrorMessage = document.querySelector('#tipErrorMessage');
const peopleErrorMessage = document.querySelector('#peopleErrorMessage');
let tipPercent = '0';

// OUTPUT
const tipAmountText = document.querySelector('#tipAmountText');
const totalText = document.querySelector('#totalText');
const resetButton = document.querySelector('#resetButton');

// CALCULATE THE TIP

function calculateTheTip() {
    const errorMessages = [];

    // BILL INPUT
    if (billInput.value === '' || billInput.value === '0') {
        errorMessages.push('Bill is empty');
        billErrorMessage.classList.add('main-calculator-input-inner-error-active');
        billInput.parentNode.classList.add('main-calculator-input-inner-container-error');
    } else {
        billErrorMessage.classList.remove('main-calculator-input-inner-error-active');
        billInput.parentNode.classList.remove('main-calculator-input-inner-container-error');
    };

    // BILL INPUT
    if (numberOfPeopleInput.value === '' || numberOfPeopleInput.value === '0') {
        errorMessages.push('Number of people input is empty');
        peopleErrorMessage.classList.add('main-calculator-input-inner-error-active');
        numberOfPeopleInput.parentNode.classList.add('main-calculator-input-inner-container-error');
    } else {
        peopleErrorMessage.classList.remove('main-calculator-input-inner-error-active');
        numberOfPeopleInput.parentNode.classList.remove('main-calculator-input-inner-container-error');
    };

    if (tipPercent === '0') {
        tipErrorMessage.classList.add('main-calculator-input-inner-error-active');
    } else {
        tipErrorMessage.classList.remove('main-calculator-input-inner-error-active');
    };

    if (errorMessages.length === 0) {

    };
};


// SELECTING TIP

for (let i = 0; i < tipButtons.length; i++) {
    tipButtons[i].addEventListener('click', () => {
        for (const tipButton of tipButtons) {
            tipButton.classList.remove('main-calculator-input-tip-container-button-active');
        };
        tipButtons[i].classList.add('main-calculator-input-tip-container-button-active');
        tipPercent = tipButtons[i].value;
    });
};

function customTip() {
    for (const tipButton of tipButtons) {
        tipButton.classList.remove('main-calculator-input-tip-container-button-active');
    };
    tipPercent = customTipInput.value;
};

// INITIALIZING THE FORM
customTipInput.addEventListener('input', customTip);
window.addEventListener('keypress', e => e.key === 'Enter' ? calculateTheTip() : '');