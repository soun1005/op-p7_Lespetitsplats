/* eslint-disable import/no-cycle */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
import { ingFilter, applianceFilter, utensilFilter } from './factory.js';
/*****************
display lists
******************/

// ingredient
async function displayIngList(ingredientArray) {
  // an array to put all ingredients
  const ingredientListDiv = ingFilter(ingredientArray);
  const ingredientList = ingredientListDiv.makeIngList();

  // container that contains all ingredients (=div)
  const ingredientContainer = document.querySelector('.ingredient__container');
  ingredientContainer.innerHTML = '';
  // put the container in the 'ingredeint' div
  const filterDiv = document.querySelector('.filters__ingredient');
  filterDiv.append(ingredientContainer);
  // inside container, append ingredient lists
  ingredientContainer.append(...ingredientList);
}

async function displayApplianceList(applianceArray) {
  const applianceListDiv = applianceFilter(applianceArray);
  const applianceList = applianceListDiv.makeApplianceList();

  const applianceContainer = document.querySelector('.appareil__container');
  applianceContainer.innerHTML = '';
  const appFilterDiv = document.querySelector('.filters__appareil');
  appFilterDiv.append(applianceContainer);
  applianceContainer.append(...applianceList);
}

async function displayUtensilList(utensilArray) {
  const utensilListDiv = utensilFilter(utensilArray);
  const utensilList = utensilListDiv.makeUtensilList();

  const utensilContainer = document.querySelector('.utensil__container');
  utensilContainer.innerHTML = '';
  const utensilFilterDiv = document.querySelector('.filters__utensil');
  utensilFilterDiv.append(utensilContainer);
  utensilContainer.append(...utensilList);
}

export { displayIngList, displayApplianceList, displayUtensilList };
