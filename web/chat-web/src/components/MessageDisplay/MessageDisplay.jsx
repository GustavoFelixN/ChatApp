import React, { useEffect, useRef } from 'react';
import { Display } from './styles.js';
import { Message } from '../index.js';

const MessageDisplay = ({ messages }) => {
	const lastMessageRef = useRef(null);

	useEffect(() => {
		lastMessageRef.current?.scrollIntoView();
	}, [messages]);

	return (
		<Display>
			{
				messages && messages.map((message, index) => (
					<Message key={index} user={message.user} type={message.type} text={message.text}/>
				))
			}
			<div ref={lastMessageRef} />
		</Display>
	)
};

export default MessageDisplay;
