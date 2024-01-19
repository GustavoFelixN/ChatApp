import React from 'react';
import { Container, Message } from './styles.js';

const MessageSystem = ({text}) => {
	return (
		<Container>
			<Message>{text}</Message>
		</Container>
	)
}

export default MessageSystem;
