// Assets are 6:5 by default; a "-16-9" or "-16-10" suffix in the file name opts into a wider frame, "-4-5" into a portrait one
function assetAspectClass(filePath: string) {
  if (/-16-9\.[a-z0-9]+$/i.test(filePath)) return 'aspect-video';
  if (/-16-10\.[a-z0-9]+$/i.test(filePath)) return 'aspect-widescreen';
  if (/-4-5\.[a-z0-9]+$/i.test(filePath)) return 'aspect-portrait';
  return 'aspect-project-preview';
}

export { assetAspectClass };
