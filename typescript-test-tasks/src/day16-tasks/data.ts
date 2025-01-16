//- Erstelle einen Type für deine ausgewählte Art von Sammelkarten mit verschiedenen Merkmalen/Eigenschaften (z.B. Rapper: Künstlername, Alter, verkaufte Singles/Alben etc.)

export type BasketballCard = {
  firstName: string;
  lastName: string;
  age: number;
  height: number;
  currentTeam: string;
  jerseyNumber: number;
  position: string;
  ppg: number;
  imageUrl: string;
};
