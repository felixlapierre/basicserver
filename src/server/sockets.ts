import http from "http";
import SocketIO, {Socket} from "socket.io";

export class Sockets {
    private io: SocketIO.Server;
    constructor(server: http.Server) {
        this.io = SocketIO(server);
        this.CreateWebsocketHandlers();
    }

    public EmitTestMessage() {
        setInterval( () => {
            this.io.sockets.emit("message", "Test!");
        }, 1000);
    }

    private CreateWebsocketHandlers() {
        this.io.on("connection", (socket: Socket) => {
            socket.on("new connection", () => {
                console.log("New connection!");
            });
        });
    }
}
