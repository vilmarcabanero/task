import React from 'react';
import ToDo from 'components/Todo/ToDo';

const ToDoList = ({ toDoList, handleToggle }) => {
	// console.log(toDoList)
	return (
		<div>
			{toDoList.map(todo => {
				return <ToDo handleToggle={handleToggle} key={todo.id} todo={todo} />;
			})}
		</div>
	);
};

export default ToDoList;
