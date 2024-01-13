import React from 'react';
import { Page, Title, InputContainer, ButtonWrapper } from './styles.js';
import { Input, Button } from '../../components';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = (formData) => {
		navigate('/chat', { state: formData });
	};

	return (
		<Page>
			<Title>CHAT DO FELIX</Title>
			<Form onFinish={handleSubmit}>
				<InputContainer>
					<Form.Item name="name">
						<Input size="large" placeholder="Nome"/>
					</Form.Item>
					<Form.Item name="room">
						<Input size="large" placeholder="Sala"/>
					</Form.Item>
					<ButtonWrapper>
						<Button size="large" htmlType="submit" >Entrar</Button>
					</ButtonWrapper>
				</InputContainer>
			</Form>
		</Page>
	);
};

export default Login;
