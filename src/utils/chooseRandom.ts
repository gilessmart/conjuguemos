export default function chooseRandom<T>(obj: Record<string, T>): { key: string, value: T } {
  const entries = Object.entries(obj);
  const randomIndex = Math.floor(Math.random() * entries.length);
  const chosenEntry = entries[randomIndex];
  return { key: chosenEntry[0], value: chosenEntry[1] };
};
