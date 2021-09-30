import { AUTH } from '../constants';
import * as api from '../api';

export const signin = (submittedData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(submittedData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (err) {
        console.log(err);
    }
};

export const signup = (submittedData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(submittedData);

        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (err) {
        console.log(err);
    }
}