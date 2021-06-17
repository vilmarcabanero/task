import * as api from 'redux/api/todolist';
import * as c from 'utils/constants';
// import data from 'data/todo.json';

export const getTodoList = () => async dispatch => {
	try {
		const { data } = await api.getTodoList();
		dispatch({ type: c.GET_TODO_LIST, payload: data });
		// console.log('Line 8',data)
	} catch (err) {
		console.log(err);
	}
};

// export const getTodoList = () => dispatch => {
// 	dispatch({ type: c.GET_TODO_LIST, payload: data });
// 	// console.log('Line 8',data)
// 	console.log(data);
// };
