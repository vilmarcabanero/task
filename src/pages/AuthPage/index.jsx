import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import LoginForm from 'components/Auth/LoginForm';
import RegisterForm from 'components/Auth/RegisterForm';
import TodoPage from 'pages/TodoPage';

const AuthPage = ({ history }) => {
	const [isRegistered, setIsRegistered] = useState(true);
	const [willRedirect, setWillRedirect] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('authToken')) {
			history.push('/');
		}
	}, []);

	return (
		<Container>
			{isRegistered ? (
				<LoginForm
					history={history}
					willRedirect={willRedirect}
					setWillRedirect={setWillRedirect}
					setIsRegistered={setIsRegistered}
				/>
			) : (
				<RegisterForm
					history={history}
					willRedirect={willRedirect}
					setWillRedirect={setWillRedirect}
					setIsRegistered={setIsRegistered}
				/>
			)}
		</Container>
	);
};

export default AuthPage;
