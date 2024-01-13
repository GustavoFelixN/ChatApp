import React from 'react';
import { BaseInput } from './styles.js';

const Input = ({...props}) => {
	return (
		<BaseInput
			{...props}
		/>
	);
};

export default Input;
