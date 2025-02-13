class Customer {
  private _name: string;
  private _email: string;
  private _address: string;
  private _postalCode: string;
  private _city: string;

  constructor(
    name: string,
    email: string,
    address: string,
    postalCode: string,
    city: string,
  ) {
    this._name = name;
    this._email = email;
    this._address = address;
    this._postalCode = postalCode;
    this._city = city;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length >= 60)
      throw new Error("The name must be 60 characters or less.");
    this._name = value;
  }

  get email() {
    return this._email;
  }

  set email(value: string) {
    if (!value.includes("@"))
      throw new Error("Your e-mail address is incorrect.");
    this._email = value;
  }

  get address() {
    return this._address;
  }

  get postalCode() {
    return this._postalCode;
  }

  set postalCode(value: string) {
    // RegEx Prüfung mit .test => 5 Widerholungen ({5}) von Ziffern (\d)
    // ^ & $ geben Anfang und Ende vom Input an
    if (!/^\d{5}$/.test(value))
      throw new Error("The postal code must consist of 5 numbers.");
    this._postalCode = value;
  }
  get city() {
    return this._city;
  }
}

export default Customer;
