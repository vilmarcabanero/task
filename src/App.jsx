import React, { useState } from 'react';
import { UserProvider } from 'context/user';

// import { useDispatch } from 'react-redux';
// import { getActiveTodolist } from 'redux/actions/todolist';

import TodoPage from 'pages/TodoPage';
// import RegisterForm from 'components/Auth/RegisterForm'

const App = () => {
	const [user, setUser] = useState({});
	const todolistProviderValues = {
		user,
		setUser,
	};

	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getActiveTodolist());
	// }, [dispatch]);

	// const toDoList = useSelector(state => state.toDoList);

	// console.log('toDoList using redux.', toDoList);

	return (
		<UserProvider value={todolistProviderValues}>
			<>
				<TodoPage />
				{/* <RegisterForm /> */}
			</>
		</UserProvider>
	);
};

export default App;
