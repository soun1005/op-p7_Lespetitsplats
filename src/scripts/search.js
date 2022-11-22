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

let searchedRecipes = recipeData;
let tagSearchedRecipes = [];

// main search input
const input = document.getElementById('input-form');
const ingInput = document.getElementById('ing-input');
const appInput = document.getElementById('app-input');
const utenInput = document.getElementById('uten-input');
// filter
const filterLabel = document.querySelectorAll('.filters-wrap__label-wrap');

// tag container
const tagContainer = document.querySelector('.tag-container');

// error message
const noMatch = document.querySelector('.no-match');

function mainSearch(event) {
  // input value
  const searchValue = event.target.value.toLowerCase().trim();

  // when keyword is less than 3, display all recipes.
  if (searchValue.length < 3) {
    // displayData(recipeData);
    displayData(tagSearchedRecipes.length > 0 ? tagSearchedRecipes : recipeData);
    // searchedRecipes = recipeData;
    // filter is triggered when search keyword is more than 2.
  } else {
    // loop through data to make new array
    const filteredRecipes = tagSearchedRecipes.length > 0 ? tagSearchedRecipes : searchedRecipes;
    const searchArray = filteredRecipes.filter((element) => {
      // title, ingredient, description
      const title = element.name.toLowerCase();
      const { ingredients } = element;
      const ingredientElements = ingredients.find((el) => el.ingredient.toLowerCase().includes(searchValue));
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
    if (tagSearchedRecipes.length === 0) {
      searchedRecipes = searchArray;
    }

    // error message
    if (searchArray.length === 0) {
      noMatch.classList.add('active');
      displayData([]);
    }
  }
  // } else if (searchValue.length < 2) {
  //   displayData(searchedRecipes);
  // }
}

/**********************
advanced filter search
***********************/
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

filterLabel.forEach(label => {
  label.addEventListener('click', () => {
    displayData(searchedRecipes);
  });
});

/**************
filter by tag
***************/
// chosen tag's element goes inside filterArray
const filterArray = [];

// eventListener function
export function setSearchTag(element, type) {
  /*****************************
  make array to display recipe
  ******************************/
  // if element doesn't already exist, push into filterArray
  if (!filterArray.includes(element)) {
    filterArray.push(element);
    /*************
    create tags
    **************/
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
  searchByTag();
}

/*************************************
compare array and searchedRecipe
**************************************/
// 필터배열에 있는 요소들이 'searchedRecipes'중 재료/도구/장비 랑 매치된것을 const에 저장.
// 저장된 const를 displayData에 넣기
function searchByTag() {
  const searchedElements = searchedRecipes.filter((data) => {
    // element = each array inside recipe data
    // all types of elements are 'array'
    const { ingredients } = data;
    const ingredient = ingredients.map((el) => el.ingredient);
    const ing = ingredient;
    const { appliance } = data;
    const app = [];
    app.push(appliance);
    const { ustensils } = data;
    const uten = ustensils;

    const allElements = [...ing, ...app, ...uten];

    // if filterArray match elements in 'allElements'
    if (filterArray.every(el => allElements.includes(el))) {
      return true;
    }
  });
  // global scope
  tagSearchedRecipes = searchedElements;
  displayData(tagSearchedRecipes);
}

export function closeTag(e) {
  displayData(searchedRecipes);
  const tag = e.target.parentNode;
  const tagText = e.target.parentNode.childNodes[0].textContent;
  tag.remove();
  const selectedTag = filterArray.filter(el => {
    tagText.includes(el);
  });
  filterArray.shift(selectedTag);
}

input.addEventListener('keyup', mainSearch);
ingInput.addEventListener('keyup', filterSearch);
appInput.addEventListener('keyup', filterSearch);
utenInput.addEventListener('keyup', filterSearch);
