import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Chat = () => {
	const location = useLocation();
	const [, setName] = useState('');
	const [, setRoom] = useState('');

	useEffect(() => {
		const { name, room } = location.state;
		setName(name);
		setRoom(room);
	}, [location])

	return (
		<div>
			<h1>Chat</h1>
		</div>
	);
}

export default Chat;
