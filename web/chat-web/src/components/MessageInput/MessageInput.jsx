import React from 'react';
import { Space } from 'antd';
import { Input, Button } from '../index.js';

const MessageInput = () => {
	return (
		<Space.Compact style={{ width: '100%' }}>
			<Input size="large" placeholder="Envie uma mensagem.."/>
			<Button size="large" type="submit">Enviar</Button>
		</Space.Compact>
	);
};

export default MessageInput;
