// - ================== TASK 1_2 ===================

// Definiere ein Enum PizzaSize mit den Größen Small, Medium, Large, Familie
enum PizzaSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
  Family = "family",
}

// Definiere ein weiteres Enum PizzaIngredients mit Werten wie Cheese, Onion, Salami // werde selbst kreativ und denke dir weitere Zutaten aus
enum PizzaIngredients {
  Cheese = "cheese",
  Onion = "onion",
  Salami = "salami",
  Pineapple = "pineapple",
}

// Lege eine Typ Pizza mit den Eigenschaften size: PizzaSize und ingredients: PizzaIngredients[] an
type Pizza = {
  size: PizzaSize;
  ingredients: PizzaIngredients[];
};

// Lege 4 Pizza-Objekte mit verschiedenen Größen und Belägen an
const pizza1: Pizza = {
  size: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion],
};
const pizza2: Pizza = {
  size: PizzaSize.Medium,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami],
};
const pizza3: Pizza = {
  size: PizzaSize.Large,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Pineapple],
};
const pizza4: Pizza = {
  size: PizzaSize.Family,
  ingredients: [PizzaIngredients.Cheese],
};

export const pizzas = () => console.log(pizza1, pizza2, pizza3, pizza4);
