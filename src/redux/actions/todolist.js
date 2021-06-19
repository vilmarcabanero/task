import * as api from 'redux/api/todolist';
import * as c from 'utils/constants';
// import data from 'data/todo.json';

export const getActiveTodolist = () => async dispatch => {
	try {
		const { data } = await api.getActiveTodolist();
		dispatch({ type: c.GET_ACTIVE_TODOLIST, payload: data });
		console.log('Line 9', data);
	} catch (err) {
		console.log(err);
	}
};
