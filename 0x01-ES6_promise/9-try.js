import divideFunction from './8-try';

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  const result = divideFunction(10, 2);
  queue.push(result);

  return queue;
}
