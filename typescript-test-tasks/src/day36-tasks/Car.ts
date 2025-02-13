import CarType from "./CarType";

class Car {
  brand: string;
  readonly constructionYear: number;
  currentSpeed: number;
  carType: CarType;

  constructor(
    brand: string,
    constructionYear: number,
    currentSpeed: number,
    carType: CarType,
  ) {
    this.brand = brand;
    this.constructionYear = constructionYear;
    this.currentSpeed = currentSpeed;
    this.carType = carType;
  }

  getSpeedInfo(): string {
    switch (true) {
      case this.currentSpeed <= 40:
        return "Driving slowly";
        break;
      case this.currentSpeed > 40 && this.currentSpeed <= 70:
        return "Driving normally";
        break;
      case this.currentSpeed > 70 && this.currentSpeed <= 120:
        return "Driving fast";
        break;
      case this.currentSpeed > 120 && this.currentSpeed <= 190:
        return "Driving really fast";
        break;
      case this.currentSpeed > 190:
        return "WTF";
        break;
      default:
        return "The speed info cannot be provided";
    }
  }

  getCarType(): string {
    return this.carType;
  }
}

export default Car;
