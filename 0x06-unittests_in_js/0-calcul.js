function calculateNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new TypeError('Inputs must be numbers');
  }

  // Function to handle rounding for negative numbers
  const customRound = (num) => {
    if (num < 0) {
      return -Math.round(Math.abs(num));
    }
    return Math.round(num);
  };

  const roundedA = customRound(a);
  const roundedB = customRound(b);

  return roundedA + roundedB;
}

module.exports = calculateNumber;
