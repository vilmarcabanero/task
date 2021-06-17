import * as c from 'utils/constants';

const reducer = (toDoList = [], action) => {
	switch (action.type) {
		case c.GET_TODO_LIST:
			return action.payload;
		default:
			return toDoList;
	}
};

export default reducer;
