export const getImage = (imageUrl) => {
  return imageUrl !== undefined && imageUrl !== ""
    ? imageUrl
    : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363";
};
