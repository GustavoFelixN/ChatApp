const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");

socket.on("connect", () => {
	console.log("Conectando ao servidor");

	socket.emit("join", {name: 'piper', room: 'teste'}, (response) => console.log(response))
	socket.on("message", (message) => console.log(message));
	socket.on("updateRoom", (roomData) => console.log(roomData));
});
