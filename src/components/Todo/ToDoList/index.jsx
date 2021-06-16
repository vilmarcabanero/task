import React from 'react';
import ToDo from 'components/Todo/ToDoList/ToDo';

const ToDoList = ({ toDoList, handleToggle }) => {
	return toDoList.map(todo => {
		return <ToDo handleToggle={handleToggle} key={todo.id} todo={todo} />;
	});
};

export default ToDoList;
