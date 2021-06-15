import React, { useState } from 'react';
import data from 'data/todo.json';
import Header from 'components/Todo/Header';
import ToDoList from 'components/Todo/ToDoList';

const TodoPage = () => {
	const [toDoList, setToDoList] = useState(data);
	// console.log(toDoList);

	const handleToggle = id => {
		let mapped = toDoList.map(todo => {
			return todo.id === Number(id)
				? { ...todo, complete: !todo.complete }
				: { ...todo };
		});
		setToDoList(mapped);
		// console.log(parseFloat((3.1416).toFixed(2)));
	};

	return (
		<div className='text-center'>
			<Header />
			<ToDoList handleToggle={handleToggle} toDoList={toDoList} />
		</div>
	);
};

export default TodoPage;
