enum Gender {
  Male = "MALE",
  Female = "FEMALE",
  Nonbinary = "NON-BINARY",
}

class Person {
  name: string;
  _birthday: Date;
  _gender: Gender;

  constructor(name: string, birthday: Date, gender: Gender) {
    this.name = name;
    this._birthday = birthday;
    this._gender = gender;
  }
  get birthday() {
    return this._birthday;
  }
  set birthday(value: Date) {
    this._birthday = value;
  }
  get gender() {
    return this._gender;
  }
  set gender(value: Gender) {
    this._gender = value;
  }
}
