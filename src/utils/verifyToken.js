import jwt from "jsonwebtoken";
export const verityToken = (token) => {
  return jwt.verify(token, "secret2020");
};
