import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles'


const NavBar = () => {
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const classes  = useStyles();

    return (
        <AppBar className={classes.AppBar} position='static' color='inherit'>
            <Typography variant='h3'>Bad Habit Tracker</Typography>
            <Toolbar className={classes.toolbar}>
                <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;