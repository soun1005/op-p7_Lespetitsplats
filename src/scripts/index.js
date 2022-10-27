import { recipeFactory } from './factory.js';
import recipes from '../data/recipes.js';
import { displayIngList, displayApplianceList, displayUtensilList } from './filter.js';

/*****************************************************
 display photographer data inside card-container
 *****************************************************/
 async function displayData(recipes) {
    const cardContainer = document.querySelector('.card__container');
    // 각 레시피 어레이에 foreach 
    recipes.forEach((recipe) => {
      // 여기서 recipe는 각각의 레시피 배열 요소
      // 카드는 팩토리 안에 레시피를 넣은 값
      const card = recipeFactory(recipe);
      // 카드돔은 각 레시피를 dom으로 만든 함수.
      const cardDom = card.getRecipeCardDOM();
        cardContainer.append(cardDom);
    });
  }

  async function init() {
  /******* Récupère les datas********/
    displayData(recipes);
    displayIngList(recipes);
    displayApplianceList(recipes);
    displayUtensilList(recipes);
  }
  init();