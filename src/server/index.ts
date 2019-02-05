import express from "express";
import http from "http";
import path from "path";
import socketIO, { Socket } from "socket.io";

const app = express();
const server = new http.Server(app);
const io = socketIO(server);
const port = 3000;

app.set("port", port);
app.use("/static", express.static(__dirname + "/client/static"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/index.html"));
});

server.listen(port, () => {
    console.log("Started server on port " + port);
});

// Create the WebSocket handlers
io.on("connection", (socket: Socket) => {

});

// Test socket emission
setInterval( () => {
    io.sockets.emit("message", "Test!");
}, 1000);
