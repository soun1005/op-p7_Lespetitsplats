function recipeFactory(data) { // eslint-disable-line no-unused-vars
    // Destructuring Assignment 객체구조분해
    const {
      id, name, time, description, ingredients, ustensils,
    } = data;
    // console.log(ingredients)
    // ingredients, ustensils는 forEach로 각 dom에 집어넣을 수 있게.

    function getRecipeCardDOM() {
        /************************
        card that wraps all divs
        ************************/
        const cardWrap = document.createElement('div');
        cardWrap.classList.add('card');

        // card body-wrap
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // card img part
        const cardImg = document.createElement('div');
        cardImg.classList.add('card-img-top');

        /*******************************
        card head = title, time and icon
        ********************************/
        // card head
        const cardHead = document.createElement('div');
        cardHead.classList.add('card-body-head');
        cardHead.classList.add('d-xl-flex');
        cardHead.classList.add('justify-content-between');
        cardHead.classList.add('align-items-center');

        const cardTitle = document.createElement('h1');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = name;


        const cardClockIcon = document.createElement('span');
        cardClockIcon.classList.add('fa-regular', 'fa-clock');
        cardClockIcon.textContent = time;

        /***************************************
        card body part = ingredients and recipe
        ****************************************/

        const cardDscr = document.createElement('div');
        cardDscr.classList.add('card__dscr');
        const ingredientContainer = document.createElement('ul');
        ingredientContainer.classList.add('ingredients__container');
        cardDscr.append(ingredientContainer);

        // ingredients
        data.ingredients.forEach( element => {
          const { ingredient, quantity, unit } = element;

          let ingredientsWrap = document.createElement('li');
          ingredientsWrap.classList.add('ingredient__wrap');
          let ingredientSpan = document.createElement('span');
          ingredientSpan.textContent = ingredient;
          ingredientsWrap.append(ingredientSpan);
          ingredientContainer.append(ingredientsWrap);
          ingredientsWrap.append(ingredientSpan);
        
          if (!(quantity === undefined)) {
              let quantitySpan = document.createElement('span')
              quantitySpan.textContent = ': ' + quantity
              ingredientsWrap.append(quantitySpan);
          }
  
          if (!(unit === undefined)) {
              let unitSpan = document.createElement('span')
              unitSpan.textContent = ' ' + unit;
              ingredientsWrap.append(unitSpan);
          } 

          
      }
      );


        // recipe
        const recipeContent = document.createElement('div');
        recipeContent.classList.add('recipe-content');
        const recipeParagraphe = document.createElement('p');
        recipeParagraphe.innerText = description;

        /***********
        append divs
        ************/
        cardWrap.append(cardImg);
        cardWrap.append(cardBody);

        cardBody.append(cardHead);
        cardBody.append(cardDscr);
        cardDscr.append(recipeContent)

        cardHead.append(cardTitle);
        cardHead.append(cardClockIcon);
        
  
        recipeContent.append(recipeParagraphe);
  
      return (cardWrap);
    }
    return {
        id, name, time, description, ingredients, ustensils, getRecipeCardDOM,
    };
  }

  function ingFilter(ingredientArray){
    function makeIngList(){
      // const ingredients = [];
      return ingredientArray.map(ingredient => {
        const ingredientLi = document.createElement('li');
        ingredientLi.innerHTML = ingredient;
        return ingredientLi;
      })
      // for (let i = 0; i < array.length; i++) {
      
      //   const ingredient = document.createElement('li');
      //   ingredient.innerHTML = array[i];

      //   ingredients.push(ingredient);
      
      // }
      // console.log(ingredients)





      // const ingredientListWrap = document.createElement('li');
      // ingredientListWrap.classList.add('ingredient__wrap');
      // array 각각 엘레먼트에 리스트 만들어서 innerText를 엘레먼트로 지정

      // array.forEach(el => {
      //   ingredientListWrap.textContent = el;
      // })
      // return (ingredients);
    }
   return { makeIngList }
  }


  export { recipeFactory, ingFilter };