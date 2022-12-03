// firstUpperCase returns str with the first letter of it made upper case
export function firstUpperCase(str: string) {
  const firstLetter = str.charAt(0);
  const remainingLetters = str.slice(1);

  return firstLetter.toUpperCase() + remainingLetters;
}
