/*****************
dom selectors
******************/ 

// main buttons
const ingBtn = document.querySelector('.filters__ingredients-btn');
const appBtn = document.querySelector('.filters__appareils-btn');
const utenBtn = document.querySelector('.filters__utensils-btn');

// inputs
const ingInput = document.querySelector('.ingredient-input');
const appInput = document.querySelector('.appareil-input');
const utenInput = document.querySelector('.utensil-input');

// list containers 
const ingLiContainer = document.querySelector('.ingredient__container');
const appLiContainer = document.querySelector('.appliance__container');
const utenLiContainer = document.querySelector('.utensil__container');

// click event
// ingBtn.addEventListener('click', ()=> {

//     if(ingBtn){
//         ingBtn.classList.add('close');
//         ingInput.classList.add('active');
//         ingLiContainer.classList.add('active');
//     }
// })