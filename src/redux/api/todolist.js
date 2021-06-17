import axios from 'axios';

const url = 'https://vc-booking-api.herokuapp.com/api';

export const getTodoList = () => axios.get(`${url}/courses/unauth`);

