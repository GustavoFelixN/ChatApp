import React from 'react';
import { Page, Title, InputContainer } from './styles.js';
import { Input } from '../../components';

const Login = () => {
	return (
		<Page>
			<Title>CHAT DO FELIX</Title>
			<InputContainer>
				<Input size="large" placeholder="Nome" style={ {backgroundColor: "#380356"} }/>
				<Input size="large" placeholder="Sala"/>
			</InputContainer>
		</Page>
	);
};

export default Login;
