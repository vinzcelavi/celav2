function splitStringUsingRegex(inputString: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;
  let match: RegExpExecArray | null;

  while (true) {
    match = regex.exec(inputString);
    if (match === null) break;
    characters.push(match[0]);
  }

  return characters;
}

export { splitStringUsingRegex };
