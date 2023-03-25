// ../media/crop/600/400/..
const getOptimizedImage = (url: string) => {
  if (!url) return "";
  // url ko optimize krke bhejna hai
  // https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg

  let index = url.indexOf("/media/") + "/media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getOptimizedImage;
