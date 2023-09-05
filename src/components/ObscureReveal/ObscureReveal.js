'use client';

import React from 'react';

function ObscureReveal({ children }) {
	const [isMouseOver, setMouseOver] = React.useState(false);
	return (
		<>
			<button
				className={isMouseOver ? '' : 'censored'}
				onMouseOver={() => setMouseOver(true)}
				onMouseLeave={() => setMouseOver(false)}
			>
				{children}
			</button>
		</>
	);
}

export default ObscureReveal;
