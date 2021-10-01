import { Grid, IconButton, InputBase, Paper } from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useEffect, useState } from "react";
import { createHabit, editHabit } from "../../actions/habits";

import useStyles from './styles';

const Input = ({ setCurrentId, currentId }) => {
    const [ habit, setHabit ] = useState({title: ''});
    const record = useSelector(state => (currentId ? state.habits.habits.find(habit => habit._id === currentId) : null));
    const history = useHistory();
    const dispatch = useDispatch();
    const classes  = useStyles();
    const user = JSON.parse(localStorage.getItem('profie'));

    useEffect(() => {
        if(!record?.title) clear();
        if(record) setHabit(record);
    }, [ record, dispatch ]);

    const clear = () => {
        setCurrentId(0);
        setHabit({title: ''});
    };


    const handleOnSubmit = e => {
        e.preventDefault();

        if(currentId === 0) {
            dispatch(createHabit({...habit, name: user?.result?.name}, history));
            clear();
        } else {
            dispatch(editHabit(currentId, {...habit, name: user?.result?.name}));
            clear();
        }
    }; 

    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Paper component='form' onSubmit={handleOnSubmit} className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder='Track Habit'
                    inputProps={{ 'aria-label': 'Track Habit', }}
                    onChange={e => setHabit({...habit, title : e.target.value})}
                    name='title'
                    value={habit.title}
                /> 
                <IconButton type='submit' className={classes.iconButton}>
                    <PostAddIcon />
                </IconButton>
            </Paper>
        </Grid>
    )
}

export default Input;