const WebSocket = require("ws");

// Creating a WebSocket Server
const wss = new WebSocket.Server({ port: 8082 });

// Listening to the event when a new client
// is connected to our server
wss.on("connection", ws =>{
    console.log("New Client Connected.!")

    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)

        ws.send(data.toUpperCase());
    });

    ws.on("close", () => {
        console.log("Client has disconnected.!");
    });
});