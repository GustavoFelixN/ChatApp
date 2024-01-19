import styled from 'styled-components';
import { Title as BaseTitle} from '../Login/styles.js';

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: black;
`;

export const Title = styled(BaseTitle)`
	align-self: center;
	font-size: 45px;
`;
