import React from 'react';
import { Card, Box, CardContent, Typography, MenuItem, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import RefreshIcon from '@material-ui/icons/Refresh';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHabit, getHabits, updateTime } from '../../actions/habits';
import moment from 'moment';

import useStyles from './styles';

const Habits = ({ setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { habits } = useSelector((state) => state.habits);

    

    return (
      <Card className={classes.root}>
      <Box alignItems="center" className={classes.details}>
        <CardContent className={classes.content}>
          <Typography align="center" component="h5" variant="h5" pd={1}>
            Total Time
          </Typography>
          {habits.map(habit => {
        const { title, _id, createAt } = habit;
        return (
          <React.Fragment key={_id}>
            <Box>
              <Typography variant='h6' align='left'>
                <IconButton aria-label="trash" onClick={() => {
                  dispatch(deleteHabit(_id));
                  dispatch(getHabits());
                  }}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="edit" onClick={() => setCurrentId(_id)}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="refreshTime" onClick={() => {
                  dispatch(updateTime(_id));
                  dispatch(getHabits());
                  }}>
                  <RefreshIcon fontSize='small' />
                </IconButton>
                {title}
              </Typography>
              <Typography variant='subtitle2' align='right'>
                { moment(createAt).fromNow(true) }
              </Typography>
            </Box>
          </React.Fragment>
        )
      })}

        </CardContent>
      </Box>
    </Card>
    )
}

export default Habits;