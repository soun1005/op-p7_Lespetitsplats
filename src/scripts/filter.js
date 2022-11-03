/*****************
dom selectors
******************/ 

// buttons
const ingBtn = document.querySelector('.filters-wrap__label-wrap');
const appBtn = document.querySelector('.appareil-input');
const utenBtn = document.querySelector('.utensil-input');
// all buttons
const inputs = document.querySelectorAll('.filters-wrap__input');
// inputs
const ingInput = document.querySelector('.ingredient-input');
const appInput = document.querySelector('.appareil-input');
const usInput = document.querySelector('.utensils-input');

// list containers 
const ingLiContainer = document.querySelector('.ingredient__container');
const appLiContainer = document.querySelector('.appliance__container');
const utenLiContainer = document.querySelector('.utensil__container');

/***********************
ingredient button event
************************/ 

function ingredientBtnEvent() {
    // const ingLabel = document.querySelector('.ing-label');
    // const icon = document.querySelector('.ingredient-icon');
    // ingLabel.classList.add('active');
    // ingLiContainer.classList.add('active');
    // ingInput.classList.add('active');
    // icon.classList.add('active');
}

ingBtn.addEventListener('click', ingredientBtnEvent);