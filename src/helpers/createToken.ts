const jwt = require("jsonwebtoken");

const { SECRET_KEY_JWT } = process.env;

export const genereateToken = (id: string, roles: [value: string]) => {
  const payload = {
    id,
    roles,
  };

  const token = jwt.sign(payload, SECRET_KEY_JWT, { expiresIn: "24h" });
  return token;
};
