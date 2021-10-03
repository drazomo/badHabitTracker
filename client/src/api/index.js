import axios from 'axios';

const API = axios.create({ baseURL : 'http://localhost:5000' });

API.interceptors.request.use(req => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

export const createHabit = newHabit => API.post('/habits', newHabit);
export const editHabit = (id, editedHabit) => API.patch(`/habits/${id}`, editedHabit);
export const deleteHabit = (id) => API.delete(`/habits/${id}`);
export const updateTime = (id) => API.patch(`/habits/${id}/updateTime`);
export const getHabits = () => API.get('/habits');

export const signUp = formData => API.post('/users/signup', formData);
export const signIn = formData => API.post('/users/signin', formData);