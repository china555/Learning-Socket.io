const app = require("express")();
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

server.listen(3000);
