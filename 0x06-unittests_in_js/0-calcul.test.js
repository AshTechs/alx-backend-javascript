// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return 4 when inputs are 1 and 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when inputs are 0.1 and -0.4', function () {
    assert.strictEqual(calculateNumber(0.1, -0.4), 0);
  });

  it('should return -1 when inputs are -0.4 and -0.5', function () {
    assert.strictEqual(calculateNumber(-0.4, -0.5), -1);
  });

  it('should return -3 when inputs are -1.2 and -1.5', function () {
    assert.strictEqual(calculateNumber(-1.2, -1.5), -3);
  });

  it('should handle large numbers correctly', function () {
    assert.strictEqual(calculateNumber(1000, 2000), 3000);
  });

  it('should handle zero correctly', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle decimal numbers correctly', function () {
    assert.strictEqual(calculateNumber(2.4, 2.4), 4);
  });

  it('should handle NaN inputs by throwing an error', function () {
    assert.throws(() => calculateNumber(NaN, 3), TypeError);
    assert.throws(() => calculateNumber(3, NaN), TypeError);
    assert.throws(() => calculateNumber(NaN, NaN), TypeError);
  });
});
