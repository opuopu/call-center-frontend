const ImageGenerator = (url) => {
  console.log(process.env.IMAGE_UPLOAD_BACKEND_DOMAIN);
  return `${`http://192.168.10.3:3000`}${url}`;
};

export default ImageGenerator;
