import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Page, Title } from './styles.js';
import { MessageDisplay, MessageInput } from '../../components';

const Chat = () => {
	const location = useLocation();
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [messages, setMessages] = useState([]);

	const socket = useRef(null);

	const sendMessage = (message, cleanUpFunction) => {
		if(message) {
			socket.current.emit('sendMessage', message, cleanUpFunction);
		}
	}

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

	useEffect(() => {
		socket.current.on('message', (message) => {
			if(message.user === 'system'){
				setMessages([...messages, { user: message.user, text: message.text, type: "system"}])
			} else if (message.user === name) {
				setMessages([...messages, { user: message.user, text: message.text, type: "user"}])
			} else {
				setMessages([...messages, { user: message.user, text: message.text, type: "sender"}])
			}
		})
	}, [messages, name]);


	return (
		<Page>
			<Title>{room}</Title>
			<MessageDisplay messages={messages}/>
			<MessageInput submitCallback={sendMessage}/>
		</Page>
	);
}

export default Chat;
