const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredientsList = (ingredientsList) => {
  const ingredientsArray = ingredientsList.map(ingredientElement => {
    const listEl = document.createElement("li")
    listEl.textContent = ingredientElement
    listEl.classList.add("item")
    return listEl
  })
  
  return ingredientsArray
}

const ingredientsListEl = document.querySelector("#ingredients")
ingredientsListEl.append(...createIngredientsList(ingredients))

console.log(...createIngredientsList(ingredients))