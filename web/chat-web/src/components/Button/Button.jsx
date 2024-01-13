import React from 'react';
import { BaseButton } from './styles.js';

const Button = ({children, ...props}) => {
	return (
		<BaseButton { ...props }>
			{ children }
		</BaseButton>
	);
};

export default Button;
