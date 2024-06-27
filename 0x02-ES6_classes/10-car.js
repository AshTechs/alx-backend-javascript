const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    return new this.constructor();
  }

  cloneCar() {
    const clone = this[cloneSymbol]();
    clone._brand = this._brand;
    clone._motor = this._motor;
    clone._color = this._color;
    return clone;
  }
}
