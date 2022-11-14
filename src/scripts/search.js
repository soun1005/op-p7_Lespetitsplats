/* eslint-disable import/extensions */
import { displayData } from './index.js';
import recipeData from '../data/recipes.js';
import { displayIngList, displayApplianceList, displayUtensilList } from './filterList.js';

let searchedRecipes = recipeData;

// main search input
const input = document.getElementById('input-form');
const ingInput = document.getElementById('ing-input');
const appInput = document.getElementById('app-input');
const utenInput = document.getElementById('uten-input');

// error message
const noMatch = document.querySelector('.no-match');

function mainSearch(event) {
  // input value
  const searchValue = event.target.value.toLowerCase().trim();

  // when keyword is less than 3, display all recipes.
  if (searchValue.length < 3) {
    displayData(recipeData);
    searchedRecipes = recipeData;
    // filter is triggered when search keyword is more than 2.
  } else if (searchValue.length > 2) {
    // loop through data to make new array
    const searchArray = recipeData.filter((element) => {
      // element = each array inside recipe data

      // title
      const title = element.name.toLowerCase();

      // ingredients
      const { ingredients } = element;
      const ingredientElements = ingredients.find((el) => el.ingredient.toLowerCase().includes(searchValue));

      // description
      const desc = element.description.toLowerCase();

      if (title.includes(searchValue)
                || ingredientElements
                || desc.includes(searchValue)
      ) {
        noMatch.classList.remove('active');
        return true;
      }
    });
    displayData(searchArray);
    searchedRecipes = searchArray;
    if (searchArray.length === 0) {
      noMatch.classList.add('active');
    }
  }
}

function filterSearch(event) {
  const searchValue = event.target.value.toLowerCase().trim();

  const ingredientsArray = [];
  const appArray = [];
  const utenArray = [];

  searchedRecipes.forEach((element) => {
    const { ingredients } = element;
    ingredients.forEach((el) => {
      if (el.ingredient.toLowerCase().includes(searchValue)
      && !ingredientsArray.includes(el.ingredient)) {
        ingredientsArray.push(el.ingredient);
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

  displayIngList(ingredientsArray);
  displayApplianceList(appArray);
  displayUtensilList(utenArray);
}

input.addEventListener('keyup', mainSearch);
ingInput.addEventListener('keyup', filterSearch);
appInput.addEventListener('keyup', filterSearch);
utenInput.addEventListener('keyup', filterSearch);
