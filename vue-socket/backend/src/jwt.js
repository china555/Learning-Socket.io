const jwt = require("jsonwebtoken");
const secret = "secret";
const sign = (payload, expireDate) => {
  const expiresIn = expireDate;
  return jwt.sign({ payload }, secret, { expiresIn });
};

const verify = (authorization) => {
  try {
    if (authorization) {
      const token = authorization.replace("Bearer ", "");
      jwt.verify(token, secret);
      const userInfo = jwt.decode(token);
      return { isValid: true, userInfo };
    }
  } catch (e) {
    return { isValid: false };
  }
};

const decode = (token) => jwt.decode(token);

// var older_token = jwt.sign(
//   { foo: "bar", iat: Math.floor(Date.now() / 1000) - 30 },
//   "shhhhh"
// );

// console.log(older_token);
//jwt

module.exports = {
  sign,
  verify,
  decode,
};
