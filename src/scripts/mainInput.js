import { displayData } from './index.js';
import recipeData from '../data/recipes.js';

/****************************************************************
 main search bar : search any recipes that match more than 
                3 characters of title or ingredients or recipes.
*****************************************************************/

// main search input
const input = document.querySelector('input');

function mainSearch(event){
    // input value
    const searchValue = event.target.value.toLowerCase();
    
    // when keyword is less than 3, display all recipes.
    if(searchValue.length < 3){
        displayData(recipeData);    
        // filter is triggered when search keyword is more than 2.
    } else if(searchValue.length > 2){
        // loop through data to make new array
        const searchArray = recipeData.filter(element => {
            // element = each array inside recipe data

            // title
            const title = element.name.toLowerCase();

            // ingredients
            const ingredients = element.ingredients;
            const ingredientElements = ingredients.map(el => {
                return el.ingredient.toLowerCase();
            });

            // description
            const desc = element.description.toLowerCase();
            
            if(title.includes(searchValue) 
                || ingredientElements.includes(searchValue) 
                || desc.includes(searchValue)
                ){
                return true;
            } else if(!title.includes(searchValue)
            && !ingredientElements.includes(searchValue) 
            && !desc.includes(searchValue)
            ){
                const noMatch = document.querySelector('.no-match');
                noMatch.style.display = 'flex';
                noMatch.style.height = '50vh';
                noMatch.style.justifyContent = 'center';
                noMatch.style.alignItems = 'center';
            }
        });
        displayData(searchArray);  
    }  
}


input.addEventListener('keyup', mainSearch)
