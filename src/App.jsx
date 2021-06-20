import React, { useState, useEffect } from 'react';
import { UserProvider } from 'context/user';
import { Switch, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getActiveTodolist } from 'redux/actions/todolist';

import TodoPage from 'pages/TodoPage';
import AuthPage from 'pages/AuthPage';
import PrivateRoute from 'components/routing/PrivateRoute';
// import RegisterForm from 'components/Auth/RegisterForm'

const App = () => {
	// console.log(user);

	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getActiveTodolist());
	// }, [dispatch]);

	// const toDoList = useSelector(state => state.toDoList);

	// console.log('toDoList using redux.', toDoList);

	return (
		<>
			<Switch>
				{/* <Route exact path='/'>
					{localStorage.getItem('authToken') ? <TodoPage /> : <Redirect to='/auth' />}
				</Route>
				<Route exact path='/auth'>
					{localStorage.getItem('authToken') ? <Redirect to='/' /> : <AuthPage />}
				</Route> */}

				{/* <Route exact path='/' component={TodoPage} /> */}
				<PrivateRoute exact path='/' component={TodoPage} />
				<Route exact path='/auth' component={AuthPage} />
			</Switch>
		</>
	);
};

export default App;
