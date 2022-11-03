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
const utenLabelText = document.querySelector('.app-label-text');
const utenLabelIcon = document.querySelector('.app-label-icon');

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

function ingFilterOpen() {
    // click -> add .active
    ingLabel.classList.add('active');
    ingInput.classList.add('active');
    ingIcon.classList.add('active');
    ingLiContainer.classList.add('active');
    ingContainer.classList.add('active');
}

function appFilterOpen() {
    // click -> add .active
    appLabel.classList.add('active');
    appInput.classList.add('active');
    appIcon.classList.add('active');
    appLiContainer.classList.add('active');
    appContainer.classList.add('active');
}

function utenFilterOpen() {
    // click -> add .active
    utenLabel.classList.add('active');
    utenInput.classList.add('active');
    utenIcon.classList.add('active');
    utenLiContainer.classList.add('active');
    utenContainer.classList.add('active');
}

function ingFilterClose() {
    if( ingLabel.classList.contains('active')
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

function appFilterClose() {
    if( appLabel.classList.contains('active')
        || appInput.classList.contains('active')
        || appIcon.classList.contains('active')
        || appLabel.classList.contains('active')
        || appLiContainer.classList.contains('active')
        || appContainer.classList.contains('active')
    ){
        appLabel.classList.remove('active');
        appInput.classList.remove('active');
        appIcon.classList.remove('active');
        appLabel.classList.remove('active');
        appLiContainer.classList.remove('active');
        appContainer.classList.remove('active');
    }
}

function utenFilterClose() {
    if( utenLabel.classList.contains('active')
        || utenInput.classList.contains('active')
        || utenIcon.classList.contains('active')
        || utenLabel.classList.contains('active')
        || utenLiContainer.classList.contains('active')
        || utenContainer.classList.contains('active')
    ){
        utenLabel.classList.remove('active');
        utenInput.classList.remove('active');
        utenIcon.classList.remove('active');
        utenLabel.classList.remove('active');
        utenLiContainer.classList.remove('active');
        utenContainer.classList.remove('active');
    }
}

ingLabel.addEventListener('click', ingFilterOpen);
ingLabelText.addEventListener('click', ingFilterOpen);
ingLabelIcon.addEventListener('click', ingFilterOpen);
appLabel.addEventListener('click', appFilterOpen);
appLabelText.addEventListener('click', appFilterOpen);
appLabelIcon.addEventListener('click', appFilterOpen);
utenLabel.addEventListener('click', utenFilterOpen);
utenLabelText.addEventListener('click', utenFilterOpen);
utenLabelIcon.addEventListener('click', utenFilterOpen);

window.addEventListener('click', (e)=> {
    // target = clicked elements
    let target = e.target; 
    // do not trigger 'close' event if it contains these class name
    if(!target.classList.contains('ing-label')
        && !target.classList.contains('ingredient-input')
        && !target.classList.contains('ing-input-icon')
        && !target.classList.contains('ingredient__container')
        && !target.classList.contains('filters__ingredient')
        && !target.classList.contains('filters-wrap__label-wrap')
        && !target.classList.contains('ing-label-text')
        && !target.classList.contains('ing-label-icon')
        && !target.classList.contains('col-4')
    ){   
        ingFilterClose()
        ingInput.value = '';
    } 
    
})

window.addEventListener('click', (e)=> {
    // target = clicked elements
    let target = e.target; 
    // do not trigger 'close' event if it contains these class name
    if(!target.classList.contains('app-label')
        && !target.classList.contains('appareil-input')
        && !target.classList.contains('app-input-icon')
        && !target.classList.contains('appareil__container')
        && !target.classList.contains('filters__appareil')
        && !target.classList.contains('filters-wrap__label-wrap')
        && !target.classList.contains('app-label-text')
        && !target.classList.contains('app-label-icon')
        && !target.classList.contains('col-4')
    ){   
        appFilterClose()
        appInput.value = '';
    } 
})

window.addEventListener('click', (e)=> {
    // target = clicked elements
    let target = e.target; 
    // do not trigger 'close' event if it contains these class name
    if(!target.classList.contains('uten-label')
        && !target.classList.contains('utensil-input')
        && !target.classList.contains('uten-input-icon')
        && !target.classList.contains('utensil__container')
        && !target.classList.contains('filters__utensil')
        && !target.classList.contains('filters-wrap__label-wrap')
        && !target.classList.contains('uten-label-text')
        && !target.classList.contains('uten-label-icon')
        && !target.classList.contains('col-4')
    ){   
        utenFilterClose()
        utenInput.value = '';
    } 
})