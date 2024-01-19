import React from 'react';
import { MessageWrapper } from './styles.js';
import { default as MessageBase } from '../MessageBase/MessageBase.jsx';

const MessageUser = ({user, text}) => {
	return (
		<MessageWrapper>
			<MessageBase user={user} text={text} />
		</MessageWrapper>
	);
};

export default MessageUser;
