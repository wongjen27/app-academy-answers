/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/


function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  //prints from [1] and [2]
  bakedPies(pieType, pieQuantity)

  //prints from [3]
  const costOfPie = costOfOnePie(pieType)
  console.log(`Cost per pie: ${costOfPie}`);

  //prints from [4]

  revenue = totalRevenue(pieType, pieQuantity, profitMargin)
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}


//[1] list the ingredients that are in the pie
function combineIngredients(pieType) {
  const recipe = recipes[pieType];
    let combiningMsg = `Combining ingredients for ${pieType}: `
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    console.log(combiningMsg);
}

//[2] run loop for each pie that is baked and print the ingredients that is in it
function bakedPies(pieType,pieQuantity) {
  for (let i = 0; i < pieQuantity; i++) {
    combineIngredients(pieType)

    // Print the nth pie that was baked
    console.log(`Baked pie ${i + 1}!`);
  }
}

//[3] calculates how much it costs to produce one pie
function costOfOnePie(pieType) {
  // Print the cost of each pie based on the cost of each ingredient
  const recipe = recipes[pieType];
  const costOfPie = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);

  return costOfPie
}

//[4] calculates the revenue of selling the pies
function totalRevenue(pieType, pieQuantity, profitMargin) {
  const totalCost = costOfOnePie(pieType) * pieQuantity;
  const revenue = totalCost * (profitMargin || 1.2);

  return revenue
}

/******************************* LOCAL TESTS *******************************/


bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
