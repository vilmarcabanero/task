import axios from 'axios';

export default axios.create({
	// baseURL: `http://localhost:4000/api`,
	// baseURL: `https://vc-task.herokuapp.com/api`,
	// baseURL: 'https://task-loopback.herokuapp.com/'

	// baseURL: `https://nestjs-my-starter.herokuapp.com/api`
  baseURL: `${process.env.TASK_API_URL}/api`
});
