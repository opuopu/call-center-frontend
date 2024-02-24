const ImageGenerator = (url) => {
  return url ? `${`http://192.168.10.14:3000`}${url}` : null;
};

export default ImageGenerator;
