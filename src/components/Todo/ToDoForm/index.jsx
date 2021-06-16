import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as S from './styles';

const ToDoForm = ({ toDoList, setToDoList }) => {
	const [newTask, setNewTask] = useState('');

	const addTaskHandler = () => {
		setToDoList([
			...toDoList,
			{
				id: Math.random(),
				task: newTask,
				complete: false,
			},
		]);

		setNewTask('');
	};

	return (
		<Form>
			<S.Group>
				<Form.Control
					type='text'
					placeholder='Add new task'
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
				/>
				<S.Btn onClick={addTaskHandler}>Add task</S.Btn>
			</S.Group>
		</Form>
	);
};

export default ToDoForm;
