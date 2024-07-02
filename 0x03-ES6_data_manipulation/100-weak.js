const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const callCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, callCount);

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  return callCount;
}
