const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/socket", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/", (req, res) => {
  res.send("Inicio de tudo <br> <a href='/socket'>Ir para socket</a>");
});

io.on("connection", () => {
  console.log("a user connected");
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
