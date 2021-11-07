import axios from 'axios';

export default axios.create({
	baseURL: `http://localhost:4000`,
	// baseURL: `https://vc-task.herokuapp.com/api`,
	// baseURL: 'https://damp-sea-61499.herokuapp.com/'

	// baseURL: `http://localhost:5000/`
});
