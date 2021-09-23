import React, { useState } from 'react';
import { Container, Grid, Grow, Typography } from '@material-ui/core';
import Input from './Input/Input';
import Habits from './Habits/Habits';

const Home = () => {
    const [ habit, setHabit ] = useState('');

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(habit)
    }; 

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent='center' alignItems='center'>
                    <Typography variant='h3'>Bad Habit Tracker</Typography>
                </Grid> 
                <Input setHabit={setHabit} habit={habit} handleOnSubmit={handleOnSubmit}/>
                <Habits />
            </Container>
        </Grow>
    )
}

export default Home;