class SchoolClass {
  id: number;
  name: string;
  endDate?: Date;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
}

export const alphaClass = new SchoolClass(1, "Alpha");
export const betaClass = new SchoolClass(2, "Beta");
export const gammaClass = new SchoolClass(3, "Gamma");
