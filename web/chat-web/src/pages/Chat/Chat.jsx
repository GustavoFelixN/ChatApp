import React, { useLayoutEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Page, Title } from './styles.js';
import { Message } from '../../components';

const Chat = () => {
	const location = useLocation();
	const [, setName] = useState('');
	const [room, setRoom] = useState('');

	const socket = useRef(null);

	useLayoutEffect(() => {
		const { name, room } = location.state;
		setName(name);
		setRoom(room);

		socket.current = io("localhost:3001");

		socket.current.emit('join', { name, room }, (error) => {
			alert(error);
		});

		return () => {
			socket.current.disconnect();
		}

	}, [location])

	return (
		<Page>
			<Title>{room}</Title>
			<Message user="felix" type="user" text="ola, teste de estilo de mensagem."/>
			<Message user="visitante" type="sender" text="essa mensagem foi mandada por outro usuario"/>
			<Message user="carlos" type="sender" text="essa tbm! (pelo carlos)"/>
		</Page>
	);
}

export default Chat;
