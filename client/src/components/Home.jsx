import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import Input from './Input/Input';
import Habits from './Habits/Habits';
import { deleteHabit, getHabits } from '../actions/habits';

const Home = () => {
    const [ currentId, setCurrentId ] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHabits());
    }, [ dispatch ])

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent='center' alignItems='center'>
                    <Typography variant='h3'>Bad Habit Tracker</Typography>
                </Grid> 
                <Input currentId={currentId} setCurrentId={setCurrentId} />
                <Habits setCurrentId={setCurrentId} />
            </Container>
        </Grow>
    )
}

export default Home;