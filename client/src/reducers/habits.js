import { CREATE, FETCH_ALL, EDIT, DELETE, UPDATE_TIME } from "../constants";

export default (state = { habits: [] }, action) => {
    switch (action.type) {
        case CREATE:
            return { ...state, habits : [...state.habits, action.payload] };
        case FETCH_ALL:
            return { ...state, habits: action.payload };
        case EDIT:
            return { ...state, habits: state.habits.map(habit => (habit._id === action.payload._id ? action.payload : habit)) };
        case UPDATE_TIME:
            return { ...state, habits: state.habits.map(habit => (habit._id === action.payload._id ? action.payload : habit)) };
        case DELETE:
            return { ...state, habits: state.habits.filter(habit => habit._id !== action.payload._id )}
        default:
            return state;
    }
};

