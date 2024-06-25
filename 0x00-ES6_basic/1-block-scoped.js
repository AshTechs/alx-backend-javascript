export default function taskBlock(trueOrFalse) {
  let task = true;
  let task2 = false;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task2, task];
}
