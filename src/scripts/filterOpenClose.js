/* eslint-disable spaced-comment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/** ***************
dom selectors
***************** */

// filter elements container
const ingContainer = document.querySelector('.filters__ingredient');
// console.log(ingContainer.childNodes);
const appContainer = document.querySelector('.filters__appliance');
const utenContainer = document.querySelector('.filters__utensil');

// inputs
const ingInput = document.querySelector('.ingredient-input');
const appInput = document.querySelector('.appliance-input');
const utenInput = document.querySelector('.utensil-input');

// labels
const ingLabel = document.querySelector('.ing-label');
const ingLabelText = document.querySelector('.ing-label-text');
const appLabel = document.querySelector('.app-label');
const appLabelText = document.querySelector('.app-label-text');
const utenLabel = document.querySelector('.uten-label');
const utenLabelText = document.querySelector('.uten-label-text');

// icons
const ingIcon = document.querySelector('.ing-input-icon');
const appIcon = document.querySelector('.app-input-icon');
const utenIcon = document.querySelector('.uten-input-icon');

// list containers
const listContainer = document.querySelectorAll('.list-container');
const ingLiContainer = document.querySelector('.ingredient__container');
const appLiContainer = document.querySelector('.appliance__container');
const utenLiContainer = document.querySelector('.utensil__container');

// // input
// const filtersInput = document.querySelectorAll('.filters-wrap__input');
// // console.log(filtersInput);

/**********************************
ingredient open/close button event
***********************************/

function displayIngredient() {
  ingContainer.classList.add('active');
  ingLiContainer.classList.add('active');
  ingInput.classList.add('active');
  ingLabelText.style.display = 'none';
  ingIcon.classList.add('active');
  ingLabel.style.display = 'none';
  appInput.value = '';
  utenInput.value = '';
}

function displayAppliance() {
  appContainer.classList.add('active');
  appLiContainer.classList.add('active');
  appInput.classList.add('active');
  appLabelText.style.display = 'none';
  appIcon.classList.add('active');
  appLabel.style.display = 'none';
  ingInput.value = '';
  utenInput.value = '';
}

function displayUtensil() {
  utenContainer.classList.add('active');
  utenLiContainer.classList.add('active');
  utenInput.classList.add('active');
  utenLabelText.style.display = 'none';
  utenIcon.classList.add('active');
  utenLabel.style.display = 'none';
  ingInput.value = '';
  appInput.value = '';
}

function removeIngredient() {
  ingInput.classList.remove('active');
  ingContainer.classList.remove('active');
  ingLiContainer.classList.remove('active');
  ingLabelText.style.display = 'flex';
  ingIcon.classList.remove('active');
  ingLabel.style.display = 'flex';
  ingInput.value = '';
  appInput.value = '';
  utenInput.value = '';
}

function removeApplicance() {
  appInput.classList.remove('active');
  appContainer.classList.remove('active');
  appLabel.style.display = 'flex';
  appLiContainer.classList.remove('active');
  appLabelText.style.display = 'flex';
  appIcon.classList.remove('active');
  ingInput.value = '';
  appInput.value = '';
  utenInput.value = '';
}

function removeUtensil() {
  utenInput.classList.remove('active');
  utenLabel.style.display = 'flex';
  utenLiContainer.classList.remove('active');
  utenContainer.classList.remove('active');
  utenLabelText.style.display = 'flex';
  utenIcon.classList.remove('active');
  ingInput.value = '';
  appInput.value = '';
  utenInput.value = '';
}

function openFilter(e) {
  const { target } = e;
  if (ingContainer.contains(target)) {
    displayIngredient();
    removeApplicance();
    removeUtensil();
  } else if (appContainer.contains(target)) {
    displayAppliance();
    removeIngredient();
    removeUtensil();
  } else if (utenContainer.contains(target)) {
    displayUtensil();
    removeIngredient();
    removeApplicance();
  }
}

ingContainer.addEventListener('click', openFilter);
appContainer.addEventListener('click', openFilter);
utenContainer.addEventListener('click', openFilter);

// when outside of filter is clicked, filters all close
document.addEventListener('click', (e) => {
  const { target } = e;
  if (!target.classList.contains('filters-wrap__label')
  && !target.classList.contains('filters-wrap__label-wrap')
  && !target.classList.contains('fa-chevron-down')
  && !target.classList.contains('filters-wrap__input')) {
    removeApplicance();
    removeUtensil();
    removeIngredient();
  }
});

listContainer.forEach((el) => el.addEventListener('click', (e) => {
  e.stopPropagation();
}));
