import React from 'react';
import { Container, Sender, Content } from './styles.js';

const MessageBase = ({user, text}) => {
	return (
		<Container>
			<Sender>{user}</Sender>
			<Content>{text}</Content>
		</Container>
	)
};

export default MessageBase;
