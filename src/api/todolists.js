import api from 'api';

export const getActiveTodolist = async setToDoList => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('authToken')}`,
			},
		};

		const { data } = await api.get('/todos/active', config);

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
		const { data } = await api.get('/todos/complete', config);
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
		await api.patch(`/todos/archive`, {}, config);
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
		const { data } = await api.get(`/todos/${_id}`, config);

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
		await api.patch(`/todos/complete/${_id}`, {}, config);
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
		await api.patch(`/todos/incomplete/${_id}`, {}, config);
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
		await api.post(`/todos`, { task: newTask }, config);
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
		await api.patch(`/todos/${_id}`, { task: selectedTask }, config);
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
		await api.delete(`/todos/${_id}`, config);
		setState(!state);
		getActiveTodolist(setToDoList);
	} catch (err) {
		console.log(err.response.data);
	}
};
