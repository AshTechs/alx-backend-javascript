// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 6 when type is SUM and inputs are 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return -4 when type is SUBTRACT and inputs are 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 0.2 when type is DIVIDE and inputs are 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it("should return 'Error' when type is DIVIDE and second input rounds to 0", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should throw a TypeError when an invalid type is provided', () => {
    assert.throws(() => {
      calculateNumber('MULTIPLY', 1.4, 4.5);
    }, TypeError);
  });
});
