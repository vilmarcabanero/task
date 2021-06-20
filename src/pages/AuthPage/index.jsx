import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import LoginForm from 'components/Auth/LoginForm';
import RegisterForm from 'components/Auth/RegisterForm';

const AuthPage = ({ history }) => {
	const [isRegistered, setIsRegistered] = useState(true);
	const [willRedirect, setWillRedirect] = useState(false);

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
