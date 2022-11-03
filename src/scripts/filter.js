/*****************
dom selectors
******************/ 

// all buttons
const inputs = document.querySelectorAll('.filters-wrap__input');

// filter elements container
const ingContainer = document.querySelector('.filters__ingredient');
const appContainer = document.querySelector('.filters__appareils');
const utenContainer = document.querySelector('.filters__utensils');

// inputs
const ingInput = document.querySelector('.ingredient-input');
const appInput = document.querySelector('.appareil-input');
const usInput = document.querySelector('.utensils-input');

// label div( = filter button)
const ingLabel = document.querySelector('.ing-label');
const appLabel = document.querySelector('.app-label');
const utenLabel = document.querySelector('.uten-label');
const ingLabelText = document.querySelector('.ing-label-text');
const ingLabelIcon = document.querySelector('.ing-label-icon');

// icons
const ingIcon = document.querySelector('.ing-input-icon'); 
const appIcon = document.querySelector('.app-input-icon');
const utenIcon = document.querySelector('.uten-input-icon');

// list containers 
const ingLiContainer = document.querySelector('.ingredient__container');
const appLiContainer = document.querySelector('.appliance__container');
const utenLiContainer = document.querySelector('.utensil__container');


/**********************************
ingredient open/close button event
***********************************/ 

function ingFilterOpen() {
    // click -> add .active
    ingLabel.classList.add('active');
    ingInput.classList.add('active');
    ingIcon.classList.add('active');
    ingLiContainer.classList.add('active');
    ingContainer.classList.add('active');
}

function ingFilterClose() {
    if( ingLabel.classList.contains('active')
        // ingLabel.className == 'active' 
    || ingInput.classList.contains('active')
    || ingIcon.classList.contains('active')
    || ingLabel.classList.contains('active')
    || ingLiContainer.classList.contains('active')
    || ingContainer.classList.contains('active')
    ){
        ingLabel.classList.remove('active');
        ingInput.classList.remove('active');
        ingIcon.classList.remove('active');
        ingLabel.classList.remove('active');
        ingLiContainer.classList.remove('active');
        ingContainer.classList.remove('active');
    }
}

ingLabel.addEventListener('click', ingFilterOpen);
ingLabelText.addEventListener('click', ingFilterOpen);
ingLabelIcon.addEventListener('click', ingFilterOpen);

window.addEventListener('click', (e)=> {
    // target = clicked elements
    let target = e.target; 

    // do not trigger 'close' event if it contains these class name
    if(target.classList.contains('ing-label')
    || target.classList.contains('ingredient-input')
    || target.classList.contains('ing-input-icon')
    || target.classList.contains('ingredient__container')
    || target.classList.contains('filters__ingredient')
    || target.classList.contains('filters-wrap__label-wrap')
    || target.classList.contains('ing-label-text')
    || target.classList.contains('ing-label-icon')
    ){} else {
        ingFilterClose()
    }
    
})