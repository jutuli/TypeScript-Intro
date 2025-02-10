interface ITea {
  name: string;
  type: "Black" | "Green" | "Yellow" | "White" | "Oolong" | "Other";
  temperature: number;
  brewingTime: number;
}

type PartialTea = Partial<ITea>;

export function prepareTea(tea: PartialTea) {
  if (!tea.name || !tea.brewingTime) {
    console.error("Please ensure to include the tea name and breaing time");
    return;
  }
  console.log(
    `Preparing ${tea.name} - will be ready in ${tea.brewingTime} minute(s).`,
  );
}

export const peppermintTea: ITea = {
  name: "Peppermint Tea",
  type: "Other",
  temperature: 80,
  brewingTime: 3,
};

export const greenTea: PartialTea = {
  name: "Sencha Tea",
  type: "Green",
  brewingTime: 1,
};

prepareTea(peppermintTea);
prepareTea(greenTea);
