import React, { useState, useEffect } from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';

import Header from 'components/Todo/Header';
import ToDoList from 'components/Todo/ToDoList';
import ToDoForm from 'components/Todo/ToDoForm';

const TodoPage = () => {
	const [toDoList, setToDoList] = useState(
		JSON.parse(localStorage.getItem('toDoList')) || []
	);

	useEffect(() => {
		localStorage.setItem('toDoList', JSON.stringify(toDoList));
	}, [toDoList]);

	const handleToggle = id => {
		let mapped = toDoList.map(todo => {
			return todo.id === Number(id)
				? { ...todo, complete: !todo.complete }
				: { ...todo };
		});
		setToDoList(mapped);
	};

	const handleFilter = () => {
		let filtered = toDoList.filter(task => !task.complete);
		setToDoList(filtered);
	};

	return (
		<Container className='text-center'>
			<Row>
				<Col className='m-auto mt-3 mb-5' xs={12} md={4}>
					<Header />
					<Card className='mb-3'>
						<Card.Body>
							<ToDoList handleToggle={handleToggle} toDoList={toDoList} />
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
					<ToDoForm setToDoList={setToDoList} toDoList={toDoList} />
				</Col>
			</Row>
		</Container>
	);
};

export default TodoPage;
