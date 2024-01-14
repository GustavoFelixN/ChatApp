import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import  { io } from 'socket.io-client';

const Chat = () => {
	const location = useLocation();
	const [, setName] = useState('');
	const [, setRoom] = useState('');

	const socket = useRef(null);

	useEffect(() => {
		const { name, room } = location.state;
		setName(name);
		setRoom(room);

		socket.current = io("localhost:3001");

		socket.current.on('connect', () => {
			console.log('conectado!');
		});

		socket.current.on("connect_error", () => {
			console.log('deu ruim');
			socket.current.disconnect();
		});

	}, [location])

	return (
		<div>
			<h1>Chat</h1>
		</div>
	);
}

export default Chat;
