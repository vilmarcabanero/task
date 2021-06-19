import React, { useState, useEffect } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';

import Header from 'components/Todo/Header';
import ToDoList from 'components/Todo/ToDoList';
import ToDoForm from 'components/Todo/ToDoForm';

import { TodolistProvider } from 'context/todolist';

import * as api from 'api/todolists';

const TodoPage = () => {
	const [toDoList, setToDoList] = useState([]);

	useEffect(() => {
		api.getActiveTodolist(setToDoList);
	}, [toDoList]);

	const handleFilter = () => {
		api.archiveCompleteTodolist();
	};

	const todolistProviderValues = {
		toDoList,
		setToDoList,
	};

	return (
		<TodolistProvider value={todolistProviderValues}>
			<Container className='text-center'>
				<Row>
					<Col className='m-auto mt-3 mb-5' xs={12} md={4}>
						<Header />
						<ToDoList />

						<Button
							style={{ width: '100%' }}
							className='mb-3'
							variant='primary'
							onClick={handleFilter}
						>
							Clear completed
						</Button>
						<ToDoForm />
					</Col>
				</Row>
			</Container>
		</TodolistProvider>
	);
};

export default TodoPage;
