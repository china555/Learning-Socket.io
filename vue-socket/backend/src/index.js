const express = require("express");
const app = require("express")();
const cors = require("cors");
const bodyParse = require("body-parser");
const dotenv = require("dotenv");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  //   socket.broadcast.emit("connect");
  //   console.log("Hello");
  socket.on("join", (data) => {
    console.log(data);
    socket.join(data.room);
  });
  socket.on("communicate", (data) => {
    console.log(data);
    socket.to(data.room).emit("communicate", data);
  });
});
dotenv.config();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParse.json());
server.listen(3000, () => {
  console.log("Listenning Port 3000");
});
