import React, { useState } from 'react';
import { UserProvider } from 'context/user';

import TodoPage from 'pages/TodoPage';
// import RegisterForm from 'components/Auth/RegisterForm'

const App = () => {
	const [user, setUser] = useState({});

	const todolistProviderValues = {
		user,
		setUser,
	};

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
