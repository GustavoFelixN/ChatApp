import React from 'react';
import { Display } from './styles.js';
import { Message } from '../index.js';

const MessageDisplay = ({ messages }) => {
	return (
		<Display>
			{
				messages && messages.map((message, index) => (
					<Message key={index} user={message.user} type={message.type} text={message.text}/>
				))
			}
		</Display>
	)
};

export default MessageDisplay;