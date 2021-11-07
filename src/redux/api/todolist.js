import axios from 'axios';

const url = 'http://localhost:4000/todos';

export const getActiveTodolist = () => axios.get(`${url}/active`);
