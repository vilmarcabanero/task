import React, { useState, useEffect } from 'react';
import { UserProvider } from 'context/user';
import { Switch, Route } from 'react-router-dom';

import TodoPage from 'pages/TodoPage';
import AuthPage from 'pages/AuthPage';
import PrivateRoute from 'components/routing/PrivateRoute';

const App = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: ''
	})

	const userProviderValues = {
		user,
		setUser
	}

	return (
		<UserProvider value={userProviderValues}>
			<Switch>


				{/* <Route exact path='/' component={TodoPage} /> */}
				<PrivateRoute exact path='/' component={TodoPage} />
				<Route exact path='/auth' component={AuthPage} />
			</Switch>
		</UserProvider>
	);
};

export default App;
