import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import * as S from './styles';
import TodolistContext from 'context/todolist';

const ToDoForm = () => {
	const [newTask, setNewTask] = useState('');

	const { toDoList, setToDoList } = useContext(TodolistContext);

	const addTaskHandler = e => {
		e.preventDefault();
		setToDoList([
			...toDoList,
			{
				task: newTask,
				complete: false,
			},
		]);

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
