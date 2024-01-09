const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3001;

const {addUser, removeUser} = require("./users");

io.on("connection", (socket) => {
	console.log("Um usuario conectou");
	socket.on("join", ({name, room}, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });

		if (error) {
			console.error("Usuario ja existente");
			return callback(error);
		}

		socket.join(user.room);
		console.log(`Usuario ${name} adicionado com sucesso a sala ${room}`)
		callback();
	});

	socket.on("disconnect", () => {
		const user = removeUser(socket.id);
		if(user) {
			console.log(`Removendo usuario ${user.name}`);
		}
	})
});

app.use(cors());

server.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
