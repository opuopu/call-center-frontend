import { useState, useEffect } from "react";

const useImageUpload = (initialImage = null) => {
  const [imageUrl, setImageUrl] = useState(initialImage);
  const [imageFile, setImageFile] = useState(null);

  const convertToBase64 = () => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  useEffect(() => {
    convertToBase64();
  }, [imageFile]);

  const setFile = (file) => {
    setImageFile(file);
  };

  return {
    imageUrl,
    setFile,
    imageFile,
    setImageUrl,
  };
};

export default useImageUpload;
