import React from 'react';
import './styles.css';
import TodolistContext from 'context/todolist';
import { api } from 'utils/constants';
import { Card } from 'react-bootstrap';

const ToDo = ({ todo }) => {
	const { toDoList } = React.useContext(TodolistContext);

	const makeComplete = _id => {
		fetch(`${api}/todolist/makecomplete/${_id}`, {
			method: 'PUT',
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})
			.catch(err => console.log(err));
	};

	const makeIncomplete = _id => {
		fetch(`${api}/todolist/makeincomplete/${_id}`, {
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
		<div className='m-2'>
			<Card className='p-2'>
				<div
					onClick={e => handleToggle(e.target.id)}
					id={todo._id}
					className={todo.complete ? 'todo strike' : 'todo'}
				>
					{todo.task}
				</div>
			</Card>
		</div>
	);
};

export default ToDo;
