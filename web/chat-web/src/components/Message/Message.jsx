import React from 'react';
import { default as MessageSender } from './MessageSender/MessageSender.jsx';
import { default as MessageUser } from './MessageUser/MessageUser.jsx';
import { default as MessageSystem } from './MessageSystem/MessageSystem.jsx';

const Message = ({user, text, type}) => {

	const selectMessageType = () => {
		if(type === 'user') {
			return <MessageUser user={user} text={text} />
		}

		if(type === 'system') {
			return <MessageSystem text={text} />
		}

		return <MessageSender user={user} text={text} />
	};

	return (
		<>
			{ selectMessageType() }
		</>
	);
};

export default Message;
