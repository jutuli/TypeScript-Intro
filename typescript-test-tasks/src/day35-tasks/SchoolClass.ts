import { Student } from "./Student";

export class SchoolClass {
  id: number;
  name: string;
  endDate?: Date;
  students?: Student[];

  constructor(id: number, name: string, students?: Student[]) {
    (this.id = id), (this.name = name), (this.students = students);
  }
}

export const alphaClass: SchoolClass = new SchoolClass(1, "Alpha");
export const betaClass: SchoolClass = new SchoolClass(2, "Beta");
export const gammaClass: SchoolClass = new SchoolClass(3, "Gamma");
