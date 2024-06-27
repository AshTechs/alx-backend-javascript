import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clone = new Car();
    clone._brand = this._brand;
    clone._motor = this._motor;
    clone._color = this._color;
    return clone;
  }
}
