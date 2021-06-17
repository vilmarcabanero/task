import React from 'react';
import './styles.css';
import TodolistContext from 'context/todolist';

const ToDo = ({ todo }) => {
	const { toDoList } = React.useContext(TodolistContext);

	const url = 'http://localhost:4000/api/todolist';

	const makeComplete = _id => {
		fetch(`${url}/makecomplete/${_id}`, {
			method: 'PUT',
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})
			.catch(err => console.log(err));
	};

	const makeIncomplete = _id => {
		fetch(`${url}/makeincomplete/${_id}`, {
			method: 'PUT',
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})
			.catch(err => console.log(err));
	};

	const handleToggle = _id => {
		const [selectedTodo] = toDoList.filter(todo => todo._id === _id);

		if (selectedTodo.complete) {
			makeIncomplete(_id);
		} else {
			makeComplete(_id);
		}
	};

	return (
		<div
			onClick={e => handleToggle(e.target.id)}
			id={todo._id}
			className={todo.complete ? 'todo strike' : 'todo'}
		>
			{todo.task}
		</div>
	);
};

export default ToDo;
