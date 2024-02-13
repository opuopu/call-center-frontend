const ImageGenerator = (url) => {
  return url ? `${`http://192.168.10.3:3000`}${url}` : null;
};

export default ImageGenerator;
