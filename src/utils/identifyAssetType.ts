function identifyAssetType(filePath: string) {
  const imageRegex = /\.(jpg|jpeg|png|gif|avif|webp)$/i;
  const videoRegex = /\.(mp4|webm|mov|avi|mkv)$/i;

  if (imageRegex.test(filePath)) {
    return 'image';
  }
  if (videoRegex.test(filePath)) {
    return 'video';
  }
  return false;
}

export { identifyAssetType };
