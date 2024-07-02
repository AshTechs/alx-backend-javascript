function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('Expected a Set as the first argument');
  }

  const filteredValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return filteredValues.join('-');
}

export default cleanSet;
