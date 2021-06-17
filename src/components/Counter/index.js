import React, { useState } from 'react';
import * as S from './styles';

const Counter = () => {
	const [count, setCount] = useState(0);
	// const toDoList = useSelector(state => state.toDoList);

	// console.log(toDoList);

	const increment = () => {
		setCount(prevCount => prevCount + 1);
	};

	const decrement = () => {
		setCount(prevCount => prevCount - 1);
	};

	return (
		<S.Container>
			<S.Title>Todolist</S.Title>

			<br />
			<br />
			<br />
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
