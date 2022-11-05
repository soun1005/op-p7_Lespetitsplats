// main search input
const input = document.querySelector('input');

// title of recipe
const title = document.querySelectorAll('.card-title');
// title.forEach(element => console.log(element.innerHTML));

// ingredients of recipe
const ingredient = document.querySelectorAll('.ingredient__wrap');
// ingredient.forEach(element => console.log(element.firstChild.innerHTML));

// recipe
const recipeCard = document.querySelectorAll('.card');
console.log(recipeCard);
const recipeContent = document.querySelectorAll('.recipe-content');
// recipeContent.forEach(element => console.log(element.firstChild.innerHTML));




function mainSearch(){
    // console.log(input.value);

}




input.addEventListener('keyup',()=> {
// 2초뒤에 실행하라
    setTimeout(mainSearch, 2000);
})



// let string = 'hello';
// console.log(string.slice(0,3));
// console.log(string.substring(2,5));