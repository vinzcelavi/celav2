function splitStringUsingRegex(inputString: string): string[] {
  const characters: string[] = [];
  const regex = /(Axeptio|Swile|Teads)([\s\S])/gu;
  let match: RegExpExecArray | null;

  let lastIndex = 0;
  while (true) {
    match = regex.exec(inputString);
    if (match === null) break;
    // Add characters between matches
    characters.push(...inputString.slice(lastIndex, match.index).split(''));

    // Add the keyword with HTML
    const keyword = match[1];
    switch (keyword) {
      case 'Axeptio':
        characters.push(`${keyword} ✋🏻`);
        break;
      case 'Swile':
        characters.push(`${keyword} 💳`);
        break;
      case 'Teads':
        characters.push(`${keyword} 📺`);
        break;
      default:
        characters.push(keyword);
    }

    // Add the character after the keyword
    characters.push(match[2]);

    lastIndex = regex.lastIndex;
  }

  // Add any remaining characters after the last match
  characters.push(...inputString.slice(lastIndex).split(''));

  return characters;
}

export { splitStringUsingRegex };
