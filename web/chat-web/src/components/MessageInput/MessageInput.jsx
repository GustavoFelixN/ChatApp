import React, { useState } from 'react';
import { Space } from 'antd';
import { Input, Button } from '../index.js';

const MessageInput = ({ submitCallback }) => {
	const [message, setMessage] = useState('');
	const handleSubmit = () => {
		submitCallback(message, () => setMessage(''));
	};

	return (
		<Space.Compact style={{ width: '100%' }}>
			<Input
				size="large"
				placeholder="Envie uma mensagem.."
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<Button size="large" htmlType="submit" onClick={handleSubmit}>Enviar</Button>
		</Space.Compact>
	);
};

export default MessageInput;
