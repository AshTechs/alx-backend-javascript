function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('Expected a Set as the first argument');
  }

  let result = '';
  let isFirst = true;

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      if (!isFirst) {
        result += '-';
      }
      result += value.substring(startString.length);
      isFirst = false;
    }
  });

  return result;
}

export default cleanSet;
