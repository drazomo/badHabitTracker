import { Card, Box, CardContent, Typography } from '@material-ui/core';

import useStyles from './styles';

const Habits = () => {
    const classes = useStyles();


    return (
      <Card className={classes.root}>
      <Box alignItems="center" className={classes.details}>
        <CardContent className={classes.content}>
          <Typography align="center" component="h5" variant="h5" pd={1}>
            Total Time
          </Typography>
          <Typography>[put every habit, refresh icon, delete icon, duration of time]</Typography>
        </CardContent>
      </Box>
    </Card>
    )
}

export default Habits;