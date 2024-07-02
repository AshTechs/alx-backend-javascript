export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint configuration');
  }

  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  return count;
}
