interface ISmoothie {
  name: string;
  ingredients: string[];
  size: SmoothieSize;
  price: number;
}

enum SmoothieSize {
  s = "small",
  m = "medium",
  l = "large",
}

// Interface wird erstellt, damit die Funktion customizeSmoothie addIngredients und removeIngredients akzeptiert
// die Eigenschaften name, size und price sind optional und können überschrieben werden, müssen es aber nicht
interface CustomizedSmoothie extends Partial<Omit<ISmoothie, "ingredients">> {
  addIngredients?: string[];
  removeIngredients?: string[];
}

export function customizeSmoothie(
  basicSmoothie: ISmoothie,
  customizedSmoothie: CustomizedSmoothie,
): ISmoothie {
  // Die Zutaten des basicSmoothie werden in updatedIngredients kopiert
  let updatedIngredients = [...basicSmoothie.ingredients];
  // Wenn customizedSmoothie.addIngredients existiert, werden die Zutaten hinzugefügt
  if (customizedSmoothie.addIngredients) {
    updatedIngredients.push(...customizedSmoothie.addIngredients);
  }
  // Wenn customizedSmoothie.removeIngredients existiert, werden die Zutaten entfernt
  if (customizedSmoothie.removeIngredients) {
    updatedIngredients = updatedIngredients.filter(
      (ingredient) =>
        !customizedSmoothie.removeIngredients?.includes(ingredient),
    );
  }
  // Die Funktion gibt ein neues Objekt zurück, das die Eigenschaften des basicSmoothie enthält und die Zutaten aktualisiert
  return {
    ...basicSmoothie,
    ingredients: updatedIngredients,
  };
}

export const mySmoothie: ISmoothie = {
  name: "Green Fusion",
  ingredients: ["kiwi", "spinach", "lettuce", "apple", "lemon"],
  size: SmoothieSize.s,
  price: 7.99,
};

export const myCustomization: CustomizedSmoothie = {
  addIngredients: ["blueberries"],
  removeIngredients: ["lettuce"],
  price: 8.99,
};

// customizeSmoothie(mySmoothie, myCustomization);
