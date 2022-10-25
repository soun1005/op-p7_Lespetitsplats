import recipeFactory from './factory.js';
import recipes from '../data/recipes.js';

/*****************************************************
 display photographer data inside card-container
 *****************************************************/
 async function displayData(recipes) {
    const cardContainer = document.querySelector('.card__container');
    recipes.forEach((recipe) => {
      const card = recipeFactory(recipe);
      const cardDom = card.getRecipeCardDOM();
        cardContainer.append(cardDom);
    });
  }
  
  async function init() {
  /******* Récupère les datas********/
    displayData(recipes);
  }
  init();