// import Counter from 'components/Counter';
import React, { Fragment, useEffect } from 'react';
import TodoPage from 'pages/TodoPage';

import { useDispatch } from 'react-redux';
import { getTodoList } from 'redux/actions/todolist';


const App = () => {


	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTodoList());
	}, [dispatch]);
	return (
		<Fragment>
			{/* <Counter /> */}
			<TodoPage />
		</Fragment>
	);
};

export default App;
