import * as c from 'utils/constants';

const reducer = (state = [], action) => {
	switch (action.type) {
		case c.GET_ACTIVE_TODOLIST:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
