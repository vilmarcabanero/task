import React, { useState } from 'react';
import './styles.css';

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(prevCount => prevCount + 1);
	};

	const decrement = () => {
		setCount(prevCount => prevCount - 1);
	};

	return (
		<div className='container'>
			<h2 className='title'>Hello from Counter.</h2>
			<span className='counter'>{count}</span>
			<div className='button-container'>
				<button id='minus-button' onClick={decrement}>
					Decrement
				</button>
				<button id='plus-button' onClick={increment}>
					Increment
				</button>
			</div>
		</div>
	);
};

export default Counter;
