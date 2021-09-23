import { Grid, IconButton, InputBase, Paper } from "@material-ui/core"
import PostAddIcon from '@material-ui/icons/PostAdd';

import useStyles from './styles';

const Input = ({ habit, setHabit, handleOnSubmit }) => {
    const classes  = useStyles();

    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Paper component='form' onSubmit={handleOnSubmit} className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder='Track Habit'
                    inputProps={{ 'aria-label': 'Track Habit', }}
                    onChange={e => setHabit(e.target.value)}
                    name='habit'
                    value={habit}
                /> 
                <IconButton type='submit' className={classes.iconButton}>
                    <PostAddIcon />
                </IconButton>
            </Paper>
        </Grid>
    )
}

export default Input;