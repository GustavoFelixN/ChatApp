import styled from 'styled-components';

export const Page = styled.div`
	display: flex;
	flex: 1;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: black;
`;

export const Title = styled.h1`
	color: #380356;
	text-shadow: 0 0 10px rgba(150, 50, 255, 1), 0 0 20px rgba(150, 50, 255, 1), 0 0 30px rgba(150, 50, 255, 1);
`;

export const InputContainer = styled.div`
	border: 2px solid #380356;
	border-radius: 10px;
	margin: 25px;
	padding: 55px 55px 20px 55px;
	display: flex;
	flex-direction: column;
	background-color: rgba(107, 56, 135, 0.2);
`;

export const InputWrapper = styled.div`
	margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 10px;
`;
