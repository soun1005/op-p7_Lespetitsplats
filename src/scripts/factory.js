function recipeFactory(data) { // eslint-disable-line no-unused-vars
  // Destructuring Assignment 객체구조분해
  const {
    id, name, time, description, ingredients, ustensils,
  } = data;
    // console.log(ingredients)
    // ingredients, ustensils는 forEach로 각 dom에 집어넣을 수 있게.

  function getRecipeCardDOM() {
    /** **********************
        card that wraps all divs
        *********************** */
    const cardWrap = document.createElement('div');
    cardWrap.classList.add('card');

    // card body-wrap
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // card img part
    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img-top');

    /** *****************************
        card head = title, time and icon
        ******************************* */
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

    /** *************************************
        card body part = ingredients and recipe
        *************************************** */

    const cardDscr = document.createElement('div');
    cardDscr.classList.add('card__dscr');
    const ingredientContainer = document.createElement('ul');
    ingredientContainer.classList.add('ingredients__container');
    cardDscr.append(ingredientContainer);

    // ingredients
    data.ingredients.forEach((element) => {
      const { ingredient, quantity, unit } = element;

      const ingredientsWrap = document.createElement('li');
      ingredientsWrap.classList.add('ingredient__wrap');
      const ingredientSpan = document.createElement('span');
      ingredientSpan.textContent = ingredient;
      ingredientsWrap.append(ingredientSpan);
      ingredientContainer.append(ingredientsWrap);
      ingredientsWrap.append(ingredientSpan);

      if (!(quantity === undefined)) {
        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = `: ${quantity}`;
        ingredientsWrap.append(quantitySpan);
      }

      if (!(unit === undefined)) {
        const unitSpan = document.createElement('span');
        unitSpan.textContent = ` ${unit}`;
        ingredientsWrap.append(unitSpan);
      }
    });

    // recipe
    const recipeContent = document.createElement('div');
    recipeContent.classList.add('recipe-content');
    const recipeParagraphe = document.createElement('p');
    recipeParagraphe.innerText = description;

    /** *********
        append divs
        *********** */
    cardWrap.append(cardImg);
    cardWrap.append(cardBody);

    cardBody.append(cardHead);
    cardBody.append(cardDscr);
    cardDscr.append(recipeContent);

    cardHead.append(cardTitle);
    cardHead.append(cardClockIcon);

    recipeContent.append(recipeParagraphe);

    return (cardWrap);
  }
  return {
    id, name, time, description, ingredients, ustensils, getRecipeCardDOM,
  };
}

/** ********************************************
  [filter list factories]
  each function takes array of their elements
  each elements are generated as <li>
  with 'map'function and
  the list innerHtml is each element content
  ex) ingredient <li> contains each 'ingredient'
  ********************************************* */

function ingFilter(ingredientArray) {
  function makeIngList() {
    return ingredientArray.map((ingredient) => {
      const ingredientLi = document.createElement('div');
      ingredientLi.classList.add('col-4', 'mb-1');
      const ingElements = document.createElement('span');
      ingElements.innerHTML = ingredient;
      ingredientLi.append(ingElements);
      return ingredientLi;
    });
  }
  return { makeIngList };
}

function applianceFilter(applianceArray) {
  function makeApplianceList() {
    return applianceArray.map((appliance) => {
      const applianceLi = document.createElement('div');
      applianceLi.classList.add('col-4', 'mb-1');
      const appElements = document.createElement('span');
      appElements.innerHTML = appliance;
      applianceLi.append(appElements);
      return applianceLi;
    });
  }
  return { makeApplianceList };
}

function utensilFilter(utensilArray) {
  function makeUtensilList() {
    return utensilArray.map((utensil) => {
      const utensilLi = document.createElement('div');
      utensilLi.classList.add('col-4', 'mb-1');
      const utenElements = document.createElement('span');
      utenElements.innerHTML = utensil;
      utensilLi.append(utenElements);
      return utensilLi;
    });
  }
  return { makeUtensilList };
}

export {
  recipeFactory, ingFilter, applianceFilter, utensilFilter,
};
