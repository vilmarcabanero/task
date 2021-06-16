import React from 'react';
import './styles.css';

const ToDo = ({ todo, handleToggle }) => {
	return (
		<div
			onClick={e => handleToggle(e.target.id)}
			id={todo.id}
			className={todo.complete ? 'todo strike' : 'todo'}
		>
			{todo.task}
		</div>
	);
};

export default ToDo;
