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
import { displayNoMatch } from './displayNoMatch.js';

const input = document.getElementById('input-form');
const tagContainer = document.querySelector('.tag-container');
const ingInput = document.getElementById('ing-input');
const appInput = document.getElementById('app-input');
const utenInput = document.getElementById('uten-input');
// filterArray contains the tags that are made by clicking elements
const filterArray = [];
let searchedRecipes = recipeData;

// searchFromSearchBar => filterBySearchBar (naming changed)
function filterBySearchBar(recipesArray) {
  const searchValue = input.value.toLowerCase().trim();

  if (searchValue.length < 3) {
    // if user type less than 3 characters,
    // return original data = don't filter anything
    return recipesArray;
  }
  // else
  // filter original data to extract and
  // compare ingredient/title/description VS searched value
  return recipesArray.filter((element) => {
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
    // filterArray = array with filter elements that user clicked
    if (filterArray.every(el => allElements.includes(el))) {
      return true;
    }
  });
}

/**************************************************
** mainSearch => displayLastResult (naming changed)
This function decide which function to trigger
based on the existance of tag
simply, if there is no tag, filter by main searchbar,
if there are tags, filter by tags
***************************************************/
function displayLastResult() {
  const hasTags = filterArray.length > 0;
  // hasTags = when filterArray has something
  let filteredByTag = [];

  // if filterArray contains something,
  if (hasTags) {
    filteredByTag = filterByTags();
  }

  // if there are tags => filteredByTag // no tags => original data
  const recipesToSearchIn = hasTags ? filteredByTag : recipeData;
  const fullyFilteredArray = filterBySearchBar(recipesToSearchIn);

  // display recipes by the result of all filters
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
  // selected tag is removed from filterArray and displayLastResult function is triggered
  filterArray.shift(selectedTag);
  displayLastResult();
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
  displayLastResult();
}

/******************************************
This function filter each filter lists
by the value that user type.
    1. 3 each filters have an array where
    they contain the searched value
    2. display list container by the array
    3. if array is empty, show 'no results'
*******************************************/
function filterSearch(event) {
  const inputId = event.target.id;
  const searchValue = event.target.value.toLowerCase().trim();
  // console.log(inputId);
  // searched value goes inside each array
  const ingArray = [];
  const appArray = [];
  const utenArray = [];

  // on a fully filtered recipe, check if it contains searched value
  searchedRecipes.forEach((element) => {
    const { ingredients, appliance, ustensils } = element;
    if (inputId === 'ing-input') {
      ingredients.forEach((el) => {
        if (el.ingredient.toLowerCase().includes(searchValue)
      && !ingArray.includes(el.ingredient)) {
          ingArray.push(el.ingredient);
        }
      });
    }
    if (inputId === 'app-input') {
      if (appliance.toLowerCase().includes(searchValue)
    && !appArray.includes(appliance)) {
        appArray.push(appliance);
      }
    }

    if (inputId === 'uten-input') {
      ustensils.forEach((utensil) => {
        if (utensil.toLowerCase().includes(searchValue)
      && !utenArray.includes(utensil)) {
          utenArray.push(utensil);
        }
      });
    }
  });

  // pass filtered value inside array to display filtered recipe
  if (inputId === 'ing-input') displayIngList(ingArray);
  if (inputId === 'app-input') displayApplianceList(appArray);
  if (inputId === 'uten-input') displayUtensilList(utenArray);

  const noResultMsg = 'Aucun résultat';

  // error message when there's no result
  if (ingArray.length <= 0 && inputId === 'ing-input') {
    const listContainer = document.querySelector('.ingredient__container');
    const errorMsg = document.createElement('span');
    errorMsg.textContent = noResultMsg;
    listContainer.append(errorMsg);
  }

  if (appArray.length <= 0 && inputId === 'app-input') {
    const listContainer = document.querySelector('.appliance__container');
    const errorMsg = document.createElement('span');
    errorMsg.textContent = noResultMsg;
    listContainer.append(errorMsg);
  }

  if (utenArray.length <= 0 && inputId === 'uten-input') {
    const listContainer = document.querySelector('.utensil__container');
    const errorMsg = document.createElement('span');
    errorMsg.textContent = noResultMsg;
    listContainer.append(errorMsg);
  }
}

input.addEventListener('keyup', displayLastResult);
ingInput.addEventListener('keyup', filterSearch);
appInput.addEventListener('keyup', filterSearch);
utenInput.addEventListener('keyup', filterSearch);
