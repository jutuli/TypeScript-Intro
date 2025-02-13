import Car from "./Car";

class Driver {
  firstName: string;
  lastName: string;
  age: number;
  car: Car;
  readonly licenseFromYear: number;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    car: Car,
    licenseFromYear: number,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.car = car;
    this.licenseFromYear = licenseFromYear;
  }
}

export default Driver;
