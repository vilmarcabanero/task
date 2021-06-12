import React, { useState } from 'react';
import * as S from './styles';

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(prevCount => prevCount + 1);
	};

	const decrement = () => {
		setCount(prevCount => prevCount - 1);
	};

	return (
		<S.Container>
			<S.Title>Hello from Counter.</S.Title>
			<S.Count>{count}</S.Count>
			<S.ButtonContainer>
				<S.Button onClick={decrement}>Decrement</S.Button>
				<S.Button onClick={increment}>Increment</S.Button>
			</S.ButtonContainer>
		</S.Container>
	);
};

export default Counter;
