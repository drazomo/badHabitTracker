import { CREATE, FETCH_ALL, EDIT, DELETE, UPDATE_TIME } from '../constants';
import * as api from '../api'

export const createHabit = (habit, history) => async (dispatch) => {
    try {
        const { data } = await api.createHabit(habit);
        dispatch({ type: CREATE, payload: data });
        history.push('/');
    } catch (err) {
        console.log(err)
    }
}

export const getHabits = () => async (dispatch) => {
    try {
        const { data } = await api.getHabits();
        dispatch({ type: FETCH_ALL, payload: data });
    }  catch (err) {
        console.log(err.message);
    }
};

export const editHabit = (id, habit) => async (dispatch) => {
    try {
        const { data } = await api.editHabit(id, habit);
        dispatch({ type: EDIT, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const updateTime = (id) => async (dispatch) => {
    try {
        const { data } = await api.updateTime(id);
        dispatch({ type: UPDATE_TIME, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteHabit = id => async (dispatch) => {
    try {
        await api.deleteHabit(id);
        dispatch({ type: DELETE, payload: id });
    } catch (err) {
        console.log(err);
    }
}