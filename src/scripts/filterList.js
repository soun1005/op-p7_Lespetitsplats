import { ingFilter, applianceFilter, utensilFilter } from './factory.js';
import recipes from '../data/recipes.js';

/*****************
display lists
******************/ 

// ingredient
async function displayIngList(recipes) {
    // an array to put all ingredients
    let ingredientArray = [];
  
    // recipes.ingredients.ingredient elements in an array and push into 'ingredientArray'
    recipes.map(element => {
      const ingredients = element.ingredients;
    //   console.log(ingredients)
      ingredients.map(element => {
        const ingredientElements = element.ingredient;
        ingredientArray.push(ingredientElements);
      })
    })
    const ingredientListDiv = ingFilter(ingredientArray);
    const ingredientList = ingredientListDiv.makeIngList();
  
    // container that contains all ingredients (=div)
    const ingredientContainer = document.createElement('ul');
    ingredientContainer.classList.add('ingredient__container', 'list-container');
    // put the container in the 'ingredeint' div
    const filterDiv = document.querySelector('.filters__ingredient');
    filterDiv.append(ingredientContainer);
    // inside container, append ingredient lists
    ingredientContainer.append(...ingredientList);
  }

  async function displayApplianceList(recipes) {
    // ingredient
    let applianceArray = [];
  
    // get ingredients array 
    recipes.map(element => {
      const appliance = element.appliance;
      applianceArray.push(appliance);
    })
    const applianceListDiv = applianceFilter(applianceArray);
    const applianceList = applianceListDiv.makeApplianceList();

    const applianceContainer = document.createElement('ul');
    applianceContainer.classList.add('appliance__container', 'list-container');
    const appFilterDiv = document.querySelector('.filters__appareils');
    appFilterDiv.append(applianceContainer);
    applianceContainer.append(...applianceList);
  }

  async function displayUtensilList(recipes) {
    // ingredient
    let utensilArray = [];
    // get ingredients array 
    recipes.map(element => {
      const utensils = element.ustensils;
      utensils.forEach(element => {
        utensilArray.push(element);
      });
    })
    const utensilListDiv = utensilFilter(utensilArray);
    const utensilList = utensilListDiv.makeUtensilList();

    const utensilContainer = document.createElement('ul');
    utensilContainer.classList.add('utensil__container', 'list-container');
    const utensilFilterDiv = document.querySelector('.filters__utensils');
    utensilFilterDiv.append(utensilContainer);
    utensilContainer.append(...utensilList);
  }

/*****************
click event
******************/ 






export { displayIngList, displayApplianceList, displayUtensilList };