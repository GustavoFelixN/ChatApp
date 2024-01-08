const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3001;

app.use(cors());

server.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
