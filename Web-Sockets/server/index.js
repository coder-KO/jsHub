const WebSocket = require("ws");

// Creating a WebSocket Server
const wss = new WebSocket.Server({ port: 8082 });

// Listening to the event when a new client
// is connected to our server
wss.on("connection", ws =>{
    console.log("New Client Connected.!")

    ws.on("close", () => {
        console.log("Client has disconnected.!");
    });
});