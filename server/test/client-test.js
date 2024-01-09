const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");

socket.on("connect", () => {
	console.log("Conectando ao servidor");

	socket.emit("join", {name: 'felix', room: 'teste'}, (response) => console.log(response))
});
