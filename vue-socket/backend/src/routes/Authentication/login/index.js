const express = require("express");
const login = express.Router();
const { userLogin } = require("../../../service/User/user");

login.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const data = await userLogin(username, password);
    res.status(200).send(data);
  } catch (error) {
    if (String(error) === "Error: Login Fail") {
      res.status(401).send(error);
    } else if (String(error) === "Error: Password Incorrect") {
      console.log("wadawdwdaawd");
      res.status(403).send(error);
    }
  }
});

module.exports = login;
