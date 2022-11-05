/*****************
dom selectors
******************/ 

// all buttons
const inputs = document.querySelectorAll('.filters-wrap__input');

// filter elements container
const ingContainer = document.querySelector('.filters__ingredient');
const appContainer = document.querySelector('.filters__appareil');
const utenContainer = document.querySelector('.filters__utensil');

// inputs
const ingInput = document.querySelector('.ingredient-input');
const appInput = document.querySelector('.appareil-input');
const utenInput = document.querySelector('.utensil-input');

// labels
const ingLabel = document.querySelector('.ing-label');
const ingLabelText = document.querySelector('.ing-label-text');
const ingLabelIcon = document.querySelector('.ing-label-icon');
const appLabel = document.querySelector('.app-label');
const appLabelText = document.querySelector('.app-label-text');
const appLabelIcon = document.querySelector('.app-label-icon');
const utenLabel = document.querySelector('.uten-label');
const utenLabelText = document.querySelector('.uten-label-text');
const utenLabelIcon = document.querySelector('.uten-label-icon');

// icons
const ingIcon = document.querySelector('.ing-input-icon'); 
const appIcon = document.querySelector('.app-input-icon');
const utenIcon = document.querySelector('.uten-input-icon');

// list containers 
const ingLiContainer = document.querySelector('.ingredient__container');
const appLiContainer = document.querySelector('.appareil__container');
const utenLiContainer = document.querySelector('.utensil__container');

/**********************************
ingredient open/close button event
***********************************/ 

function displayIngredient () {
    ingContainer.classList.add('active');
    ingLiContainer.classList.add('active');
    ingInput.classList.add('active');
    ingLabelText.style.display = 'none';
    ingIcon.classList.add('active');
    ingLabel.style.display = 'none';
}

function displayAppliance () {
    appContainer.classList.add('active');
    appLiContainer.classList.add('active');
    appInput.classList.add('active');
    appLabelText.style.display = 'none';
    appIcon.classList.add('active');
    appLabel.style.display = 'none';
}

function displayUtensil () {
    utenContainer.classList.add('active');
    utenLiContainer.classList.add('active');
    utenInput.classList.add('active');
    utenLabelText.style.display = 'none';
    utenIcon.classList.add('active');
    utenLabel.style.display = 'none';
}

function removeApplicance () {
    appInput.classList.remove('active');
    appContainer.classList.remove('active');
    appLabel.style.display = 'flex';
    appLiContainer.classList.remove('active');
    appLabelText.style.display = 'flex';
    appIcon.classList.remove('active');
    appInput.value = '';
}

function removeUtensil () {
    utenInput.classList.remove('active');
    utenLabel.style.display = 'flex';
    utenLiContainer.classList.remove('active');
    utenContainer.classList.remove('active');
    utenLabelText.style.display = 'flex';
    utenIcon.classList.remove('active');
    utenInput.value = '';
}

function removeIngredient () {
    ingInput.classList.remove('active');
    ingContainer.classList.remove('active');
    ingLiContainer.classList.remove('active');
    ingLabelText.style.display = 'flex';
    ingIcon.classList.remove('active');
    ingLabel.style.display = 'flex';
    ingInput.value = '';
}

function open(e) {
    const target = e.target;
    
    // INGREDIENTS
    if (target === ingContainer || target === ingInput || target === ingLabel || target === ingLabelText || target === ingLabelIcon || target === ingIcon) {
        displayIngredient();
        removeApplicance();
        removeUtensil();
        

    // APPLIANCES
    } else if (target === appContainer || target === appInput || target === appLabel || target === appLabelText || target === appLabelIcon || target === appIcon) {
        displayAppliance();
        removeIngredient();
        removeUtensil();

    // UTENSILS
    } else if (target === utenContainer || target === utenInput || target === utenLabel || target === utenLabelText || target === utenLabelIcon || target === utenIcon) {
        displayUtensil();
        removeIngredient();
        removeApplicance();
    }
}

// ingLabel.addEventListener('click', open);
// ingLabelText.addEventListener('click', open);
// ingLabelIcon.addEventListener('click', open);
// appLabel.addEventListener('click', open);
// appLabelText.addEventListener('click', open);
// appLabelIcon.addEventListener('click', open);
// utenLabel.addEventListener('click', open);
// utenLabelText.addEventListener('click', open);
// utenLabelIcon.addEventListener('click', open);

ingContainer.addEventListener('click', open);
appContainer.addEventListener('click', open);
utenContainer.addEventListener('click', open);

window.addEventListener('click', (e)=> {
    // target = clicked elements
    let target = e.target; 
    // do not trigger 'close' event if it contains these class name
    if(
        !target.classList.contains('ing-label')
        && !target.classList.contains('ingredient-input')
        && !target.classList.contains('ing-input-icon')
        && !target.classList.contains('ingredient__container')
        && !target.classList.contains('filters__ingredient')
        && !target.classList.contains('filters-wrap__label-wrap')
        && !target.classList.contains('ing-label-text')
        && !target.classList.contains('ing-label-icon')
        && !target.classList.contains('col-4')
        && !target.classList.contains('app-label')
        && !target.classList.contains('appareil-input')
        && !target.classList.contains('app-input-icon')
        && !target.classList.contains('appareil__container')
        && !target.classList.contains('filters__appareil')
        && !target.classList.contains('filters-wrap__label-wrap')
        && !target.classList.contains('app-label-text')
        && !target.classList.contains('app-label-icon')
        && !target.classList.contains('col-4')
        && !target.classList.contains('uten-label')
        && !target.classList.contains('utensil-input')
        && !target.classList.contains('uten-input-icon')
        && !target.classList.contains('utensil__container')
        && !target.classList.contains('filters__utensil')
        && !target.classList.contains('filters-wrap__label-wrap')
        && !target.classList.contains('uten-label-text')
        && !target.classList.contains('uten-label-icon')
        && !target.classList.contains('col-4')

    ){   
        removeApplicance();
        removeUtensil();
        removeIngredient();
    } 
    
})
