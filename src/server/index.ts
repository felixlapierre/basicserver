import express from "express";
import http from "http";
import path from "path";
import {Sockets} from "./sockets";

const app = express();
const server = new http.Server(app);
const port = 3000;

app.set("port", port);
app.use("/static", express.static(__dirname + "/client/static"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/index.html"));
});

server.listen(port, () => {
    console.log("Started server on port " + port);
});

const sockets = new Sockets(server);

sockets.EmitTestMessage();
