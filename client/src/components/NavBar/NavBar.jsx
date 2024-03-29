import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { Link, useHistory, useLocation } from 'react-router-dom';

import useStyles from './styles'
import { LOGOUT } from '../../constants';


const NavBar = () => {
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const classes  = useStyles();

    const logout = () => {
        dispatch({ type: LOGOUT });
        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout()
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [ dispatch, location ]);

    return (
        <AppBar className={classes.AppBar} position='static' color='inherit'>
            <Link to='/' className={classes.brandContainer}> 
            <Typography variant='h3'>Bad Habit Tracker</Typography>
            </Link>
            <Toolbar className={classes.toolbar}>
                { user?.result ? (
                <div className={classes.profile}> 
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}> { user?.result.name.charAt(0) } </Avatar>
                    <Typography className={classes.userName} variant='h6'>{user?.result.name}</Typography>
                    <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                </div> ) : (<Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>)
                }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;