import React, { useContext } from 'react';
import ToDo from 'components/Todo/ToDoList/ToDo';
import TodolistContext from 'context/todolist';

const ToDoList = () => {
	const { toDoList } = useContext(TodolistContext);

	return toDoList.map(todo => {
		return <ToDo key={todo.id} todo={todo} />;
	});
};

export default ToDoList;
