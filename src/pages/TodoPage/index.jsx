import React, { useState, useEffect } from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';

import Header from 'components/Todo/Header';
import ToDoList from 'components/Todo/ToDoList';
import ToDoForm from 'components/Todo/ToDoForm';

import { TodolistProvider } from 'context/todolist';

const TodoPage = () => {
	const [toDoList, setToDoList] = useState([]);

	useEffect(() => {
		getTodolist();
	}, [toDoList]);

	const getTodolist = () => {
		fetch('http://localhost:4000/api/todolist/all')
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setToDoList(data);
			});
	};

	const handleToggle = _id => {
		let mapped = toDoList.map(todo => {
			return todo._id === Number(_id)
				? { ...todo, complete: !todo.complete }
				: { ...todo };
		});
		setToDoList(mapped);
	};

	const handleFilter = () => {
		let filtered = toDoList.filter(task => !task.complete);
		setToDoList(filtered);
	};

	const todolistProviderValues = {
		toDoList,
		setToDoList,
		handleToggle,
	};

	return (
		<TodolistProvider value={todolistProviderValues}>
			<Container className='text-center'>
				<Row>
					<Col className='m-auto mt-3 mb-5' xs={12} md={4}>
						<Header />
						<Card className='mb-3'>
							<Card.Body>
								<ToDoList />
							</Card.Body>
						</Card>

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
