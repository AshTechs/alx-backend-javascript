function setFromArray(array) {
  const set = new Set();
  array.forEach((item) => set.add(item));
  return set;
}

export default setFromArray;
