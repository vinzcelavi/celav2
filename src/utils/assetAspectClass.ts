// Assets are 6:5 by default; a "-16-9" suffix in the file name opts into a 16:9 frame
function assetAspectClass(filePath: string) {
  return /-16-9\.[a-z0-9]+$/i.test(filePath) ? 'aspect-video' : 'aspect-project-preview';
}

export { assetAspectClass };
