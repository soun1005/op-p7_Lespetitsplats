/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { recipeFactory } from './factory.js';
import recipeData from '../data/recipes.js';
import { displayIngList, displayApplianceList, displayUtensilList } from './filterList.js';

/** ****************************************
 display recipe data inside card-container
 ***************************************** */
function displayRecipes(recipeArray) {
  const cardContainer = document.querySelector('.card__container');
  cardContainer.innerHTML = '';
  // 각 레시피 어레이에 foreach
  recipeArray.forEach((recipe) => {
    // 여기서 recipe는 각각의 레시피 배열 요소
    // 카드는 팩토리 안에 레시피를 넣은 값
    const card = recipeFactory(recipe);
    // 카드돔은 각 레시피를 dom으로 만든 함수.
    const cardDom = card.getRecipeCardDOM();
    cardContainer.append(cardDom);
  });
}

export function displayData(recipeArray) {
  displayRecipes(recipeArray);
  const ingredientsArray = [];
  recipeArray.forEach((element) => {
    const { ingredients } = element;
    ingredients.forEach(({ ingredient }) => {
      if (!ingredientsArray.includes(ingredient)) {
        ingredientsArray.push(ingredient);
      }
    });
  });

  const applianceArray = [];
  recipeArray.forEach((element) => {
    const { appliance } = element;
    if (!applianceArray.includes(appliance)) {
      applianceArray.push(appliance);
    }
  });

  const utensilArray = [];
  recipeArray.forEach((element) => {
    const { ustensils } = element;
    ustensils.forEach((utensil) => {
      if (!utensilArray.includes(utensil)) {
        utensilArray.push(utensil);
      }
    });
  });

  // functions from factory
  displayIngList(ingredientsArray);
  displayApplianceList(applianceArray);
  displayUtensilList(utensilArray);
}

displayData(recipeData);
