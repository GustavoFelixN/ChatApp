import styled from 'styled-components';
import { Input } from 'antd';

export const BaseInput = styled(Input)`
	margin-bottom: 10px;
	background-color: #380356;
	color: #fff;
	&::placeholder {
		color: #A17DBE;
	}
`;
