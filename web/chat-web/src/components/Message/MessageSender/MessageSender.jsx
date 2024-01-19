import React from 'react';
import { MessageWrapper } from './styles.js';
import { default as MessageBase } from '../MessageBase/MessageBase.jsx';

const MessageSender = ({user, text}) => {
	return (
		<MessageWrapper>
			<MessageBase  user={user} text={text}  />
		</MessageWrapper>
	);
};

export default MessageSender;
