function splitIntoParagraphs(text: string) {
  // Split the text using \n or \r\n (to handle different types of new lines)
  return text.split(/\r?\n/).filter((line) => line.trim() !== '');
}

export { splitIntoParagraphs };
