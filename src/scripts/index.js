import { recipeFactory } from './factory.js';
import recipeData from '../data/recipes.js';
import { displayIngList, displayApplianceList, displayUtensilList } from './filterList.js';

/******************************************
 display recipe data inside card-container
 ******************************************/
  export function displayData(recipeArray) {
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

  function init() {
    displayData(recipeData);
    displayIngList(recipeData);
    displayApplianceList(recipeData);
    displayUtensilList(recipeData);
  }

  init();

