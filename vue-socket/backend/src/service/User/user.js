const db = require("../../db");
const jwt = require("../../jwt");

async function userLogin(username, password) {
  const sql = `SELECT voted,role,username,password FROM users WHERE username = $1`;
  const { rows } = await db.query(sql, [username]);
  if (rows.length === 0) {
    throw new Error("Login Fail");
  } else if (rows[0].password != password) {
    throw new Error("Password Incorrect");
  }
  const token = jwt.sign(
    { role: rows[0].role, username: rows[0].username, voted: rows[0].voted },
    "2h"
  );
  const { payload } = jwt.decode(token);
  return { msg: "Login succcessful", token, payload };
}

module.exports = {
  userLogin,
  voted,
};
