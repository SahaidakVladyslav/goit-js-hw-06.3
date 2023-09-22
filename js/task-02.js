const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");


ingredients.map(element => {
  const itemEl = document.createElement("li");
  itemEl.classList = "item";
  itemEl.textContent = element;
  listEl.append(itemEl)
})


