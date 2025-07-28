export function chooseRandomEntry<T>(obj: Record<string, T>): [ string, T ] {
  const entries = Object.entries(obj);
  return chooseRandomElement(entries);
};

export function chooseRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};