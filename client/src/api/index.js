import axios from 'axios';

const API = axios.create({ baseURL : 'http://localhost:5000' });

export const createHabit = newHabit => API.post('/habits', newHabit);
export const editHabit = (id, editedHabit) => API.patch(`/habits/${id}`, editedHabit);
export const deleteHabit = (id) => API.delete(`/habits/${id}`);
export const updateTime = (id) => API.patch(`/habits/${id}/updateTime`);
export const getHabits = () => API.get('/habits');
