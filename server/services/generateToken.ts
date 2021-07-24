function generateToken(id: any) {
  const jwt = require("jsonwebtoken");
  const dotenv = require("dotenv");

  dotenv.config();

  const expiration = "1d";

  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: expiration });
}

module.exports = generateToken;
