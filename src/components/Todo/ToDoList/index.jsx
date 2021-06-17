import React, { useContext } from 'react';
import ToDo from 'components/Todo/ToDoList/ToDo';
import TodolistContext from 'context/todolist';

const ToDoList = () => {
	const { handleToggle, toDoList } = useContext(TodolistContext);

	return toDoList.map(todo => {
		return <ToDo handleToggle={handleToggle} key={todo._id} todo={todo} />;
	});
};

export default ToDoList;
