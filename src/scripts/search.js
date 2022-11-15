/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable import/extensions */
import { displayData } from './index.js';
import recipeData from '../data/recipes.js';
import { displayIngList, displayApplianceList, displayUtensilList } from './filterList.js';
// import { filterByTag } from './filter.js';

let searchedRecipes = recipeData;

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
    displayData(recipeData);
    searchedRecipes = recipeData;
    // filter is triggered when search keyword is more than 2.
  } else {
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
    // console.log('searchedRecipes=', searchedRecipes);
    if (searchArray.length === 0) {
      noMatch.classList.add('active');
    }
  }
}

function filterSearch(event) {
  const searchValue = event.target.value.toLowerCase().trim();

  const ingArray = [];
  const appArray = [];
  const utenArray = [];

  // searched value goes inside each array

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

  // console.log('searchedRecipes=', searchedRecipes);

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
// list containers
const ingList = document.querySelectorAll('.ing-list-element');
// chosen item goes inside filterArray
const filterArray = [];
export function setSearchTag(element, type) {
  /*******************************
   1. make array to display recipe
   *******************************/
  // if element doesn't already exist, push into filterArray
  if (!filterArray.includes(element)) {
    filterArray.push(element);
    console.log(filterArray);

    /*************
     create tags
    **************/
    // ingredient
    if (type === 'ingredient') {
      const ingredientTag = document.createElement('button');
      ingredientTag.classList.add('tag', 'ingredient-tag');
      ingredientTag.innerHTML = `<span class = "ingredient-tag-item tag-item">${element}</span> <i class="fa-regular fa-circle-xmark tag-close"></i>`;
      tagContainer.append(ingredientTag);
    } else if (type === 'appliance') {
      const applianceTag = document.createElement('button');
      applianceTag.classList.add('tag', 'appliance-tag');
      applianceTag.innerHTML = `<span class = "appliance-tag-item tag-item">${element}</span> <i class="fa-regular fa-circle-xmark tag-close"></i>`;
      tagContainer.append(applianceTag);
    } else if (type === 'utensil') {
      const utensilTag = document.createElement('button');
      utensilTag.classList.add('tag', 'utensil-tag');
      utensilTag.innerHTML = `<span class = "utensil-tag-item tag-item">${element}</span> <i class="fa-regular fa-circle-xmark tag-close"></i>`;
      tagContainer.append(utensilTag);
    }
  }
  /*************************************
   2. compare array and searchedRecipe
  **************************************/

  // 필터배열에 있는 요소들이 '서치드레시피'중 재료/도구/장비 랑 매치된것을 const에 저장.
  // const를 displayData에 넣기

  console.log('searchedRecipes:', searchedRecipes);
  console.log('filterArray:', filterArray);

  // loop through data to make new array
  const searchArray = recipeData.filter((element) => {
    // element = each array inside recipe data
    // ingredients
    const { ingredients } = element;
    const ingredientElements = ingredients.find((el) => el.ingredient.includes(filterArray));
    
    const { appliance } = element;
    const { ustensils } = element;
    console.log('ustensils', ustensils);
  });

  // searchedRecipes.forEach((element) => {
  //   const { appliance } = element;
  //   if (appliance.toLowerCase().includes(searchValue)
  //   && !appArray.includes(appliance)) {
  //     appArray.push(appliance);
  //   }
  // });

  // searchedRecipes.forEach((element) => {
  //   const { ustensils } = element;
  //   ustensils.forEach((utensil) => {
  //     if (utensil.toLowerCase().includes(searchValue)
  //     && !utenArray.includes(utensil)) {
  //       utenArray.push(utensil);
  //     }
  //   });
  // });

  //   ingredientElements.includes(filterArray)
  //             || appliance.includes(filterArray)
  //             || ustensils.includes(filterArray)

  // });
  // displayData(searchArray);
  // searchedRecipes = searchArray;
}

input.addEventListener('keyup', mainSearch);
ingInput.addEventListener('keyup', filterSearch);
appInput.addEventListener('keyup', filterSearch);
utenInput.addEventListener('keyup', filterSearch);
