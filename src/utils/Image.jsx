const ImageGenerator = (url) => {
  return url ? `${process.env.REACT_APP_BACKEND_UR}${url}` : null;
};

export default ImageGenerator;
