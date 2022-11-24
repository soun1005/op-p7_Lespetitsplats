/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable import/extensions */

import { displayData } from './index.js';
import recipeData from '../data/recipes.js';
import { displayIngList, displayApplianceList, displayUtensilList } from './filterList.js';

const input = document.getElementById('input-form');
const tagContainer = document.querySelector('.tag-container');
const noMatch = document.querySelector('.no-match');
const ingInput = document.getElementById('ing-input');
const appInput = document.getElementById('app-input');
const utenInput = document.getElementById('uten-input');
const filterArray = [];
let searchedRecipes = recipeData;

function searchFromSearchBar(recipesArray) {
  const searchValue = input.value.toLowerCase().trim();

  if (searchValue.length < 3) {
    // if user type less than 3 characters, return original data
    return recipesArray;
  }
  // else
  // filter original data to extract and compare ingredient/title/description
  return recipesArray.filter((element) => {
    // title, ingredient, description
    const title = element.name.toLowerCase();
    const { ingredients } = element;
    const ingredientElements = ingredients.find((el) => el.ingredient.toLowerCase().includes(searchValue));
    const desc = element.description.toLowerCase();

    if (title.includes(searchValue)
              || ingredientElements
              || desc.includes(searchValue)
    ) {
      return true;
    }
  });
}

function filterByTags() {
  // filter original data by 'filterArray'
  return recipeData.filter((data) => {
    // extract ingredient/appliance/utensil from original data
    const { ingredients } = data;
    const ingredient = ingredients.map((el) => el.ingredient);
    const ing = ingredient;
    const { appliance } = data;
    const app = [];
    app.push(appliance);
    const { ustensils } = data;
    const uten = ustensils;
    // all three elements in an array
    const allElements = [...ing, ...app, ...uten];

    // if filterArray match elements in 'allElements'
    if (filterArray.every(el => allElements.includes(el))) {
      return true;
    }
  });
}

function displayNoMatch(hasMatch) {
  if (hasMatch) {
    noMatch.classList.remove('active');
  } else {
    noMatch.classList.add('active');
  }
}

function mainSearch() {
  const hasTags = filterArray.length > 0;
  let filteredByTag = [];

  // if filterArray contains something,
  if (hasTags) {
    filteredByTag = filterByTags();
  }

  // if there are tags => filteredByTag // no tags => original data
  const recipesToSearchIn = hasTags ? filteredByTag : recipeData;
  const fullyFilteredArray = searchFromSearchBar(recipesToSearchIn);
  // display recipes
  displayData(fullyFilteredArray);

  const hasMatch = fullyFilteredArray.length > 0;
  displayNoMatch(hasMatch);
  searchedRecipes = fullyFilteredArray;
}

function closeTag(e) {
  const tag = e.target.parentNode;
  const tagText = e.target.parentNode.childNodes[0].textContent;
  tag.remove();
  const selectedTag = filterArray.filter(el => {
    tagText.includes(el);
  });
  filterArray.shift(selectedTag);
  mainSearch();
}

/****************************************************
Function when ing/app/uten list element is clicked.
eventListener is in 'factory.js' line 130 - 166
*****************************************************/
export function setSearchTag(element, type) {
  if (!filterArray.includes(element)) {
    /****************************************
    1. if tag doesn't exist in 'filterArray'
      add element to 'filterArray'
    *****************************************/
    filterArray.push(element);
    /***************
    2. create tags
    ****************/
    if (type === 'ingredient') {
      const ingredientTag = document.createElement('button');
      ingredientTag.classList.add('tag', 'ingredient-tag');
      ingredientTag.innerHTML = `<span class = "ingredient-tag-item tag-item">${element}</span>`;
      const closeIcon = document.createElement('span');
      closeIcon.classList.add('fa-regular', 'fa-circle-xmark', 'close-icon');
      closeIcon.addEventListener('click', (closeTag));
      tagContainer.append(ingredientTag);
      ingredientTag.append(closeIcon);
    } else if (type === 'appliance') {
      const applianceTag = document.createElement('button');
      applianceTag.classList.add('tag', 'appliance-tag');
      applianceTag.innerHTML = `<span class = "appliance-tag-item tag-item">${element}</span>`;
      const closeIcon = document.createElement('span');
      closeIcon.classList.add('fa-regular', 'fa-circle-xmark', 'close-icon');
      closeIcon.addEventListener('click', (closeTag));
      tagContainer.append(applianceTag);
      applianceTag.append(closeIcon);
    } else if (type === 'utensil') {
      const utensilTag = document.createElement('button');
      utensilTag.classList.add('tag', 'utensil-tag');
      utensilTag.innerHTML = `<span class = "utensil-tag-item tag-item">${element}</span>`;
      const closeIcon = document.createElement('span');
      closeIcon.classList.add('fa-regular', 'fa-circle-xmark', 'close-icon');
      closeIcon.addEventListener('click', (closeTag));
      tagContainer.append(utensilTag);
      utensilTag.append(closeIcon);
    }
  }
  mainSearch();
}

function filterSearch(event) {
  const searchValue = event.target.value.toLowerCase().trim();

  // searched value goes inside each array
  const ingArray = [];
  const appArray = [];
  const utenArray = [];

  searchedRecipes.forEach((element) => {
    const { ingredients } = element;
    ingredients.forEach((el) => {
      if (el.ingredient.toLowerCase().includes(searchValue)
      && !ingArray.includes(el.ingredient)) {
        ingArray.push(el.ingredient);
      }
    });
  });

  searchedRecipes.forEach((element) => {
    const { appliance } = element;
    if (appliance.toLowerCase().includes(searchValue)
    && !appArray.includes(appliance)) {
      appArray.push(appliance);
    }
  });

  searchedRecipes.forEach((element) => {
    const { ustensils } = element;
    ustensils.forEach((utensil) => {
      if (utensil.toLowerCase().includes(searchValue)
      && !utenArray.includes(utensil)) {
        utenArray.push(utensil);
      }
    });
  });

  displayIngList(ingArray);
  displayApplianceList(appArray);
  displayUtensilList(utenArray);

  // error message when there's no result
  if (ingArray.length <= 0) {
    const listContainer = document.querySelector('.ingredient__container');
    const errorMsg = document.createElement('span');
    errorMsg.textContent = 'Aucun résultat';
    listContainer.append(errorMsg);
  } else if (ingArray > 1) {
    displayIngList(ingArray);
  }

  if (appArray.length <= 0) {
    const listContainer = document.querySelector('.appareil__container');
    const errorMsg = document.createElement('span');
    errorMsg.textContent = 'Aucun résultat';
    listContainer.append(errorMsg);
  } else if (appArray > 1) {
    displayApplianceList(appArray);
  }

  if (utenArray.length <= 0) {
    const listContainer = document.querySelector('.utensil__container');
    const errorMsg = document.createElement('span');
    errorMsg.textContent = 'Aucun résultat';
    listContainer.append(errorMsg);
  } else if (utenArray > 1) {
    displayUtensilList(utenArray);
  }
}

input.addEventListener('keyup', mainSearch);
ingInput.addEventListener('keyup', filterSearch);
appInput.addEventListener('keyup', filterSearch);
utenInput.addEventListener('keyup', filterSearch);