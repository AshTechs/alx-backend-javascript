function cleanSet(set, startString) {
  let result = '';

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += (result.length === 0 ? '' : '-') + value.substring(startString.length);
    }
  });

  return result;
}

export default cleanSet;
