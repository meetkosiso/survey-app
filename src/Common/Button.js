import React from 'react';

function Button({ buttonClass, label, optional, onPress, disabled }) {
	return (
		<button
			onClick={onPress}
			disabled={disabled}
			className={buttonClass}
			type="button"
		>
			{optional}
			{label}
		</button>
	);
}

export default Button;
