const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

const PORT = process.env.PORT || 3001;

const router = require("./router");

const {addUser, removeUser, getRoomData, getUser} = require("./users");

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

		socket.emit("message", { user: 'system', text: `Bem vindo ${name} a sala ${room}`});
		socket.broadcast.to(user.room).emit('message', { user: 'system', text: `Usuario ${user.name} foi adicionado a sala!` });
		io.to(user.room).emit('updateRoom', { users: getRoomData(user.room) });

	});

	socket.on("sendMessage", (message, callback) => {
		const user = getUser(socket.id);
		io.to(user.room).emit('message', { user: user.name, text: message });
	});

	socket.on("disconnect", () => {
		const user = removeUser(socket.id);
		if(user) {
			console.log(`Removendo usuario ${user.name}`);
			io.to(user.room).emit('message', { user: 'system', text: `${user.name} saiu.` });
			io.to(user.room).emit('updateRoom', { users: getRoomData(user.room) });
		}
	})
});

app.use(router);
app.use(cors({ origin: '*' }));

server.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
