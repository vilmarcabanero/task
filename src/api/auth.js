import api from 'api';

export const register = async (
	setIsValid,
	setError,
	registerUserData,
	setRegisterUserData,
	history
) => {
	try {
		const { data } = await api.post('/auth/register', registerUserData);
		// console.log(data);
		if (data.status === 'ok') {
			setRegisterUserData({
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
			console.log(data);
			localStorage.setItem('authToken', data.token);
			history.push('/');
		} else {
			setIsValid(false);
			setError(data.message);
		}
	} catch (err) {
		console.log(err);
	}
};

export const login = async (
	setIsValid,
	setError,
	loginUserData,
	setLoginUserData,
	history
) => {
	try {
		const { data } = await api.post('/auth/login', loginUserData);
		// console.log(data);
		if (data.status === 'ok') {
			setLoginUserData({
				email: '',
				password: '',
			});
			console.log(data);
			localStorage.setItem('authToken', data.token);
			history.push('/');
		} else {
			setIsValid(false);
			setError(data.message);
		}

		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
