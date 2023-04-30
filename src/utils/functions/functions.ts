export function toSentenceCase(word: string) {
  // Step 1: Convert the entire word to lowercase
  word = word.toLowerCase();

  // Step 2: Capitalize the first letter of the word
  word = word.charAt(0).toUpperCase() + word.slice(1);

  return word;
}

export function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
