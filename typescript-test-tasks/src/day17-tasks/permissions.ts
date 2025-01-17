// - ====================== TASK LEVEL - 3_2 ====================
// Erstelle ein Enum Permissions für die Verwaltung von Zugriffsrechten: None = 0, Read = 1, Write = 2, Execute = 4,

export enum Permissions {
  NONE = 0,
  READ = 1,
  WRITE = 2,
  EXECUTE = 4,
  DELETE = 8,
}
