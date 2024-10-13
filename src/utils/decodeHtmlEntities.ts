function decodeHtmlEntities(encodedString: string): string {
  return encodedString.replace(/&#(\d+);/g, (_match, dec) => String.fromCharCode(dec));
}

export { decodeHtmlEntities };
