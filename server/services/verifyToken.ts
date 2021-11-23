function verifyToken(req: any, res: any, next:any) {
  
  const jwt = require("jsonwebtoken");

  const dotenv = require("dotenv");

  dotenv.config();

  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401); // if there isn't any token

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (error: any, decoded: any) => {
      if (error) {
        res.status(403).json({ error: true, msg: "EXPIRED_TOKEN" });
      } else {
        req.user = decoded
        next();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = verifyToken;
