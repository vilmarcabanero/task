import React from 'react';

const LoginForm = () => {
	return (
		<form>
			<label>Email: </label>
			<input type='email' placeholder='Email address' />
			<br />
			<label>Password: </label>
			<input type='password' placeholder='Password' />
		</form>
	);
};

export default LoginForm;

