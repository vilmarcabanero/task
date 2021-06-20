import api from 'api';

export const getActiveTodolist = async setToDoList => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};

		const { data } = await api.get('/todolist/active', config);

		// console.log(data);
		setToDoList(data);
	} catch (err) {
		console.log(err.response.data);
	}
};

export const getCompleteTodolist = async setToDoList => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};
		const { data } = await api.get('/todolist/complete', config);
		setToDoList(data);
	} catch (err) {
		console.log(err.response.data);
	}
};

export const archiveCompleteTodolist = async (state, setState, setToDoList) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};
		await api.put(`/todolist/archive`, {}, config);
		setState(!state);
		getActiveTodolist(setToDoList);
	} catch (err) {
		console.log(err.response.data);
	}
};

export const getTodo = async _id => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};
		const { data } = await api.get(`/todolist/${_id}`, config);

		// console.log(data._id === _id);
		return data;
	} catch (err) {
		console.log(err.response.data);
	}
};

export const makeComplete = async (_id, state, setState, setToDoList) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};
		await api.put(`/todolist/makecomplete/${_id}`, {}, config);
		setState(!state);
		getActiveTodolist(setToDoList);
	} catch (err) {
		console.log(err.response.data);
	}
};

export const makeIncomplete = async (_id, state, setState, setToDoList) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};
		await api.put(`/todolist/makeincomplete/${_id}`, {}, config);
		setState(!state);
		getActiveTodolist(setToDoList);
	} catch (err) {
		console.log(err.response.data);
	}
};

export const createTodo = async (newTask, state, setState, setToDoList) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};
		await api.post(`/todolist`, { task: newTask }, config);
		setState(!state);
		getActiveTodolist(setToDoList);
	} catch (err) {
		console.log(err.response.data);
	}
};

export const updateTodo = async (
	_id,
	selectedTask,
	state,
	setState,
	setToDoList
) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};
		// console.log(_id)
		await api.put(`/todolist/${_id}`, { task: selectedTask }, config);
		setState(!state);
		getActiveTodolist(setToDoList);
	} catch (err) {
		console.log(err.response.data);
	}
};

export const deleteTodo = async (_id, state, setState, setToDoList) => {
	try {
		// console.log(_id)
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};
		await api.delete(`/todolist/${_id}`, config);
		setState(!state);
		getActiveTodolist(setToDoList);
	} catch (err) {
		console.log(err.response.data);
	}
};
