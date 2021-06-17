import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as S from './styles';

const ToDoForm = () => {
	const [newTask, setNewTask] = useState('');

	const url = 'http://localhost:4000/api/todolist';

	const createTodo = () => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				task: newTask,
			}),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})
			.catch(err => console.log(err));
	};

	const addTaskHandler = e => {
		e.preventDefault();
		createTodo();
		setNewTask('');
	};

	return (
		<Form onSubmit={addTaskHandler}>
			<S.Group>
				<Form.Control
					type='text'
					placeholder='Add new task'
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
				/>
				<S.Btn type='submit'>Add task</S.Btn>
			</S.Group>
		</Form>
	);
};

export default ToDoForm;
