import { api } from 'utils/constants';

export const getActiveTodolist = setToDoList => {
	fetch(`${api}/todolist/active`)
		.then(res => res.json())
		.then(data => {
			// console.log(data);
			setToDoList(data);
		})
		.catch(err => console.log(err));
};

export const archiveCompleteTodolist = () => {
	fetch(`${api}/todolist/archive`, {
		method: 'PUT',
	})
		.then(res => res.json())
		.then(data => {
			console.log(data);
		})
		.catch(err => console.log(err));
};
