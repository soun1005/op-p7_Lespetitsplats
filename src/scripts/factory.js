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
        cardClockIcon.classList.add('fa-regular');
        cardClockIcon.classList.add('fa-clock')
        cardClockIcon.textContent = time;
        const cardTime = document.createElement('h2');
        cardTime.classList.add('card-subtitle');

        /***************************************
        card body part = ingredients and recipe
        ****************************************/
        // ingredients
        const ingredientsWrap = document.createElement('div');
        ingredientsWrap.classList.add('ingredient__wrap');
        ingredientsWrap.classList.add('d-xl-flex');
        ingredientsWrap.classList.add('justify-content-around');
        
        const ingredientElem = document.createElement('span');
        // ingredientElem.textContent = `${ingredient}: ${quantity}${unit}`;

        ingredients.forEach(element => {
          const { ingredient, quantity, unit } = element;
          return  ingredientElem.textContent = `${ingredient}: ${quantity || ''}${unit || ''}`;
        });


        // recipe
        const recipeContent = document.createElement('div');
        const recipeParagraphe = document.createElement('p');
        recipeParagraphe.innerText = description;

        /***********
        append divs
        ************/
        cardWrap.append(cardImg);
        cardWrap.append(cardBody);

        cardBody.append(cardHead);
        cardBody.append(ingredientsWrap);
        cardBody.append(recipeContent)

        cardHead.append(cardTitle);
        cardHead.append(cardClockIcon);
        cardHead.append(cardTime);

        ingredientsWrap.append(ingredientElem);
        ingredientsWrap.append(recipeContent);
        recipeContent.append(recipeParagraphe);
  
      return (cardWrap);
    }
    return {
        id, name, time, description, ingredients, ustensils, getRecipeCardDOM,
    };
  }

  export default recipeFactory;